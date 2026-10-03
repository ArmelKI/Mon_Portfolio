const l = (fr, en) => ({ fr, en });

export const projects = [
  {
    slug: 'ankata', order: 1, tier: 'primary', status: l('MVP personnel avancé', 'Advanced personal MVP'), category: 'Mobile & Backend',
    title: l('Ankata — réserver un trajet dans une seule application', 'Ankata — booking a trip in one application'),
    summary: l('Une application Flutter reliée à une API Express/PostgreSQL pour rechercher un trajet, réserver, gérer son billet et interagir avec les compagnies de transport.', 'A Flutter app connected to an Express/PostgreSQL API to search, book, manage a ticket and interact with transport companies.'),
    problem: l('Les parcours de recherche, réservation et suivi d’un trajet sont souvent dispersés. Ankata les réunit dans un parcours mobile cohérent adapté au contexte burkinabè.', 'Trip search, booking and tracking are often fragmented. Ankata brings them into one mobile journey designed for the Burkinabè context.'),
    built: l('Application multi-écrans, API métier, authentification JWT, persistance PostgreSQL, réservations, favoris, avis, profils, notifications et billets PDF/QR.', 'Multi-screen app, business API, JWT authentication, PostgreSQL persistence, bookings, favorites, reviews, profiles, notifications and PDF/QR tickets.'),
    challenge: l('Maintenir des états métier cohérents entre l’app, l’API et la base, avec validation, sécurité, journalisation, tests et CI.', 'Keeping business state consistent across the app, API and database, with validation, security, logging, tests and CI.'),
    result: l('Un MVP avancé qui démontre la chaîne recherche → réservation → billet → évaluation.', 'An advanced MVP demonstrating the search → booking → ticket → review flow.'),
    limitations: l('Projet personnel. Paiement et certains flux d’intégration simulés ; backend public indisponible lors de l’audit.', 'Personal project. Payment and some integration flows are simulated; the public backend was unavailable during the audit.'),
    stack: ['Flutter', 'Dart', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Riverpod', 'GitHub Actions'], architecture: ['Flutter / Riverpod', 'REST API / Express', 'PostgreSQL', 'PDF + QR / CI'],
    privateDemo: true, media: null,
  },
  {
    slug: 'axinafa-ai', order: 2, tier: 'primary', status: l('Prototype de concours fonctionnel', 'Functional competition prototype'), category: 'AI/Data Product',
    title: l('AxiNafa AI — rendre une activité financière lisible', 'AxiNafa AI — making financial activity understandable'),
    summary: l('Un carnet financier mobile-first qui transforme des opérations simples en tendances, score explicable et dossier PDF de financement.', 'A mobile-first financial notebook that turns simple transactions into trends, an explainable score and a financing PDF.'),
    problem: l('Un micro-commerçant peut avoir une activité réelle sans historique structuré facile à présenter.', 'A micro-merchant can run a real business without an easy-to-present structured history.'),
    built: l('Saisie texte et vocale, catégorisation, indicateurs, visualisations, score détaillé, objectif de financement, visite guidée et génération PDF.', 'Text and voice input, categorization, indicators, visualizations, detailed score, financing goal, guided tour and PDF generation.'),
    challenge: l('Proposer une aide compréhensible sans service externe : règles déterministes et facteurs du score exposés.', 'Providing understandable help without an external service: deterministic rules with exposed score factors.'),
    result: l('Un prototype navigable qui transforme des saisies quotidiennes en synthèse visuelle et document exportable.', 'A navigable prototype that turns daily entries into a visual summary and exportable document.'),
    limitations: l('Données locales et catégorisation à règles ; OCR, Mobile Money et LLM ne sont pas actifs.', 'Local data and rule-based categorization; OCR, Mobile Money and LLMs are not active.'),
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'jsPDF'], architecture: ['Next.js', 'Règles déterministes', 'LocalStorage', 'Recharts + jsPDF'],
    repoUrl: 'https://github.com/ArmelKI/AxiNafa-AI', demoUrl: 'https://axinafa-ai.vercel.app', media: { src: '/assets/images/axinafa-app.png', width: 1440, height: 1000, alt: l('Dashboard AxiNafa avec données de démonstration, indicateurs et synthèse explicable.', 'AxiNafa dashboard with fictional demo data, indicators and an explainable summary.') },
  },
  {
    slug: 'quick-menu-africa', order: 3, tier: 'secondary', status: l('Prototype frontend', 'Frontend prototype'), category: 'SaaS UI',
    title: l('Quick Menu Africa — une interface métier pour restaurateurs', 'Quick Menu Africa — a business interface for restaurants'),
    summary: l('Une suite frontend couvrant menu QR, commandes, caisse, stock, clients, promotions et analytics.', 'A frontend suite covering QR menus, orders, POS, inventory, customers, promotions and analytics.'),
    problem: l('Coordonner menu public, prise de commande et suivi opérationnel depuis plusieurs vues.', 'Coordinating the public menu, order taking and operations across several views.'),
    built: l('Une vitrine et un espace de gestion multi-écrans, avec une couche API typée pour les futurs contrats backend.', 'A storefront and multi-screen management space, with a typed API layer for future backend contracts.'),
    challenge: l('Séparer composants d’interface, état de démonstration et contrats d’un futur backend.', 'Separating interface components, demo state and future backend contracts.'),
    result: l('Un prototype complet en surface pour tester le parcours et préparer une API réelle.', 'A broad prototype for testing the journey and preparing a real API.'),
    limitations: l('Aucun backend ; authentification de démonstration et données mockées/locales.', 'No backend; demo authentication and mocked/local data.'),
    stack: ['React', 'TypeScript', 'Vite', 'React Query', 'React Router', 'Tailwind', 'Recharts', 'QR Code'], architecture: ['Menu public', 'POS & commandes', 'Couche API typée', 'État local'],
    repoUrl: 'https://github.com/ArmelKI/quick-menu-africa', media: { src: '/assets/images/projects/quick-menu-dashboard.webp', width: 1440, height: 900, alt: l('Tableau de bord MaquiSaaS exécuté depuis le dépôt public, avec commandes, caisse et modules de gestion.', 'MaquiSaaS dashboard run from the public repository, with orders, POS and management modules.'), caption: l('Capture réelle en mode démonstration — données fictives.', 'Real capture in demonstration mode — fictional data.') },
  },
  {
    slug: 'sweet-site-studio', order: 4, tier: 'secondary', status: l('Prototype interactif', 'Interactive prototype'), category: 'Commerce UX',
    title: l('Sweet Site Studio — du catalogue au back-office', 'Sweet Site Studio — from catalog to back office'),
    summary: l('Une expérience de commande pour pâtisserie, du produit au checkout, avec back-office local.', 'A bakery ordering experience from product to checkout, with a local back office.'),
    problem: l('Présenter un catalogue, accepter des demandes personnalisées et gérer contenu et commandes dans une expérience cohérente.', 'Presenting a catalog, accepting custom requests and managing content and orders coherently.'),
    built: l('Catalogue, fiches produit, panier, favoris, checkout, gâteaux sur mesure, événements, avis et administration.', 'Catalog, product pages, cart, favorites, checkout, custom cakes, events, reviews and administration.'),
    challenge: l('Faire fonctionner de nombreux parcours client et administration avec une identité homogène.', 'Making many customer and administration journeys work with one consistent identity.'),
    result: l('Un prototype interactif couvrant le cycle de commande et un back-office complet.', 'An interactive prototype covering the order lifecycle and a complete back office.'),
    limitations: l('Données, commandes et accès admin dans le navigateur ; aucun paiement ni backend réel.', 'Data, orders and admin access remain in the browser; no real payment or backend.'),
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'React Router', 'React Query', 'Framer Motion'], architecture: ['Storefront', 'Checkout', 'Back-office local', 'Stockage navigateur'],
    repoUrl: 'https://github.com/ArmelKI/sweet-site-studio', media: { src: '/assets/images/projects/sweet-site-hero.jpg', width: 1920, height: 1080, alt: l('Visuel de pâtisserie versionné dans le dépôt public Sweet Site Studio.', 'Bakery visual versioned in the public Sweet Site Studio repository.') },
  },
  {
    slug: 'covid-pipeline', order: 5, tier: 'selected', status: l('Notebook reproductible', 'Reproducible notebook'), category: 'Data Automation',
    title: l('COVID-19 — automatiser une comparaison temporelle', 'COVID-19 — automating a time-series comparison'),
    summary: l('Pipeline Python : données OWID, quatre pays, moyenne mobile sur sept jours et export du graphique.', 'Python pipeline: OWID data, four countries, seven-day rolling average and chart export.'),
    challenge: l('Fiabiliser dates, tri des séries et lissage avant comparaison.', 'Making dates, ordering and smoothing reliable before comparison.'),
    result: l('Une visualisation reproductible depuis une source distante, sans préparation manuelle.', 'A reproducible visualization from a remote source, without manual preparation.'),
    limitations: l('Analyse descriptive ; aucun modèle prédictif ni dashboard temps réel.', 'Descriptive analysis; no predictive model or real-time dashboard.'),
    stack: ['Python', 'Pandas', 'Matplotlib', 'OWID'], repoUrl: 'https://github.com/ArmelKI/covid19-data-analysis', notebookUrl: 'https://github.com/ArmelKI/covid19-data-analysis/blob/main/Analyse_COVID19.ipynb',
    media: { src: '/assets/images/covid_trends.png', width: 1000, height: 500, alt: l('Courbes de moyenne mobile sur sept jours pour quatre pays.', 'Seven-day rolling-average curves for four countries.') },
  },
  {
    slug: 'netflix-analysis', order: 6, tier: 'selected', status: l('Analyse exploratoire', 'Exploratory analysis'), category: 'Data Analysis',
    title: l('Netflix — fiabiliser l’analyse d’un catalogue', 'Netflix — making catalog analysis more reliable'),
    summary: l('Nettoyage, traitement des coproductions et visualisation de l’évolution, l’origine et la durée des contenus.', 'Cleaning, co-production handling and visualization of content evolution, origin and duration.'),
    challenge: l('Gérer dates, valeurs manquantes et pays multiples sans fausser les agrégations.', 'Handling dates, missing values and multiple countries without distorting aggregations.'),
    result: l('Un notebook restructuré et des visualisations plus fiables.', 'A restructured notebook and more reliable visualizations.'),
    limitations: l('Analyse intermédiaire, sans application, tests ni pipeline déployé.', 'Intermediate analysis, without an app, tests or deployed pipeline.'),
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'], repoUrl: 'https://github.com/ArmelKI/Netflix_data_Analysis_V2', notebookUrl: 'https://github.com/ArmelKI/Netflix_data_Analysis_V2/blob/main/notebooks/netflix_analysis.ipynb',
    media: { src: '/assets/images/netflix-analysis.png', width: 1000, height: 563, alt: l('Visualisations exploratoires du catalogue Netflix.', 'Exploratory visualizations of the Netflix catalog.') },
  },
];

