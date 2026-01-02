# Midhun M - AI/ML Engineer Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19.0-blue?style=flat&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive portfolio website showcasing AI/ML engineering projects, skills, and experience. Built with React, featuring a stunning monochrome design with cyan accents.

## 🎨 Features

- **Animated Hero Section** - Interactive particle network background
- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern UI/UX** - Clean monochrome theme with cyan accents
- **Project Showcase** - Display your AI/ML projects with images and tech stacks
- **Skills Visualization** - Animated progress bars for technical skills
- **Experience Timeline** - Professional work history display
- **Contact Form** - Integrated contact form (currently frontend only)
- **Smooth Animations** - Scroll-triggered animations and transitions

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app) _(Update after deployment)_

## 🛠️ Tech Stack

### Frontend
- **React 19.0** - UI library
- **TailwindCSS 3.4** - Utility-first CSS framework
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library
- **Inter & JetBrains Mono** - Modern typography

### Backend (Optional - Not yet implemented)
- FastAPI
- MongoDB
- Motor (Async MongoDB driver)

## 📁 Project Structure

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Hero.jsx
│   │   │   ├── Navigation.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/
│   │   │   └── mock.js       # Data source (edit this!)
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── components/ui/    # Shadcn UI components
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
└── backend/
    └── server.py             # Future backend API
```

## 🎯 Customization Guide

### 1. Update Your Personal Information

Edit `/app/frontend/src/data/mock.js`:

```javascript
export const profileData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+91 XXXXX XXXXX",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
```

### 2. Add Your Projects

```javascript
export const projectsData = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    techStack: ["Python", "TensorFlow", "FastAPI"],
    impact: "Key achievement or metric",
    metrics: "Additional metrics",
    image: "https://your-image-url.com/image.jpg",
    featured: true
  },
  // Add more projects...
];
```

### 3. Update Skills

Modify the `skillsData` array in `mock.js` with your own skills and proficiency levels.

### 4. Add Your Experience

Update the `experienceData` array with your work history.

### 5. Change Colors (Optional)

Edit `/app/frontend/tailwind.config.js`:

```javascript
colors: {
  cyan: {
    '400': '#00F0FF',  // Change accent color
    '500': '#00D8E8'
  }
}
```

## 💻 Local Development

### Prerequisites
- Node.js 18+ and Yarn installed

### Setup

```bash
# Navigate to frontend
cd /app/frontend

# Install dependencies (already done)
yarn install

# Start development server
yarn start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
cd /app/frontend
yarn build
```

This creates an optimized production build in the `build/` folder.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
4. Deploy!

### Deploy to Netlify

1. Push code to GitHub
2. Import repository in Netlify
3. Configure:
   - **Base Directory**: `frontend`
   - **Build Command**: `yarn build`
   - **Publish Directory**: `frontend/build`
4. Deploy!

## 🔮 Future Enhancements

- [ ] Backend API with MongoDB
- [ ] Contact form email integration
- [ ] Blog section for articles
- [ ] Project filtering and search
- [ ] Dark/Light theme toggle functionality
- [ ] Analytics integration (Google Analytics)
- [ ] SEO optimization
- [ ] Admin dashboard for content management

## 📝 License

MIT License - feel free to use this portfolio template for your own projects!

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📧 Contact

- **Email**: midhun@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourusername)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

**Built with ❤️ by Midhun M**

*Last Updated: January 2025*