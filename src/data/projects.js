import { Code, Database, Globe, BarChart, CloudSun } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Netflix Content Strategy",
    category: "data",
    image: "/assets/images/netflix-analysis.png", 
    techs: ["Python", "Pandas", "Seaborn", "Data Cleaning"],
    description: "End-to-end analysis of Netflix's catalog evolution. Refactored a legacy codebase to implement robust data cleaning and business-oriented visualizations.",
    link: "https://github.com/ArmelKI/Netflix-Content-Analysis",
    icon: BarChart
  },
  {
    id: 2,
    title: "Titanic Survival Prediction",
    category: "ai",
    image: "/assets/images/1743868652707.jpeg", // À remplacer par une capture propre plus tard
    techs: ["Scikit-Learn", "Matplotlib", "Model Tuning"],
    description: "Machine Learning model predicting passenger survival. Advanced feature engineering and hyperparameter optimization.",
    link: "https://github.com/ArmelKI/titanic-analysis",
    icon: Database
  },
  {
    id: 3,
    title: "Weather App Widget",
    category: "web",
    image: "/assets/images/weather-app.png",
    techs: ["JavaScript (ES6+)", "OpenWeatherMap API", "Glassmorphism"],
    description: "Responsive weather widget featuring real-time data fetching, error handling, and dynamic DOM updates.",
    link: "https://github.com/ArmelKI/wheater_app",
    icon: CloudSun
  },
  {
    id: 4,
    title: "CCPS University Portal",
    category: "web",
    image: "/assets/images/1743868775603.jpg",
    techs: ["React", "Tailwind", "Vite"],
    description: "Collaborative showcase website for Nazi Boni University. Modern responsive interface highlighting academic activities.",
    link: "https://github.com/exemplede/CCPS",
    icon: Globe
  },
  {
    id: 5,
    title: " My Portfolio(This Site)",
    category: "web",
    image: "/assets/images/profil-armel.jpg",
    techs: ["React", "Framer Motion", "Tailwind"],
    description: "Interactive portfolio with fluid animations, dark mode, and a reusable component architecture.",
    link: "https://github.com/ArmelKI/portfolio-armel", // Mettre le bon lien de ton repo portfolio
    icon: Code
  }
];