export const notableProjects = [
  {
    slug: 'salon-shine', title: 'Salon Shine', status: l('Prototype interactif', 'Interactive prototype'),
    description: l('Une expérience de salon qui relie présentation des services, galerie, avant/après, prise de rendez-vous et administration.', 'A salon experience connecting service discovery, a gallery, before/after views, booking and administration.'),
    highlights: l(['Services & galerie', 'Rendez-vous', 'Espace administration'], ['Services & gallery', 'Booking', 'Admin area']), stack: ['React', 'TypeScript', 'Tailwind', 'Motion'], url: 'https://github.com/ArmelKI/salon-shine',
    media: { src: '/assets/images/projects/salon-shine-home.webp', width: 1440, height: 1000, alt: l('Accueil de Salon Beauté Divine, application exécutée depuis le dépôt public.', 'Salon Beauté Divine home screen, application run from the public repository.'), caption: l('Capture réelle du dépôt public exécuté localement.', 'Real capture of the public repository run locally.') },
  },
  {
    slug: 'grill-go', title: 'Grill Go', status: l('Prototype interactif', 'Interactive prototype'),
    description: l('Un parcours de commande restauration avec menu, panier, livraison, QR menu, WhatsApp et espace d’administration.', 'A restaurant ordering journey with menu, cart, delivery, QR menu, WhatsApp and an administration area.'),
    highlights: l(['Menu & commande', 'Livraison', 'QR menu & WhatsApp'], ['Menu & ordering', 'Delivery', 'QR menu & WhatsApp']), stack: ['React', 'TypeScript', 'Tailwind', 'WhatsApp'], url: 'https://github.com/ArmelKI/grill-go',
    media: { src: '/assets/images/projects/grill-go-home.webp', width: 1440, height: 1000, alt: l('Accueil de Maquis Le Grill, application exécutée depuis le dépôt public.', 'Maquis Le Grill home screen, application run from the public repository.'), caption: l('Capture réelle du dépôt public exécuté localement.', 'Real capture of the public repository run locally.') },
  },
  {
    slug: 'vetements-bf', title: 'Vêtements BF', status: l('Prototype interactif', 'Interactive prototype'),
    description: l('Une boutique éditoriale qui couvre collections, fiches produit, panier, favoris, lookbook et administration locale.', 'An editorial storefront covering collections, product pages, cart, favorites, lookbook and local administration.'),
    highlights: l(['Collections & lookbook', 'Panier & favoris', 'Espace administration'], ['Collections & lookbook', 'Cart & favorites', 'Admin area']), stack: ['React', 'TypeScript', 'Tailwind', 'Commerce UX'], url: 'https://github.com/ArmelKI/v-tementsbf-boutique',
    media: { src: '/assets/images/projects/vetements-bf-home.webp', width: 1440, height: 1000, alt: l('Accueil de Vêtements BF, application exécutée depuis le dépôt public.', 'Vêtements BF home screen, application run from the public repository.'), caption: l('Capture réelle du dépôt public exécuté localement.', 'Real capture of the public repository run locally.') },
  },
  {
    slug: 'pycompressor', title: 'PyCompressor', status: l('Outil desktop fonctionnel', 'Functional desktop tool'),
    description: l('Un utilitaire desktop pour compresser des images et PDF sans bloquer l’interface pendant le traitement.', 'A desktop utility that compresses images and PDFs without blocking the interface while processing.'),
    highlights: l(['Fichiers multiples', 'Qualité réglable', 'Progression asynchrone'], ['Multiple files', 'Adjustable quality', 'Async progress']), stack: ['Python', 'CustomTkinter', 'Pillow', 'pypdf'], url: 'https://github.com/ArmelKI/PyCompressor',
    visual: l(['Images & PDF', 'Qualité 10 → 100', 'Redimensionnement 1920 px', 'Traitement en arrière-plan'], ['Images & PDFs', 'Quality 10 → 100', '1920 px resize', 'Background processing']),
  },
  {
    slug: 'tns-prospector', title: l('Prospection TNS', 'TNS Prospector'), status: l('Projet académique terminé', 'Completed academic project'),
    description: l('Une application de prospection pour gérer clients, projets, intervenants, interactions, jalons, export CSV et carte des prospects.', 'A prospecting application managing clients, projects, contributors, interactions, milestones, CSV export and a prospect map.'),
    highlights: l(['Gestion commerciale', 'Kanban & jalons', 'RGPD et suppression complète'], ['Business management', 'Kanban & milestones', 'GDPR and full deletion']), stack: ['Flask', 'PostgreSQL', 'Docker Compose', 'SQLAlchemy'], url: 'https://github.com/ArmelKI/PPII-TNS-Prospector',
    media: { src: '/assets/images/projects/tns-prospector-kanban.webp', width: 2746, height: 1498, alt: l('Vue Kanban de Prospection TNS issue du guide utilisateur.', 'TNS Prospector Kanban view from the user guide.'), caption: l('Capture du guide utilisateur, données de démonstration.', 'User-guide capture with demonstration data.') },
  },
  {
    slug: 'civilisation', title: l('Les Incivilisés', 'The Uncivilized'), status: l('Jeu académique en équipe, terminé', 'Completed academic team game'),
    description: l('Projet d’équipe : jeu de stratégie au tour par tour en C, jouable en CLI et SDL2. Mon périmètre couvre l’IA et les barbares, le Makefile et des extensions.', 'Team project: a turn-based strategy game in C, playable in CLI and SDL2. My scope covers AI and barbarians, the Makefile and extensions.'),
    highlights: l(['IA & barbares', 'Moteur partagé CLI / SDL2', 'Tests unitaires'], ['AI & barbarians', 'Shared CLI / SDL2 engine', 'Unit tests']), stack: ['C11', 'SDL2', 'ncurses', 'Makefile'], url: 'https://github.com/ArmelKI/PPII-Civilisation',
    media: { src: '/assets/images/projects/civilisation-assets.webp', width: 1136, height: 304, alt: l('Planche d’assets versionnée du jeu Les Incivilisés.', 'Versioned asset sheet from The Uncivilized game.'), caption: l('Assets du jeu versionnés dans le dépôt public.', 'Game assets versioned in the public repository.') },
  },
];

