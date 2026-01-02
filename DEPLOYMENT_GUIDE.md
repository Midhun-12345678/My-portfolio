# 🚀 Complete Deployment Guide

This guide will walk you through deploying your AI/ML Portfolio to **GitHub** and **Vercel**.

## 📋 Prerequisites

- [ ] GitHub account ([Sign up](https://github.com/join))
- [ ] Vercel account ([Sign up](https://vercel.com/signup)) - Use GitHub to sign in
- [ ] Git installed on your computer ([Download](https://git-scm.com/downloads))

---

## 🎯 Step-by-Step Deployment

### **Step 1: Download Your Code**

You have two options:

#### Option A: Use Git (Recommended)
```bash
# Clone or copy the /app directory to your local machine
# If you have access via terminal:
cp -r /app ~/midhun-portfolio
cd ~/midhun-portfolio
```

#### Option B: Download as ZIP
- Download the `/app` folder
- Extract to your desired location
- Rename folder to `midhun-portfolio`

---

### **Step 2: Initialize Git Repository**

Open terminal/command prompt in your project folder:

```bash
# Navigate to your project
cd /path/to/midhun-portfolio

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: AI/ML Portfolio"
```

---

### **Step 3: Create GitHub Repository**

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Fill in:
   - **Repository name**: `midhun-portfolio` (or any name)
   - **Description**: "AI/ML Engineer Portfolio Website"
   - **Visibility**: Public (or Private if you prefer)
   - ❌ **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

---

### **Step 4: Push Code to GitHub**

GitHub will show you commands. Use these:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/midhun-portfolio.git

# Push code
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your GitHub username!

✅ Your code is now on GitHub! Verify by visiting your repository URL.

---

### **Step 5: Deploy to Vercel**

#### 5.1: Sign Up/Login to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

#### 5.2: Import Your Project

1. Click **"Add New..."** → **"Project"**
2. Find and select your `midhun-portfolio` repository
3. Click **"Import"**

#### 5.3: Configure Deployment Settings

**IMPORTANT**: Configure these settings:

```
Framework Preset: Create React App
Root Directory: frontend
Build Command: yarn build
Output Directory: build
Install Command: yarn install
```

**Environment Variables**: (Leave empty for now)

#### 5.4: Deploy!

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. 🎉 Your site is LIVE!

---

## 🌐 Your Live URLs

After deployment, you'll get:

- **Production URL**: `https://midhun-portfolio.vercel.app`
- **Preview URLs**: Generated for each commit

### Add Custom Domain (Optional)

1. Buy a domain (e.g., `midhun.dev` from Namecheap, GoDaddy)
2. In Vercel: **Settings** → **Domains**
3. Add your domain and follow DNS instructions
4. Result: `https://midhun.dev` 🎯

---

## 🔄 Future Updates

When you make changes:

```bash
# Make your changes in the code
# Then commit and push:

git add .
git commit -m "Updated project descriptions"
git push origin main
```

**Vercel automatically deploys your changes!** ⚡

---

## ✅ Verify Deployment

### Check these:

1. **Homepage loads** - Hero section visible
2. **Navigation works** - All sections accessible
3. **Images load** - Project images display correctly
4. **Forms work** - Contact form shows toast on submit
5. **Mobile responsive** - Check on phone
6. **Performance** - Run Google Lighthouse test

### Test Your Live Site

```bash
# Visit your live URL
https://your-portfolio.vercel.app

# Test on mobile
# Open URL on your phone

# Check performance
# Use Google PageSpeed Insights:
https://pagespeed.web.dev/
```

---

## 🐛 Troubleshooting

### Build Failed?

**Error**: `Cannot find module 'react'`
- **Fix**: Ensure `Root Directory` is set to `frontend` in Vercel

**Error**: `Command "yarn build" exited with 1`
- **Fix**: Check build logs, usually missing dependencies
- Solution: `cd frontend && yarn install && yarn build` locally first

### Images Not Loading?

- **Issue**: Mixed content (HTTP images on HTTPS site)
- **Fix**: Use HTTPS image URLs only
- Update image URLs in `/frontend/src/data/mock.js`

### 404 on Page Refresh?

- **Fix**: Add `vercel.json` in `/app/frontend/`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 📊 Analytics (Optional)

Add Google Analytics:

1. Create GA4 property
2. Get tracking ID
3. Add to `/frontend/public/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🎯 Next Steps

1. ✅ Share your live link on LinkedIn!
2. ✅ Add link to GitHub profile
3. ✅ Update resume with portfolio URL
4. ✅ Monitor analytics
5. ✅ Iterate and improve based on feedback

---

## 📧 Need Help?

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Check [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/)
3. Ask in [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Congratulations! Your portfolio is now live! 🎉**

Share it with the world:
- LinkedIn: "Check out my new AI/ML portfolio: [your-url]"
- Twitter/X: "Just launched my portfolio showcasing AI/ML projects"
- GitHub: Add to profile README

---

*Last Updated: January 2025*