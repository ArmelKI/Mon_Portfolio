import { Code, Database, Globe, BarChart } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Analyse COVID-19",
    category: "data",
    image: "/assets/images/1743868622011.jpeg", // Remplace par le bon nom de fichier si besoin
    techs: ["Python", "Pandas", "Plotly"],
    description: "Pipeline d'analyse de données automatisé sur les cas de COVID-19. Comparaison internationale et visualisation interactive.",
    link: "https://github.com/ArmelKI/covid19-data-analysis",
    icon: BarChart
  },
  {
    id: 2,
    title: "Titanic Survival Prediction",
    category: "ai",
    image: "/assets/images/1743868652707.jpeg",
    techs: ["Scikit-Learn", "Matplotlib", "Kaggle"],
    description: "Modèle de Machine Learning pour prédire la survie des passagers du Titanic. Feature engineering et optimisation de modèle.",
    link: "https://github.com/ArmelKI/titanic-analysis",
    icon: Database
  },
  {
    id: 3,
    title: "Site Centre Compétences",
    category: "web",
    image: "/assets/images/1743868775603.jpg",
    techs: ["React", "Tailwind", "Vite"],
    description: "Site vitrine collaboratif pour l'Université Nazi Boni. Interface moderne et responsive pour mettre en avant les activités.",
    link: "https://github.com/exemplede/CCPS",
    icon: Globe
  },
  {
    id: 4,
    title: "Portfolio V2 (Ce site)",
    category: "web",
    image: "/assets/images/profil-armel.jpg",
    techs: ["React", "Framer Motion", "Tailwind"],
    description: "Portfolio interactif avec animations fluides, dark mode et architecture de composants réutilisables.",
    link: "https://github.com/ArmelKI/Mon_portfolio",
    icon: Code
  }
];