# Quick Start Guide

## 🚀 Get Your Portfolio Live in 30 Minutes!

### Step 1: Download This Code (5 min)

You need to get the `/app` folder to your local computer.

**Option A: If you can access terminal**
```bash
cp -r /app ~/Desktop/midhun-portfolio
cd ~/Desktop/midhun-portfolio
```

**Option B: Manual download**
- Copy the entire `/app` folder
- Save it to your Desktop as `midhun-portfolio`

---

### Step 2: Customize Your Data (10 min)

Open `frontend/src/data/mock.js` and update:

```javascript
// YOUR INFO
export const profileData = {
  name: "Midhun M",              // ← Change this
  email: "midhun@example.com",   // ← Change this
  github: "https://github.com/midhunm",  // ← Change this
  linkedin: "https://linkedin.com/in/midhunm",  // ← Change this
};

// Update projects, skills, experience too!
```

❗ **Important**: Keep the structure same, just change values!

---

### Step 3: Push to GitHub (5 min)

```bash
# In your project folder
cd ~/Desktop/midhun-portfolio

# Initialize git
git init
git add .
git commit -m "My AI/ML Portfolio"

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

👉 **Create GitHub repo**: [github.com/new](https://github.com/new)

---

### Step 4: Deploy on Vercel (10 min)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"New Project"**
4. Select your `portfolio` repo
5. Configure:
   ```
   Root Directory: frontend
   Build Command: yarn build
   Output Directory: build
   ```
6. Click **"Deploy"**
7. Wait 2 minutes... 🚀

**DONE!** Your site is live at: `https://your-name.vercel.app`

---

## 🎯 Share Your Portfolio!

### LinkedIn Post Template:

```
🚀 Excited to share my new portfolio website!

Showcasing my journey in AI/ML Engineering:
• 5+ production-ready AI projects
• Expertise in Agentic AI & NLP
• 1+ years of hands-on experience

🔗 Check it out: [YOUR_VERCEL_URL]

#AI #MachineLearning #Portfolio #DataScience #AIEngineer
```

---

## 🔧 Updating Your Portfolio Later

When you want to add new projects:

1. Edit `frontend/src/data/mock.js`
2. Test locally: `cd frontend && yarn start`
3. Push changes:
   ```bash
   git add .
   git commit -m "Added new project"
   git push
   ```
4. Vercel automatically redeploys! ⚡

---

## ❓ Troubleshooting

**Build fails on Vercel?**
- Check: Root Directory = `frontend` ✅

**Images not loading?**
- Use HTTPS URLs only (not HTTP)

**Need detailed help?**
- Read `DEPLOYMENT_GUIDE.md`
- Read `CHECKLIST.md`

---

**That's it! Your portfolio is live! 🎉**

Questions? Check the detailed guides in:
- `DEPLOYMENT_GUIDE.md` - Full deployment instructions
- `README.md` - Customization guide
- `CHECKLIST.md` - Step-by-step checklist