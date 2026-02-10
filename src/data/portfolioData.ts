// ============================================
// PORTFOLIO DATA CONFIGURATION
// Edit this file to update your portfolio content
// ============================================

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bio: string;
  yearsOfExperience: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface PortfolioData {
  personal: PersonalInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Your Name",
    title: "Software Engineer",
    location: "City, Country",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    bio: "Passionate software engineer with 2.5 years of experience building scalable web applications. I love solving complex problems and creating elegant solutions.",
    yearsOfExperience: 2.5,
  },
  experiences: [
    {
      id: "1",
      company: "Tech Company Inc.",
      position: "Software Engineer",
      duration: "Jan 2022 - Present",
      location: "Remote",
      description: [
        "Developed and maintained full-stack web applications using React, Node.js, and TypeScript",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive UI components and optimized application performance",
        "Participated in code reviews and contributed to technical decision-making"
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      id: "2",
      company: "Startup XYZ",
      position: "Junior Developer",
      duration: "Jun 2021 - Dec 2021",
      location: "San Francisco, CA",
      description: [
        "Built user-facing features using React and Redux",
        "Worked on RESTful API development using Express.js",
        "Improved application performance by 30% through code optimization",
        "Mentored interns and contributed to team knowledge sharing"
      ],
      technologies: ["React", "Redux", "Express.js", "MongoDB", "Docker"]
    }
  ],
  projects: [
    {
      id: "1",
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce-demo.com",
      highlights: [
        "Implemented secure payment processing",
        "Built responsive admin dashboard",
        "Achieved 99.9% uptime"
      ]
    },
    {
      id: "2",
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-task-app-demo.com",
      highlights: [
        "Real-time collaboration features",
        "Drag-and-drop interface",
        "Advanced filtering and search"
      ]
    },
    {
      id: "3",
      name: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts and interactive maps.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-demo.com",
      highlights: [
        "Interactive weather maps",
        "7-day forecast visualization",
        "Location-based recommendations"
      ]
    }
  ],
  skills: [
    // Frontend
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Express.js", level: 80, category: "backend" },
    { name: "Python", level: 75, category: "backend" },
    { name: "REST APIs", level: 90, category: "backend" },
    { name: "GraphQL", level: 70, category: "backend" },
    
    // Tools & Others
    { name: "Git", level: 90, category: "tools" },
    { name: "Docker", level: 75, category: "tools" },
    { name: "AWS", level: 70, category: "tools" },
    { name: "CI/CD", level: 75, category: "tools" },
    { name: "PostgreSQL", level: 80, category: "other" },
    { name: "MongoDB", level: 75, category: "other" }
  ]
};

