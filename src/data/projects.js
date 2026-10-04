const l = (fr, en) => ({ fr, en });

export const projects = [
  {
    slug: 'fasopport', order: 1, tier: 'primary', privateDemo: true, status: l('Produit full-stack en développement avancé', 'Advanced full-stack product in development'), category: 'Software & IA',
    title: l('Fas’Opport — transformer une veille dispersée en décisions exploitables', 'Fas’Opport — turning scattered monitoring into actionable decisions'),
    summary: l('Une plateforme qui collecte plusieurs sources, structure les documents avec l’IA et rapproche entreprises, opportunités et candidats.', 'A platform that collects multiple sources, structures documents with AI and connects companies, opportunities and candidates.'),
    problem: l('Marchés publics, appels à candidatures et recrutements sont publiés dans des formats dispersés, difficiles à surveiller et à qualifier.', 'Public tenders, calls for applications and recruitment opportunities are published in scattered formats that are difficult to monitor and qualify.'),
    built: l('Espaces entreprise, candidat et administration, ingestion multi-source, extraction assistée par IA, matching explicable, alertes et supervision des traitements.', 'Company, candidate and administration spaces, multi-source ingestion, AI-assisted extraction, explainable matching, alerts and processing supervision.'),
    challenge: l('Orchestrer scheduler, files de traitement, scraping, parsing IA et règles métier sans masquer les raisons d’une correspondance.', 'Orchestrating scheduling, processing queues, scraping, AI parsing and business rules without hiding why a match was produced.'),
    result: l('Un produit full-stack où l’IA intervient dans une chaîne opérationnelle observable, au service d’une décision compréhensible.', 'A full-stack product where AI participates in an observable operational workflow and supports understandable decisions.'),
    limitations: l('Produit en développement avancé ; aucune adoption, mise en production ou performance commerciale n’est revendiquée.', 'Product in advanced development; no adoption, production use or commercial performance is claimed.'),
    stack: ['Laravel', 'Vue 3', 'TypeScript', 'PostgreSQL', 'Docker', 'LLM'], architecture: ['API Laravel', 'Workers spécialisés', 'PostgreSQL', 'Frontend Vue 3'],
    media: { src: '/assets/images/projects/fasopport-home.webp', width: 1440, height: 1000, alt: l('Accueil réel de Fas’Opport présentant les parcours entreprise et candidat.', 'Real Fas’Opport home page showing company and candidate journeys.'), caption: l('Capture réelle du produit en développement.', 'Real capture of the product in development.') },
  },
  {
    slug: 'ankata', order: 2, tier: 'primary', privateDemo: true, status: l('MVP personnel avancé', 'Advanced personal MVP'), category: 'Mobile & Backend',
    title: l('Ankata — réserver et suivre un trajet depuis une seule application', 'Ankata — booking and tracking a trip in one application'),
    summary: l('Une application Flutter reliée à une API Express/PostgreSQL pour rechercher un trajet, réserver, gérer son billet et interagir avec les compagnies.', 'A Flutter app connected to an Express/PostgreSQL API to search, book, manage a ticket and interact with transport companies.'),
    problem: l('Les parcours de recherche, réservation et suivi d’un trajet sont souvent dispersés. Ankata les réunit dans une expérience mobile cohérente.', 'Trip search, booking and tracking are often fragmented. Ankata brings them into one coherent mobile experience.'),
    built: l('Application multi-écrans, API métier, authentification JWT, persistance PostgreSQL, réservations, favoris, avis, profils, notifications et billets PDF/QR.', 'Multi-screen app, business API, JWT authentication, PostgreSQL persistence, bookings, favorites, reviews, profiles, notifications and PDF/QR tickets.'),
    challenge: l('Maintenir des états métier cohérents entre l’application, l’API et la base, avec validation, sécurité, journalisation, tests et CI.', 'Keeping business state consistent across the app, API and database, with validation, security, logging, tests and CI.'),
    result: l('Un MVP mobile et backend documenté qui couvre le parcours de réservation de bout en bout.', 'A documented mobile and backend MVP covering the booking journey end to end.'),
    limitations: l('Projet personnel ; paiements et notifications externes restent simulés et aucune exploitation réelle n’est affirmée.', 'Personal project; payments and external notifications remain simulated and no real-world operation is claimed.'),
    stack: ['Flutter', 'Dart', 'Riverpod', 'Node.js', 'Express', 'PostgreSQL'], architecture: ['Flutter + Riverpod', 'API REST Express', 'PostgreSQL', 'JWT + services'],
    media: { src: '/assets/images/projects/ankata-logo.webp', width: 1100, height: 1100, alt: l('Logo Ankata versionné dans le projet mobile privé.', 'Ankata logo versioned in the private mobile project.'), caption: l('Logo réel du projet ; le parcours mobile est disponible en démonstration.', 'Real project logo; the mobile journey is available as a demonstration.') },
  },
  {
    slug: 'imex-horizon', order: 3, tier: 'primary', privateDemo: true, status: l('Plateforme full-stack privée en développement', 'Private full-stack platform in development'), category: 'Commerce & Logistique',
    title: l('IM-EX Horizon Business — relier catalogue, devis, commandes et logistique', 'IM-EX Horizon Business — connecting catalog, quotes, orders and logistics'),
    summary: l('Une plateforme bilingue d’import-export qui combine parcours public, achat ou demande de devis, espace client et back-office.', 'A bilingual import-export platform combining a public journey, purchase or quote requests, a customer space and a back office.'),
    problem: l('Un parcours d’import-export doit gérer des produits, des demandes de devis, des commandes, du stock et du fret sans perdre la cohérence des montants.', 'An import-export journey must handle products, quote requests, orders, stock and freight without losing amount consistency.'),
    built: l('Catalogue bilingue, panier hybride achat/devis, authentification, espace client, back-office à rôles, commandes, paiements, devis et factures PDF.', 'Bilingual catalog, hybrid purchase/quote cart, authentication, customer space, role-based back office, orders, payments, quotes and PDF invoices.'),
    challenge: l('Recalculer les montants depuis la base, protéger la dernière unité disponible et intégrer recherche PostgreSQL, stock et calcul de fret.', 'Recomputing amounts from the database, protecting the last available unit and integrating PostgreSQL search, stock and freight calculations.'),
    result: l('Un socle transactionnel complet qui dépasse la simple vitrine e-commerce et relie parcours client et opérations internes.', 'A complete transactional foundation that goes beyond an e-commerce storefront and connects customer journeys with internal operations.'),
    limitations: l('Produit privé en développement ; tarifs, contenus et données restent à valider et aucune mise en production n’est affirmée.', 'Private product in development; pricing, content and data remain to be validated and no production use is claimed.'),
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Better Auth', 'PDF'], architecture: ['Next.js App Router', 'Prisma + PostgreSQL', 'RBAC', 'Transactions métier'],
    media: { src: '/assets/images/projects/imex-horizon-hero.webp', width: 1200, height: 1200, alt: l('Visuel logistique versionné dans le projet IM-EX Horizon Business.', 'Logistics visual versioned in the IM-EX Horizon Business project.'), caption: l('Asset réel du produit ; démonstration de la plateforme sur demande.', 'Real product asset; platform demonstration available on request.') },
  },
  {
    slug: 'axiane-cabinets', order: 4, tier: 'primary', privateDemo: true, status: l('Prototype avancé — validation pilote à mener', 'Advanced prototype — pilot validation pending'), category: 'Logiciel métier',
    title: l('AXIANE Cabinets — piloter un cabinet du rendez-vous au tableau de bord', 'AXIANE Cabinets — running a practice from booking to dashboard'),
    summary: l('Une plateforme multi-cabinets qui relie site public, réservation, file d’attente, équipe, sécurité et pilotage opérationnel.', 'A multi-practice platform connecting public websites, booking, queues, teams, security and operational management.'),
    problem: l('Les rendez-vous, la file d’attente, les informations publiques et le suivi d’activité sont souvent dispersés entre plusieurs outils.', 'Appointments, queues, public information and activity tracking are often scattered across several tools.'),
    built: l('Sites publics configurables, réservation, ticket et file d’attente, gestion multi-sites et multi-rôles, dashboard, double authentification et assistant borné.', 'Configurable public websites, booking, ticketing and queues, multi-site and role management, dashboard, two-factor authentication and a constrained assistant.'),
    challenge: l('Isoler les données de chaque cabinet tout en gardant des parcours publics simples, des droits fins et un socle testable.', 'Isolating each practice’s data while keeping public journeys simple, permissions granular and the platform testable.'),
    result: l('Un produit full-stack navigable, documenté et couvert par des parcours desktop et mobile réels.', 'A navigable, documented full-stack product with real desktop and mobile journeys.'),
    limitations: l('Prototype avec données de démonstration ; hébergement, flux réels et validation juridique restent à mener avant un pilote.', 'Prototype with demonstration data; hosting, real workflows and legal validation remain before a pilot.'),
    stack: ['Next.js', 'TypeScript', 'Django REST', 'PostgreSQL', 'TOTP'], architecture: ['Next.js multi-tenant', 'API Django REST', 'PostgreSQL', 'RBAC & TOTP'],
    media: { src: '/assets/images/projects/axiane-cabinets-dashboard.webp', width: 1440, height: 1000, alt: l('Tableau de bord réel d’AXIANE Cabinets avec données fictives.', 'Real AXIANE Cabinets dashboard with fictional data.'), caption: l('Capture réelle du prototype — cabinet et données fictifs.', 'Real prototype capture — fictional practice and data.') },
  },
  {
    slug: 'axiane-academy', order: 5, tier: 'primary', privateDemo: true, status: l('Plateforme e-learning fonctionnelle — démo privée', 'Functional e-learning platform — private demo'), category: 'EdTech & IA',
    title: l('AXIANE Academy — orchestrer tout le parcours d’apprentissage', 'AXIANE Academy — orchestrating the full learning journey'),
    summary: l('Une plateforme e-learning multi-rôles qui réunit catalogue, apprentissage, formateurs, entreprises, administration et assistance pédagogique par IA.', 'A multi-role e-learning platform combining a catalog, learning, trainers, companies, administration and AI-assisted learning.'),
    problem: l('Former en ligne implique de relier contenu, progression, évaluation, attestations et administration dans un même système.', 'Online learning requires content, progress, assessment, certificates and administration to work as one system.'),
    built: l('Espaces public, apprenant, formateur, entreprise et administration, lecteur de cours, quiz, devoirs, attestations, paiements et marketplace.', 'Public, learner, trainer, company and administration spaces, course player, quizzes, assignments, certificates, payments and a marketplace.'),
    challenge: l('Faire cohabiter de nombreux rôles et workflows tout en encadrant le tuteur et la correction IA par le contexte et la validation humaine.', 'Supporting many roles and workflows while constraining AI tutoring and grading through context and human validation.'),
    result: l('Une plateforme fonctionnelle avec un modèle de données riche, des parcours complets et une IA intégrée à des usages pédagogiques précis.', 'A functional platform with a rich data model, complete journeys and AI integrated into specific learning use cases.'),
    limitations: l('Démo privée ; aucune date de lancement, adoption ou exploitation publique n’est affirmée.', 'Private demo; no launch date, adoption or public operation is claimed.'),
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js', 'Mistral'], architecture: ['Next.js App Router', 'Prisma + PostgreSQL', 'Auth.js multi-rôles', 'Services IA encadrés'],
    media: { src: '/assets/images/projects/axiane-academy-catalog.webp', width: 1440, height: 1000, alt: l('Catalogue réel d’AXIANE Academy avec filtres et parcours de formation.', 'Real AXIANE Academy catalog with filters and learning paths.'), caption: l('Capture réelle de la plateforme — démonstration privée sur demande.', 'Real platform capture — private demonstration on request.') },
  },
  {
    slug: 'axinafa-ai', order: 6, tier: 'primary', status: l('Prototype de concours fonctionnel', 'Functional competition prototype'), category: 'AI/Data Product',
    title: l('AxiNafa AI — rendre une activité financière lisible', 'AxiNafa AI — making financial activity understandable'),
    summary: l('Un carnet financier mobile-first qui transforme des opérations simples en tendances, score explicable et dossier PDF de financement.', 'A mobile-first financial notebook that turns simple transactions into trends, an explainable score and a financing PDF.'),
    problem: l('Un micro-commerçant peut avoir une activité réelle sans historique structuré facile à présenter.', 'A micro-merchant can run a real business without an easy-to-present structured history.'),
    built: l('Saisie texte et vocale, catégorisation, indicateurs, visualisations, score détaillé, objectif de financement, visite guidée et génération PDF.', 'Text and voice input, categorization, indicators, visualizations, detailed score, financing goal, guided tour and PDF generation.'),
    challenge: l('Proposer une aide compréhensible sans service externe : règles déterministes et facteurs du score exposés.', 'Providing understandable help without an external service: deterministic rules with exposed score factors.'),
    result: l('Un prototype navigable qui transforme des saisies quotidiennes en synthèse visuelle et document exportable.', 'A navigable prototype that turns daily entries into a visual summary and exportable document.'),
    limitations: l('Données locales et catégorisation à règles ; OCR, Mobile Money et LLM ne sont pas actifs.', 'Local data and rule-based categorization; OCR, Mobile Money and LLMs are not active.'),
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'jsPDF'], architecture: ['Next.js', 'Règles déterministes', 'LocalStorage', 'Recharts + jsPDF'],
    repoUrl: 'https://github.com/ArmelKI/AxiNafa-AI', demoUrl: 'https://axinafa-ai.vercel.app', media: { src: '/assets/images/axinafa-app.png', width: 1440, height: 1000, alt: l('Dashboard AxiNafa avec données fictives et score explicable.', 'AxiNafa dashboard with fictional data and an explainable score.') },
  },
];

