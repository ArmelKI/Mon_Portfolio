import { Code, Database, Globe, BarChart, CloudSun } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Netflix Content Strategy",
    category: "data",
    image: "/assets/images/netflix-analysis.png", 
    techs: ["Python", "Pandas", "Seaborn", "Data Cleaning"],
    description: "End-to-end analysis of Netflix's catalog evolution. Refactored a legacy codebase to implement robust data cleaning and business-oriented visualizations.",
    link: "https://github.com/ArmelKI/Netflix_data_analysis_V2.git",
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
    title: " My Portfolio(This Site)",
    category: "web",
    image: "/assets/images/profil-armel.jpg",
    techs: ["React", "Framer Motion", "Tailwind"],
    description: "Interactive portfolio with fluid animations, dark mode, and a reusable component architecture.",
    link: "https://github.com/ArmelKI/Mon_Portfolio.git",
  },
  {
    id: 5,
    title: "COVID-19 Live Tracker",
    category: "data",
    image: "/assets/images/covid_trends.png", 
    techs: ["Python", "Pandas", "Automated Pipeline"],
    description: "Automated ETL pipeline fetching live data from OWID. Compares infection trends across 4 countries using rolling averages to smooth variability.",
    link: "https://github.com/ArmelKI/covid19-data-analysis.git",
    icon: BarChart
  }
];
