# Software Engineer Portfolio

Personal portfolio showcasing my projects, skills, and experience as a Java Backend Developer. A dynamic, animated portfolio website built with React, TypeScript, and Framer Motion. Features a modern aesthetic design with smooth animations and easy-to-edit content.

## 🚀 Features

- **Modern Design**: Beautiful gradient themes and smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Easy to Edit**: All content is centralized in a single data file
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Sections**: Hero, About, Experience, Skills, Projects, and Contact

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── portfolioData.ts  # ⭐ Edit this file to update your portfolio
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Customization

### Editing Your Portfolio Content

All portfolio content is stored in `src/data/portfolioData.ts`. Simply edit this file to update:

1. **Personal Information**
   - Name, title, location
   - Email, phone, social links
   - Bio and years of experience

2. **Work Experience**
   - Add/remove/edit work experiences
   - Update job descriptions, technologies used
   - Modify duration and location

3. **Projects**
   - Add your projects with descriptions
   - Include GitHub and live demo links
   - List technologies and highlights

4. **Skills**
   - Add or modify skills
   - Set proficiency levels (1-100)
   - Categorize by frontend, backend, tools, or other

### Example: Adding a New Project

```typescript
{
  id: "4",
  name: "My New Project",
  description: "A description of what the project does.",
  technologies: ["React", "TypeScript", "Node.js"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://your-project-demo.com",
  highlights: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

### Example: Adding a New Skill

```typescript
{ name: "Vue.js", level: 85, category: "frontend" }
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## 🎯 Sections Overview

### Hero Section
- Animated introduction with your name and title
- Call-to-action buttons
- Social media links
- Floating gradient orbs for visual appeal

### About Section
- Personal bio
- Statistics cards (years of experience, projects, etc.)
- Contact information

### Experience Section
- Timeline view of work experience
- Job descriptions and responsibilities
- Technologies used at each position

### Skills Section
- Categorized skills (Frontend, Backend, Tools, Databases)
- Animated progress bars showing proficiency levels
- Hover effects for interactivity

### Projects Section
- Grid layout of featured projects
- Project descriptions and highlights
- Links to GitHub and live demos
- Technology tags

### Contact Section
- Contact form (currently simulates submission)
- Contact information display
- Social media links

## 🎨 Styling Customization

The color scheme and styling can be customized in `src/index.css`. Look for the `:root` CSS variables:

```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --bg-dark: #0f172a;
  /* ... more variables */
}
```

Change these values to match your preferred color scheme.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small Mobile (< 480px)

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📝 Notes

- The contact form currently simulates submission. To make it functional, integrate with a service like Formspree, EmailJS, or your own backend API.
- Project images are placeholders. Add actual project screenshots by updating the `image` property in project data.
- All animations use Framer Motion. Adjust animation timings in component files if needed.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ using React, TypeScript, and Framer Motion**
