import { Code, Database, Globe, BarChart } from "lucide-react";

export const projects = [
    {
        id: 1,
        title: "COVID-19 Data Analysis",
        category: "data",
        image: "/assets/images/1743868622011.jpeg",
        techs: ["Python", "Pandas", "Plotly"],
        description: "Automated data analysis pipeline for COVID-19 cases. International comparison and interactive visualizations.",
        link: "https://github.com/ArmelKI/covid19-data-analysis",
        icon: BarChart
    },
    {
        id: 2,
        title: "Titanic Survival Prediction",
        category: "ai",
        image: "/assets/images/1743868652707.jpeg",
        techs: ["Scikit-Learn", "Matplotlib", "Kaggle"],
        description: "Machine Learning model to predict Titanic passenger survival. Includes feature engineering and model optimization.",
        link: "https://github.com/ArmelKI/titanic-analysis",
        icon: Database
    },
    {
        id: 3,
        title: "Competence Center Website",
        category: "web",
        image: "/assets/images/1743868775603.jpg",
        techs: ["React", "Tailwind", "Vite"],
        description: "Collaborative showcase website for Nazi Boni University. Modern, responsive interface highlighting activities and achievements.",
        link: "https://github.com/exemplede/CCPS",
        icon: Globe
    },
    {
        id: 4,
        title: "Portfolio V2 (This Site)",
        category: "web",
        image: "/assets/images/profil-armel.jpg",
        techs: ["React", "Framer Motion", "Tailwind"],
        description: "Interactive portfolio with smooth animations, dark mode, and reusable component architecture.",
        link: "https://github.com/ArmelKI/Mon_portfolio",
        icon: Code
    }
];