export const notableProjects = [
  {
    slug: 'tns-prospector', title: l('Prospection TNS', 'TNS Prospector'), status: l('Projet académique terminé', 'Completed academic project'),
    description: l('Une application d’équipe pour gérer clients, projets, intervenants, interactions, jalons, export CSV et carte des prospects.', 'A team application managing clients, projects, contributors, interactions, milestones, CSV export and a prospect map.'),
    highlights: l(['Gestion commerciale', 'Kanban & jalons', 'Suppression cohérente des données'], ['Business management', 'Kanban & milestones', 'Consistent data deletion']), stack: ['Flask', 'PostgreSQL', 'Docker Compose', 'SQLAlchemy'], url: 'https://github.com/ArmelKI/PPII-TNS-Prospector',
    media: { src: '/assets/images/projects/tns-prospector-kanban.webp', width: 2746, height: 1498, alt: l('Vue Kanban de Prospection TNS issue du guide utilisateur.', 'TNS Prospector Kanban view from the user guide.'), caption: l('Capture du guide utilisateur — données de démonstration.', 'User-guide capture — demonstration data.') },
  },
  {
    slug: 'civilisation', title: l('Les Incivilisés', 'The Uncivilized'), status: l('Jeu académique collaboratif terminé', 'Completed collaborative academic game'),
    description: l('Jeu de stratégie au tour par tour en C, jouable en CLI et SDL2. Mon périmètre couvre l’IA, les barbares, le Makefile et des extensions.', 'A turn-based strategy game in C, playable in CLI and SDL2. My scope covers AI, barbarians, the Makefile and extensions.'),
    highlights: l(['IA & pathfinding BFS', 'Moteur partagé CLI / SDL2', 'Tests unitaires'], ['AI & BFS pathfinding', 'Shared CLI / SDL2 engine', 'Unit tests']), stack: ['C11', 'SDL2', 'ncurses', 'Makefile'], url: 'https://github.com/ArmelKI/PPII-Civilisation',
    media: { src: '/assets/images/projects/civilisation-assets.webp', width: 1136, height: 304, alt: l('Planche d’assets versionnée du jeu Les Incivilisés.', 'Versioned asset sheet from The Uncivilized game.'), caption: l('Assets du jeu versionnés dans le dépôt public.', 'Game assets versioned in the public repository.') },
  },
  {
    slug: 'glow-soft', title: 'Glow Soft Beauty', privateDemo: true, status: l('Prototype e-commerce avancé — backend métier à brancher', 'Advanced e-commerce prototype — business backend pending'),
    description: l('Une boutique bilingue avec catalogue, panier, livraison, commande WhatsApp, SEO, accessibilité et espace d’administration protégé.', 'A bilingual storefront with catalog, cart, delivery, WhatsApp ordering, SEO, accessibility and a protected administration space.'),
    highlights: l(['36 pages Next.js', 'Parcours bilingue & accessible', 'Admin sécurisé, données statiques'], ['36 Next.js pages', 'Bilingual & accessible journey', 'Secure admin, static data']), stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp', 'HMAC'],
    media: { src: '/assets/images/projects/glow-soft-home.webp', width: 1440, height: 756, alt: l('Maquette réelle ayant guidé l’interface Glow Soft Beauty.', 'Real mockup that guided the Glow Soft Beauty interface.'), caption: l('Maquette source du projet ; données et coordonnées de démonstration.', 'Project source mockup; demonstration data and contact details.') },
  },
  {
    slug: 'rentwise-africa', title: 'Rentwise Africa', privateDemo: true, status: l('Prototype frontend de gestion locative — sans backend', 'Property-management frontend prototype — no backend'),
    description: l('Une interface SaaS configurable pour suivre biens, unités, locataires, loyers, contrats, maintenance et rapports.', 'A configurable SaaS interface for tracking properties, units, tenants, rent, contracts, maintenance and reports.'),
    highlights: l(['Dashboard métier', 'Configuration white-label', 'Données locales de démonstration'], ['Business dashboard', 'White-label configuration', 'Local demonstration data']), stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'],
    visual: l(['Biens & unités', 'Locataires & contrats', 'Loyers & maintenance', 'Rapports & white-label'], ['Properties & units', 'Tenants & contracts', 'Rent & maintenance', 'Reports & white-label']),
  },
];

export const privateProjects = [];

export const getText = (value, language) => typeof value === 'string' ? value : value?.[language] ?? value?.fr ?? '';

export const validateProjects = (items = projects) => {
  const errors = [];
  if (items.length !== 6) errors.push('Exactly six detailed projects are required.');
  items.forEach((project, index) => {
    if (project.order !== index + 1) errors.push(`Invalid order for ${project.slug}.`);
    if (!project.privateDemo && !project.repoUrl?.startsWith('https://')) errors.push(`Invalid repository URL for ${project.slug}.`);
    if (project.demoUrl && !project.demoUrl.startsWith('https://')) errors.push(`Invalid demo URL for ${project.slug}.`);
  });
  return errors;
};
