import { Code, BarChart, CloudSun, Ship, Bus, Utensils, FileArchive, Bot } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Netflix Content Strategy",
    category: "data",
    image: "/assets/images/netflix-analysis.png",
    techs: ["Python", "Pandas", "Seaborn", "Data Cleaning"],
    description: "End-to-end analysis of Netflix's catalog evolution. Refactored a legacy codebase to implement robust data cleaning and business-oriented visualizations.",
    link: "https://github.com/ArmelKI/Netflix_data_Analysis_V2",
    icon: BarChart
  },
  {
    id: 2,
    title: "Weather App Widget",
    category: "web",
    image: "/assets/images/weather-app.png",
    techs: ["JavaScript (ES6+)", "OpenWeatherMap API", "Glassmorphism"],
    description: "Responsive weather widget featuring real-time data fetching, error handling, and dynamic DOM updates.",
    link: "https://github.com/ArmelKI/wheater_app",
    icon: CloudSun
  },
  {
    id: 3,
    title: "My Portfolio (This Site)",
    category: "web",
    image: "/assets/images/Site.png",
    techs: ["React", "Framer Motion", "Tailwind"],
    description: "Interactive portfolio with fluid animations, dark mode, and a reusable component architecture.",
    link: "https://github.com/ArmelKI/Mon_Portfolio",
    icon: Code
  },
  {
    id: 4,
    title: "COVID-19 Live Tracker",
    category: "data",
    image: "/assets/images/covid_trends.png",
    techs: ["Python", "Pandas", "Automated Pipeline"],
    description: "Automated ETL pipeline fetching live data from OWID. Compares infection trends across 4 countries using rolling averages to smooth variability.",
    link: "https://github.com/ArmelKI/covid19-data-analysis",
    icon: BarChart
  },
  {
    id: 5,
    title: "Titanic Survival Analysis",
    category: "data",
    techs: ["Python", "Pandas", "Seaborn", "Scikit-Learn"],
    description: "Exploratory analysis of the Titanic dataset: data cleaning, visualization of key survival factors, and feature preparation for machine learning.",
    link: "https://github.com/ArmelKI/titanic-analysis",
    icon: Ship
  },
  {
    id: 6,
    title: "Ankata — Transport Booking",
    category: "web",
    techs: ["Node.js", "Express", "Flutter", "Dart", "REST API"],
    description: "Full-stack transport-booking platform connecting passengers with bus companies in Burkina Faso. Node.js/Express API with a Flutter mobile app.",
    link: "https://github.com/ArmelKI/Ankata",
    icon: Bus
  },
  {
    id: 7,
    title: "Quick Menu Africa",
    category: "web",
    techs: ["React", "TypeScript", "Tailwind", "Vite"],
    description: "Digital menu and online-ordering interface designed for African restaurants.",
    link: "https://github.com/ArmelKI/quick-menu-africa",
    icon: Utensils
  },
  {
    id: 8,
    title: "PyCompressor",
    category: "tools",
    techs: ["Python", "CLI"],
    description: "Command-line utility to batch-compress and optimize files efficiently.",
    link: "https://github.com/ArmelKI/PyCompressor",
    icon: FileArchive
  },
  {
    id: 9,
    title: "Social Media Bot",
    category: "tools",
    techs: ["Python", "Automation", "API"],
    description: "Python automation bot that schedules and publishes content across social platforms.",
    link: "https://github.com/ArmelKI/social-media-bot",
    icon: Bot
  }
];
