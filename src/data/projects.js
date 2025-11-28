import { Code, Database, Globe, BarChart, CloudSun } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "COVID-19 Analysis Pipeline",
    category: "data",
    image: "/assets/images/1743868622011.jpeg", 
    techs: ["Python", "Pandas", "Plotly"],
    description: "Automated data analysis pipeline tracking COVID-19 trends. International comparison and interactive visualization dashboard.",
    link: "https://github.com/ArmelKI/covid19-data-analysis",
    icon: BarChart
  },
  {
    id: 2,
    title: "Titanic Survival Prediction",
    category: "ai",
    image: "/assets/images/1743868652707.jpeg",
    techs: ["Scikit-Learn", "Matplotlib", "Kaggle"],
    description: "Machine Learning model predicting passenger survival. Advanced feature engineering and model optimization.",
    link: "https://github.com/ArmelKI/titanic-analysis",
    icon: Database
  },
  {
    id: 3,
    title: "Weather App Widget",
    category: "web",
    image: "/assets/images/weather-app.jpg",
    techs: ["JavaScript (ES6+)", "OpenWeatherMap API", "CSS Glassmorphism"],
    description: "Responsive weather widget developed for AXIANE Agency. Features real-time data fetching and dynamic DOM updates.",
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
    title: "My Portfolio (This Site)",
    category: "web",
    image: "/assets/images/profil-armel.jpg",
    techs: ["React", "Framer Motion", "Tailwind"],
    description: "Interactive portfolio with fluid animations, dark mode, and a reusable component architecture.",
    link: "https://github.com/ArmelKI/Mon_portfolio",
    icon: Code
  }
];