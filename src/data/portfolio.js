const l = (fr, en) => ({ fr, en });

export const capabilities = [
  { id: 'web-mobile', index: '01', title: l('Applications web & mobile', 'Web & mobile applications'), description: l('Interfaces, navigation, état et responsive pensés comme un parcours produit.', 'Interfaces, navigation, state and responsive behavior designed as a product journey.'), tech: ['React', 'TypeScript', 'Next.js', 'Flutter', 'Dart'], projects: ['Ankata', 'Quick Menu', 'Sweet Site'] },
  { id: 'backend', index: '02', title: l('Backends, APIs & données', 'Backends, APIs & data'), description: l('Logique métier, REST, authentification et persistance relationnelle.', 'Business logic, REST, authentication and relational persistence.'), tech: ['Node.js', 'Express', 'REST', 'JWT', 'PostgreSQL'], projects: ['Ankata'] },
  { id: 'data-ai', index: '03', title: l('Data & intelligence artificielle', 'Data & artificial intelligence'), description: l('Catégorisation, scoring transparent, analyse et visualisation reliés à un usage.', 'Categorization, transparent scoring, analysis and visualization tied to a use case.'), tech: ['Python', 'Pandas', 'Recharts', 'Matplotlib', 'jsPDF'], projects: ['AxiNafa', 'COVID', 'Netflix'] },
  { id: 'automation', index: '04', title: l('Automatisation & intégrations', 'Automation & integrations'), description: l('PDF/QR, imports distants, cartographie et workflows reproductibles.', 'PDF/QR, remote imports, mapping and reproducible workflows.'), tech: ['GitHub Actions', 'PDF', 'QR', 'OWID', 'Cartographie'], projects: ['Ankata', 'AxiNafa', 'COVID'] },
];

export const journey = {
  experience: [
    { date: l('Août 2026 — août 2028', 'Aug. 2026 — Aug. 2028'), title: l('Apprenti IA et Smart Ops', 'AI & Smart Ops apprentice'), place: 'Sopra Steria Next · AI for Business (AI4B) · Schiltigheim', description: l('Alternance au sein de la practice AI for Business et de l’équipe AI & Smart Ops, autour de solutions d’IA appliquée et d’efficacité opérationnelle.', 'Apprenticeship within the AI for Business practice and the AI & Smart Ops team, around applied AI solutions and operational efficiency.') },
    { date: l('Sept. 2025 — oct. 2026', 'Sep. 2025 — Oct. 2026'), title: l('Chef de projet', 'Project manager'), place: 'Télécom Nancy Services', description: l('Pilotage de projets numériques, encadrement technique et relation client.', 'Digital project management, technical supervision and client relations.') },
    { date: l('Sept. 2025 — sept. 2026', 'Sep. 2025 — Sep. 2026'), title: l('Responsable de projet informatique', 'IT project lead'), place: 'AXIANE Agency', description: l('Direction de projets de développement logiciel, web, IA et data au sein de l’agence.', 'Leadership of software, web, AI and data development projects within the agency.') },
    { date: l('Juil. 2026 — août 2026', 'Jul. 2026 — Aug. 2026'), title: l('Stagiaire AI & Machine Learning', 'AI & Machine Learning intern'), place: 'WP AI Consulting', description: l('Exploration, préparation et interprétation de données géologiques et minières pour des cas d’usage de prédiction de qualité et de teneur.', 'Exploration, preparation and interpretation of geological and mining data for quality and grade prediction use cases.') },
  ],
  education: [
    { date: '2025—2028', title: l('Cycle ingénieur informatique', 'Computer engineering degree'), place: 'Télécom Nancy', description: l('Formation d’ingénieur en informatique.', 'Computer engineering program.') },
    { date: '2023—2025', title: 'CPGE MPSI', place: 'CPGE MENAPLN · Bobo-Dioulasso', description: l('Formation intensive en mathématiques et physique ; bourse d’excellence Fondation Orange.', 'Intensive mathematics and physics training; Fondation Orange excellence scholarship.') },
  ],
  distinctions: [
    { date: '2025', title: l('1er Prix — Olympiades nationales', '1st Prize — National Olympiad'), place: 'Mathématiques & culture générale · MJRA', description: l('Distinction académique nationale.', 'National academic distinction.') },
    { date: '2023', title: l('Représentant du Burkina Faso', 'Representative of Burkina Faso'), place: 'International Mathematical Olympiad · Tokyo', description: l('Participation à l’Olympiade internationale de mathématiques.', 'Participation in the International Mathematical Olympiad.') },
  ],
};

export const selectedCredentialIds = [2, 4, 3, 24, 31];

export const credentialOverrides = {
  2: { date: l('15 avr. 2025', 'Apr. 15, 2025'), note: l('Python, Pandas et analyse de données.', 'Python, Pandas and data analysis.') },
  4: { date: l('6 jan. 2025', 'Jan. 6, 2025'), note: l('SQL, feuilles de calcul et traitement de données.', 'SQL, spreadsheets and data processing.') },
  3: { date: l('26 déc. 2024', 'Dec. 26, 2024'), note: l('Introduction à l’analytique de données dans Google Cloud.', 'Introduction to data analytics in Google Cloud.') },
  24: { date: l('5 févr. 2025', 'Feb. 5, 2025'), note: l('Fondamentaux du développement d’applications mobiles.', 'Mobile application development fundamentals.') },
  31: { date: l('29 oct. 2025', 'Oct. 29, 2025'), note: l('Fondamentaux de la gestion de projet.', 'Project management fundamentals.') },
};