// Ces réalisations sont documentées dans le CV local, mais leur code n'est pas public.
// Les formulations restent volontairement limitées aux éléments vérifiables du CV.
export const privateProjects = [
  {
    title: 'RefactoSphere',
    status: l('Projet personnel en cours', 'Ongoing personal project'),
    description: l('Dashboard full-stack d’analyse de code assistée par IA pour examiner des projets Java, Python et JavaScript et proposer des pistes de refactoring.', 'A full-stack AI-assisted code analysis dashboard designed to inspect Java, Python and JavaScript projects and suggest refactoring opportunities.'),
    stack: ['Spring Boot', 'FastAPI', 'React', 'Elasticsearch'],
  },
  {
    title: l('Gestion scolaire', 'School management'),
    status: l('Produit métier privé', 'Private business product'),
    description: l('Conception d’une application de gestion scolaire destinée à des lycées et collèges au Burkina Faso.', 'Design of a school management application for secondary schools in Burkina Faso.'),
    stack: [l('Produit métier', 'Business software'), l('Gestion scolaire', 'School operations')],
  },
  {
    title: l('Gestion d’un centre de langues', 'Language centre management'),
    status: l('Produit métier privé', 'Private business product'),
    description: l('Conception d’une plateforme dédiée au pilotage des activités d’un centre de langues.', 'Design of a platform dedicated to running a language centre’s operations.'),
    stack: [l('Plateforme web', 'Web platform'), l('Outil de gestion', 'Management tool')],
  },
  {
    title: l('Sites pour établissements de formation', 'Websites for education providers'),
    status: l('Réalisations privées', 'Private work'),
    description: l('Développement de sites web pour des lycées et un centre de langues dans le cadre des activités présentées sur mon CV.', 'Development of websites for secondary schools and a language centre as part of the work documented in my résumé.'),
    stack: [l('Web', 'Web'), l('Conception produit', 'Product design')],
  },
];

export const getText = (value, language) => typeof value === 'string' ? value : value?.[language] ?? value?.fr ?? '';

export const validateProjects = (items = projects) => {
  const errors = [];
  if (items.length !== 6) errors.push('Exactly six featured projects are required.');
  items.forEach((project, index) => {
    if (project.order !== index + 1) errors.push(`Invalid order for ${project.slug}.`);
    if (!project.privateDemo && !project.repoUrl?.startsWith('https://')) errors.push(`Invalid repository URL for ${project.slug}.`);
    if (project.demoUrl && !project.demoUrl.startsWith('https://')) errors.push(`Invalid demo URL for ${project.slug}.`);
  });
  return errors;
};
