from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from contextlib import asynccontextmanager


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Configure logging (moved before lifespan)
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Lifespan context manager (replaces on_event)
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: nothing needed for MongoDB client (already initialized)
    logger.info("Application startup")
    yield
    # Shutdown: close MongoDB client
    logger.info("Closing MongoDB connection")
    client.close()


# Create the main app with lifespan
app = FastAPI(lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


@api_router.post("/contact")
async def submit_contact(message: ContactMessage):
    """Receive contact form submissions and forward them via email.

    The email settings are configured via environment variables:
    - CONTACT_RECIPIENT_EMAIL (required): where messages are delivered
    - SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD, SMTP_USE_TLS (optional)
    """

    recipient = os.environ.get("CONTACT_RECIPIENT_EMAIL")
    if not recipient:
        logger.error("CONTACT_RECIPIENT_EMAIL is not set")
        raise HTTPException(status_code=500, detail="Contact is not configured")

    # Store message in MongoDB for backup/audit (best-effort only)
    doc = {
        "id": str(uuid.uuid4()),
        "name": message.name,
        "email": message.email,
        "subject": message.subject,
        "message": message.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    try:
        await db.contact_messages.insert_one(doc)
    except Exception as exc:
        logger.warning("Failed to store contact message in MongoDB: %s", exc)

    # Prepare email content
    body = (
        f"New message from your portfolio website\n\n"
        f"Name: {message.name}\n"
        f"Email: {message.email}\n"
        f"Subject: {message.subject}\n\n"
        f"Message:\n{message.message}\n"
    )

    msg = MIMEText(body)
    msg["Subject"] = f"Portfolio contact: {message.subject}"
    msg["From"] = message.email
    msg["To"] = recipient

    smtp_host = os.environ.get("SMTP_HOST")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ.get("SMTP_USERNAME")
    smtp_password = os.environ.get("SMTP_PASSWORD")
    use_tls = os.environ.get("SMTP_USE_TLS", "true").lower() == "true"

    if not smtp_host:
        logger.warning("SMTP_HOST not set; skipping email send but keeping message in DB")
        return {"success": True, "stored": True, "emailSent": False}

    try:
        with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
            if use_tls:
                server.starttls()
            if smtp_user and smtp_password:
                server.login(smtp_user, smtp_password)
            server.sendmail(message.email, [recipient], msg.as_string())
    except Exception as exc:
        logger.exception("Failed to send contact email: %s", exc)
        raise HTTPException(status_code=500, detail="Failed to send message")

    return {"success": True, "stored": True, "emailSent": True}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)