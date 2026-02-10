# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Edit Your Information
Open `src/data/portfolioData.ts` and update:
- Your name, title, and bio
- Contact information (email, phone, social links)
- Work experience
- Projects
- Skills

### 3. Run the Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## 📝 Quick Customization Tips

### Change Your Name & Title
Edit the `personal` object in `portfolioData.ts`:
```typescript
personal: {
  name: "Your Name",
  title: "Your Title",
  // ...
}
```

### Add a New Project
Add to the `projects` array:
```typescript
{
  id: "4",
  name: "Project Name",
  description: "Project description",
  technologies: ["React", "TypeScript"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://your-site.com",
  highlights: ["Feature 1", "Feature 2"]
}
```

### Update Skills
Modify the `skills` array:
```typescript
{ name: "Skill Name", level: 85, category: "frontend" }
```

## 🎨 Color Customization

Edit `src/index.css` and change the CSS variables:
```css
:root {
  --primary: #6366f1;  /* Change this to your brand color */
  --secondary: #ec4899;
  /* ... */
}
```

## 📦 Build for Production

```bash
npm run build
```

The `dist` folder contains your production-ready portfolio!

---

**Need help?** Check the main README.md for detailed documentation.

