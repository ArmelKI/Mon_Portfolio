# Audit du repository local du portfolio

## Quelle est l’architecture complète, la stack d’exécution et la chaîne de build ?

### Takeaway
Le portfolio est une SPA React 19/Vite 7 monolithique, simple et lisible, dont le contenu est en partie data-driven et bilingue. La base technique est suffisante pour une refonte moderne sans migration de framework obligatoire, mais il n’existe ni tests, ni typecheck, ni CI, ni configuration de déploiement versionnée, et le modèle de contenu actuel est trop pauvre pour raconter des études de cas Software & AI crédibles.

### Cited Findings
- Stack exacte installée : React `19.2.0`, React DOM `19.2.0`, Vite `7.2.4`, Tailwind CSS `3.4.17`, Framer Motion `12.23.24`, Lucide React `0.555.0`, PostCSS/Autoprefixer, ESLint 9 ; `clsx` et `tailwind-merge` sont déclarés mais ne sont utilisés nulle part dans `src`. — [package.json](../../package.json); [package-lock.json](../../package-lock.json)
- Le projet est intégralement JavaScript/JSX (aucun TypeScript applicatif) malgré la présence de `@types/react` et `@types/react-dom`. Il n’existe aucun `tsconfig`. — [package.json](../../package.json); [src](../../src)
- Le point d’entrée `src/main.jsx` monte `App` dans `#root`, sous `StrictMode` et un `LanguageProvider`. `App.jsx` assemble une seule page, dans cet ordre exact : navigation, Hero, About, Timeline, Skills, Projects, Certifications, Contact, Footer. Aucun routeur ni page de détail/case study n’existe. — [main.jsx](../../src/main.jsx); [App.jsx](../../src/App.jsx)
- Les composants sont organisés en `layout` (`Navbar`, `Footer`), `sections` (`Hero`, `About`, `Timeline`, `Skills`, `Projects`, `Certifications`, `Contact`) et `ui` (`Marquee`, `SectionTitle`). Cette arborescence est claire, peu profonde et réutilisable. — [src/components](../../src/components)
- Le contenu est réparti entre cinq fichiers : identité/liens dans `profile.js`, 8 projets dans `projects.js`, 35 certifications dans `certifications.js`, 10 entrées de parcours dans `experiences.js`, et l’ensemble des libellés/copies FR/EN dans un très gros objet `i18n.js`. — [profile.js](../../src/data/profile.js); [projects.js](../../src/data/projects.js); [certifications.js](../../src/data/certifications.js); [experiences.js](../../src/data/experiences.js); [i18n.js](../../src/data/i18n.js)
- Le système i18n choisit `portfolio_lang` depuis `localStorage`, sinon la langue du navigateur (`fr` si elle commence par `fr`, anglais sinon), persiste le choix, puis met à jour l’attribut `lang` de l’élément `<html>`. Il ne met pas à jour le titre ni les métadonnées SEO lors d’un changement de langue. — [LanguageContext.jsx](../../src/context/LanguageContext.jsx); [index.html](../../index.html)
- Les seules commandes sont `dev`, `build`, `lint`, `preview`. Il n’existe ni commande `test`, ni `typecheck`, ni suite de tests, ni Storybook, ni test E2E. — [package.json](../../package.json)
- `npm run lint` passe sans erreur. Il émet seulement un avertissement indiquant que les données de `baseline-browser-mapping` ont plus de deux mois. — [package.json](../../package.json)
- `npm run build` passe avec Vite 7.2.4 : 2 094 modules transformés ; sortie mesurée `index.html` 1,85 kB (0,66 kB gzip), CSS 26,26 kB (5,30 kB gzip), JavaScript 390,33 kB (124,95 kB gzip). Le build avertit que `caniuse-lite` a 11 mois. — [package.json](../../package.json); [vite.config.js](../../vite.config.js)
- `vite.config.js` ne contient que le plugin React : pas de découpage explicite, pas d’alias, pas de pré-rendu, pas d’analyse de bundle, pas de traitement d’images. — [vite.config.js](../../vite.config.js)
- La documentation affirme un déploiement Vercel, mais le dépôt ne contient ni `vercel.json`, ni workflow GitHub Actions, ni autre configuration de CI/CD. Le déploiement repose donc vraisemblablement sur les valeurs par défaut de la plateforme. — [README.md](../../README.md)
- Le repository local est sur `main`, propre au début de l’audit, avec deux commits d’avance sur `origin/main` (`edeb296`, `c3cd315`). Ces commits refondent le contenu/UI, optimisent les images et ajoutent des cartes repo ; aucune branche dédiée à la refonte demandée n’existe actuellement. — [.git/HEAD](../../.git/HEAD); [README.md](../../README.md)
- Le commit local `c3cd315` indique explicitement que « Social Media Bot » a été retiré car non finalisé ; c’est un précédent utile pour conserver une sélection éditoriale stricte. — [projects.js](../../src/data/projects.js)
- `package.json` annonce la version `1.0.0`, alors que la racine de `package-lock.json` conserve `0.0.0` : incohérence de métadonnées sans impact runtime mais facile à corriger. — [package.json](../../package.json); [package-lock.json](../../package-lock.json)

### Inferences
- Conserver React + Vite est rationnel : le site est une page personnelle statique, sans besoin établi de serveur. Pour le SEO, un pré-rendu statique ou une génération HTML au build apporterait plus qu’une migration lourde vers un framework full-stack.
- Une migration vers TypeScript est pertinente seulement si elle accompagne la refonte du modèle de contenu ; le gain principal serait de garantir la présence et la validité des champs `problem`, `solution`, `role`, `architecture`, `status`, `repoUrl`, `demoUrl`, `media`, `factsToValidate`, plutôt que de typer des composants trivials.
- La dette principale n’est pas la structure de dossiers mais la duplication du contenu : les objets sources anglais et les surcharges i18n par identifiant peuvent diverger silencieusement. Un schéma unique par projet/expérience avec champs localisés adjacents serait plus sûr.

### Gaps
- Aucun fichier `PORTFOLIO_MASTER_BRIEF.md`, `MOTION_BRIEF.md` ou `AGENTS.md` n’était présent au moment de l’audit local. Le brief stratégique final devra donc être créé après consolidation des autres recherches, avant toute refonte.
- Le serveur de développement n’a pas pu être ouvert dans le sandbox (`listen EPERM`), limitation de l’environnement et non erreur applicative. Le rendu responsive n’a donc pas été vérifié par captures locales dans cette sous-tâche ; il devra l’être lors de l’implémentation.
- Le dépôt ne documente ni la version Node cible (`engines`, `.nvmrc`) ni les réglages du projet Vercel.

## Quelles données factuelles — profil, projets, parcours, compétences, certifications et liens — sont réellement présentes ?

### Takeaway
Le code expose beaucoup de matière, mais il faut distinguer trois niveaux de preuve : (1) fichiers officiels locaux, notamment les PDF de certificats et le CV ; (2) déclarations dans le code du portfolio, qui sont des claims à valider ; (3) détails promotionnels inférés de cours ou projets, parfois incohérents avec les documents. Le CV local apporte des réalisations software/full-stack majeures absentes de l’interface actuelle.

### Cited Findings

#### Identité, positionnement et contacts actuellement codés

- Identité : « Armel Stéphane Novak KI » ; rôle déclaré : « AI & Data Engineering Student » ; email : `kiarmelstephanenovak@gmail.com` ; GitHub : `https://github.com/ArmelKI` ; LinkedIn : `https://www.linkedin.com/in/armel-stephane-novak-ki` ; Discord : `ArmelKI`. — [profile.js](../../src/data/profile.js)
- Le bio source affirme : étudiant en computer engineering à TELECOM Nancy, passionné par l’IA, la data science et le software engineering, souhaitant résoudre des problèmes concrets en éducation, santé et développement durable. — [profile.js](../../src/data/profile.js)
- Le Hero ne montre pas le nom d’Armel ; il affiche en anglais « AI & Data Engineering Student » et en français « Étudiant ingénieur IA & Data », puis « spécialisé en intelligence artificielle et data science ». Le nom n’apparaît au-dessus de la ligne de flottaison que sous la marque abrégée `Armel.ai` de la navbar. — [Hero.jsx](../../src/components/sections/Hero.jsx); [Navbar.jsx](../../src/components/layout/Navbar.jsx); [i18n.js](../../src/data/i18n.js)
- Le code About revendique : intérêt pour des solutions data concrètes, conduite de projets data et logiciels de bout en bout, Rubik’s Cube, basketball en compétition, découverte de cultures, français/anglais, apprentissage du japonais. Seuls le français langue maternelle et l’anglais B2 sont corroborés par le CV local ; le japonais, le Rubik’s Cube et le basketball doivent être confirmés par Armel. — [i18n.js](../../src/data/i18n.js); [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)

#### Huit projets actuellement exposés

1. **Netflix Content Strategy** — catégorie Data ; code déclaré Python, Pandas, Seaborn, data cleaning ; objectif raconté : analyse de l’évolution du catalogue Netflix, refonte d’un workflow legacy, nettoyage robuste et visualisations orientées décision ; GitHub `https://github.com/ArmelKI/Netflix_data_Analysis_V2` ; capture locale `netflix-analysis.png`. La capture montre un notebook/éditeur VS Code et un graphique de croissance du catalogue, donc une preuve réelle mais visuellement encombrée et peu « produit ». — [projects.js](../../src/data/projects.js); [capture](../../public/assets/images/netflix-analysis.png)
2. **Weather App Widget** — catégorie Web ; JavaScript ES6+, OpenWeatherMap API, glassmorphism ; interface responsive, récupération météo temps réel, erreurs et DOM dynamique ; GitHub `https://github.com/ArmelKI/wheater_app` ; capture locale `weather-app.png` montrant un widget météo Nancy à 6 °C. Aucun lien de démo n’est stocké. — [projects.js](../../src/data/projects.js); [capture](../../public/assets/images/weather-app.png)
3. **My Portfolio (This Site)** — catégorie Web ; React, Framer Motion, Tailwind ; architecture de composants réutilisables, animations et responsive ; GitHub `https://github.com/ArmelKI/Mon_Portfolio` ; capture `Site.png`. Cette capture est obsolète par rapport au code : elle montre « Aspiring AI Engineer » et « CEO at Axiane Agency », formulations actuellement supprimées du Hero. — [projects.js](../../src/data/projects.js); [capture](../../public/assets/images/Site.png); [Hero.jsx](../../src/components/sections/Hero.jsx)
4. **COVID-19 Live Tracker** — catégorie Data ; Python, Pandas, pipeline automatisé ; ETL sur données live OWID, comparaison de quatre pays, moyenne glissante ; GitHub `https://github.com/ArmelKI/covid19-data-analysis` ; capture locale d’un graphique « Daily New COVID-19 Cases (7-Day Rolling Average) » pour France, Russia, South Africa et United States. Aucun dashboard interactif ou lien de démo n’est encodé localement. — [projects.js](../../src/data/projects.js); [capture](../../public/assets/images/covid_trends.png)
5. **Titanic Survival Analysis** — catégorie Data ; Python, Pandas, Seaborn, Scikit-Learn ; EDA, nettoyage, visualisation des facteurs de survie, préparation de features ; GitHub `https://github.com/ArmelKI/titanic-analysis` ; aucune capture locale, seulement un faux extrait de code décoratif écrit dans les données. — [projects.js](../../src/data/projects.js)
6. **Ankata — Transport Booking** — catégorie Web, marqué `private` ; décrit comme plateforme full-stack de réservation de transport reliant voyageurs et compagnies de bus au Burkina Faso, avec API Node.js/Express et application Flutter/Dart ; URL encodée `https://github.com/ArmelKI/Ankata`, mais le composant cache le lien parce que le projet est privé ; aucune capture/démo locale. — [projects.js](../../src/data/projects.js); [Projects.jsx](../../src/components/sections/Projects.jsx)
7. **Quick Menu Africa** — catégorie Web ; React, TypeScript, Tailwind, Vite ; menu numérique et commande en ligne pour restaurants africains ; GitHub `https://github.com/ArmelKI/quick-menu-africa` ; aucune capture/démo locale, seulement un snippet décoratif. — [projects.js](../../src/data/projects.js)
8. **PyCompressor** — catégorie Tools ; Python CLI ; compression/optimisation de fichiers par lots ; GitHub `https://github.com/ArmelKI/PyCompressor` ; aucune capture/démo locale. Le snippet affiche « 128 files · -64% total size », métrique sans source locale et qui ne doit pas être reprise comme résultat réel tant qu’elle n’est pas démontrée par le repository. — [projects.js](../../src/data/projects.js)
- Aucun projet actuel n’a de champs `demoUrl`, rôle personnel, contexte, statut/maturité, fonctionnalités, architecture, contraintes, décisions, résultats vérifiables ou galerie. Le composant ne propose que « View Code » vers GitHub. — [projects.js](../../src/data/projects.js); [Projects.jsx](../../src/components/sections/Projects.jsx)
- Le CV local ajoute deux projets absents du site : **RefactoSphere**, dashboard full-stack d’analyse de code assisté par IA, déclaré « en cours », avec Java Spring Boot, Python FastAPI, React et Elasticsearch, pour analyser Java/Python/JS et suggérer des refactorings ; et une **application web de prospection pour TNS**, projet académique en cours avec Flask, SQLite/PostgreSQL et Agile pour la gestion commerciale et le suivi de projets. — [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)
- Le CV local affirme aussi, sous **Axiane Agency**, le développement de sites pour lycées et centre de langues, une application complète de gestion scolaire pour lycées/collèges au Burkina Faso, et une plateforme de gestion pour centre de langues. Ces réalisations software sont absentes des données projets et du parcours du site actuel. — [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)

#### Expérience, formation et distinctions codées

- **Télécom Nancy Services** — Chef de projet, septembre 2025 à aujourd’hui. Le site revendique coordination d’initiatives digitales pour l’école et des partenaires industriels, gestion d’équipes, budgets et livraison de solutions IA/Data. Le CV ne confirme que le pilotage de projets numériques pour clients industriels, l’encadrement technique et la relation client ; « budgets » et « livraison de solutions IA/Data » nécessitent validation. — [experiences.js](../../src/data/experiences.js); [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)
- **Télécom Nancy** — cycle ingénieur informatique 2025–2028, spécialisation IA et Big Data. Le code ajoute « Ranked 4th in France » et un focus éthique/sociétal non présents dans le CV ; le classement doit être sourcé et la spécialisation confirmée dans sa formulation officielle. — [experiences.js](../../src/data/experiences.js); [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)
- **MJRA Olympiads** — lauréat Or, déclaré 1er sur 200+ en culture générale et mathématiques le 8 août 2025. Le CV confirme « 1er Prix – Olympiades Nationales de Maths & Culture Générale (MJRA, 2025) » mais pas le volume 200+ ni la date exacte. — [experiences.js](../../src/data/experiences.js); [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)
- **Forum 10,000 Codeurs** — organisateur de la 3e édition à Bobo-Dioulasso le 28 juin 2025 ; le code affirme promotion des carrières IA/Data auprès de la jeunesse africaine et networking avec experts. Cette entrée n’est pas dans le CV local et nécessite validation/sources. — [experiences.js](../../src/data/experiences.js)
- **Club Génie logiciel, CPGE MENAPLN Bobo** — président de février 2024 à août 2025 ; ateliers, hackathons, communauté, innovation/mentorat. Cette entrée n’est pas dans le CV local. Un commentaire historique du code reconnaissait que la date de fin avait été choisie « logiquement », donc la date doit être confirmée plutôt que publiée comme factuelle. — [experiences.js](../../src/data/experiences.js)
- **CPGE MENAPLN Bobo** — classes préparatoires 2023–2025 ; le site dit MPSI/MP, maths/physique, bourse Fondation Orange. Le CV dit MPSI et confirme la bourse d’excellence Fondation Orange 2023–2025 ; la mention MP reste à valider. — [experiences.js](../../src/data/experiences.js); [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)
- **International Mathematical Olympiad, Tokyo 2023** — représentant national du Burkina Faso en juillet 2023. Le CV confirme la représentation du Burkina Faso aux IMO Tokyo 2023. — [experiences.js](../../src/data/experiences.js); [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)
- **Lycée Scientifique Régional de Bobo** — Baccalauréat C 2020–2023 ; major de promotion, mention, président du bureau des élèves et membre du club scientifique selon le code. Le CV ne conserve que les distinctions générales, pas cette entrée détaillée ; validation utile. — [experiences.js](../../src/data/experiences.js)
- **Telecel Faso** — agent commercial août–septembre 2021 ; le code revendique une contribution à +15 % de ventes mensuelles. Cette métrique n’est corroborée par aucun autre fichier local. — [experiences.js](../../src/data/experiences.js)
- **Ministère de la Santé du Burkina Faso** — distributeur communautaire saisonnier depuis 2019 ; le code revendique campagnes de chimioprévention du paludisme et sensibilisation de 200+ foyers. Le volume 200+ n’est corroboré par aucun autre fichier local. — [experiences.js](../../src/data/experiences.js)
- Le CV local ajoute une expérience actuelle importante absente du site : **Chef de Projet Technique | Axiane Agency**, depuis mai 2025, avec co-fondation d’une agence tech et management d’équipes projet. `origin/main` présentait auparavant Armel comme Founder & Tech Lead d’AXIANE Agency depuis septembre 2025 et Founder de KIA Consulting ; les deux entrées ont été supprimées dans les commits locaux. Les divergences de titre (« chef de projet technique », « founder/CEO ») et de date (mai/septembre) imposent une validation explicite avant toute réintégration. — [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf); [experiences.js](../../src/data/experiences.js); [capture obsolète](../../public/assets/images/Site.png)
- Le CV annonce un objectif étroit « apprentissage de deux ans dès septembre 2026 en data science/data engineering », ce qui contredit le repositionnement demandé « Software & AI Engineer » et devra être actualisé avant de conserver le téléchargement comme CTA principal. — [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)

#### Compétences actuellement affichées

- Bloc **Data Science & AI** : Python, SQL, C/C++, Pandas, NumPy, Matplotlib, Scikit-Learn, EDA, fondamentaux du machine learning, probabilités/statistiques. — [i18n.js](../../src/data/i18n.js)
- Bloc **Web Development** : React.js, Tailwind CSS, HTML/CSS, JavaScript, TypeScript. — [i18n.js](../../src/data/i18n.js)
- Bloc **Databases** : PostgreSQL, MySQL, modélisation relationnelle. — [i18n.js](../../src/data/i18n.js)
- Bloc **Tools & Environment** : Git/GitHub, Linux/Bash, VS Code, Docker (bases), Microsoft Office/Excel. — [i18n.js](../../src/data/i18n.js)
- Le CV ajoute Flask, TensorFlow (bases), Agile/Scrum, leadership/management ; ses projets ajoutent Spring Boot, FastAPI et Elasticsearch. L’audit GitHub doit décider lesquels sont réellement démontrés par du code avant intégration. — [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)

#### Inventaire complet des certifications codées (35)

- **Data/IA (17)** : Mastering Gemini AI (Udemy/Skool of AI, 10 mai 2025, 8 h) ; Python Data Analytics (Meta/Coursera, 15 avril 2025, 22 h, featured) ; Introduction to Data Analytics in Google Cloud (Google Cloud/Coursera, 26 déc. 2024, 15 h, featured) ; Data Analysis with Spreadsheets and SQL (Meta/Coursera, 6 janv. 2025, 26 h, featured) ; Introduction to Data Analytics (Meta/Coursera, 4 janv. 2025, 17 h) ; Foundations: Data, Data, Everywhere (Google/Coursera, 26 déc. 2024, 12 h, featured) ; Introduction to Data Analytics (IBM/Coursera) ; Scrapy Mastery (Udemy, 10 mai 2025, 3,5 h) ; Introduction to Python (DataCamp, 4 h) ; AI for Everyone (Université Numérique Cheick Hamidou KANE, 4 h) ; Master Python & AI: Predictive Modeling ; Python Web Scraping/Beautiful Soup ; NLP in Python: Probability & Stats ; Python Mastery with Generative AI ; Mastering Prompt Engineering ; AI in Science Mastery ; Mastering Bing Chat & AI. Chaque entrée a un PDF local et une URL de vérification. — [certifications.js](../../src/data/certifications.js); [documents](../../public/assets/documents)
- **Cyber/cloud (6)** : Introduction to Cybersecurity Careers (IBM, featured) ; Foundations of Cybersecurity (Google, featured) ; Connect and Protect: Networks (Google, featured) ; Security Principles in Cloud Computing (Google Cloud) ; Play It Safe: Manage Security Risks (Google) ; Ethical Hacking: Command Injection (Udemy). — [certifications.js](../../src/data/certifications.js)
- **Dev/mobile (5 entrées pour 4 apprentissages)** : Introduction to Mobile App Development (IBM/Coursera) et son badge Credly séparé ; Linux Command Line Arsenal ; Tools of the Trade: Linux and SQL ; Git & GitHub for Beginners. Le cours mobile et le badge attestent le même accomplissement et ne devraient pas occuper deux cartes principales. — [certifications.js](../../src/data/certifications.js); [certificat IBM](../../public/assets/documents/Coursera%20%20IBM%20Introduction%20to%20Mobile%20App%20Development.pdf); [badge IBM](../../public/assets/documents/IBMDesign20250206-27-ci9hoa.pdf)
- **Business/management (7)** : Financial Modeling on Excel ; Business Analysis Fundamentals (Microsoft) ; Project Management Fundamentals MOOC GdP (featured) ; Agile Project Management/Scrum ; Visual Project Management ; From Project to Entrepreneurial Action ; Creative Problem Solving/TRIZ. — [certifications.js](../../src/data/certifications.js)
- Les 8 certifications marquées `featured` dans le code sont les IDs 2, 3, 4, 6, 18, 19, 20 et 31 : quatre data, trois cybersécurité, une gestion de projet. Cette sélection surpondère les cours introductifs/cyber et ne soutient pas directement un positionnement Software & AI. — [certifications.js](../../src/data/certifications.js)
- Les fichiers officiels révèlent plusieurs dates fausses dans les données : IBM Introduction to Data Analytics est daté du 3 janvier 2025, pas mai 2025 ; DataCamp Introduction to Python du 13 août 2024, pas 19 décembre 2024 ; AI for Everyone indique mai 2025, pas 3 avril ; Security Principles in Cloud Computing et Play It Safe sont du 15 décembre 2024, pas mai 2025 ; Tools of the Trade est du 5 février 2025, pas mai ; Business Analysis Fundamentals du 21 décembre 2024, pas mai. — [certifications.js](../../src/data/certifications.js); [certificat IBM Data](../../public/assets/documents/Coursera%20IBM%20Introduction%20to%20Data%20Analytics.pdf); [certificat DataCamp](../../public/assets/documents/Data%20Camp%20Introduction%20to%20Python.pdf); [certificat FORCE-N](../../public/assets/documents/FORCE-N%20Certificat%20IA%20pour%20tous.pdf); [certificat Cloud Security](../../public/assets/documents/Coursera%20Introduction%20to%20Security%20Principles%20in%20Cloud%20Computing.pdf); [certificat Play It Safe](../../public/assets/documents/Coursera%20Play%20It%20Safe%20Manage%20Security%20Risks.pdf); [certificat Linux/SQL](../../public/assets/documents/Coursera%20Tools%20of%20the%20Trade%20Linux%20and%20SQL.pdf); [certificat Microsoft](../../public/assets/documents/Coursera%20Microsoft%20Business%20Analysis%20Fundamentals.pdf)
- L’entrée « Visual Project Management » correspond bien au certificat « Management Visuel de Projet », mais sa description « définir/lancer un MVP », ses skills « Lean Startup/Prototyping » et son nom de fichier `MVP` interprètent incorrectement ou au minimum ambiguëment l’acronyme : ici MVP signifie Management Visuel de Projet, pas nécessairement Minimum Viable Product. — [certifications.js](../../src/data/certifications.js); [certificat MVP](../../public/assets/documents/Attestation%20de%20r%C3%A9ussite%20MOOC%20GdP%20MVP.pdf)
- Les attestations MOOC GdP sont de vraies validations partielles : tronc commun délivré le 29 octobre 2025 ; Scrum, Management Visuel, Action Entrepreneuriale et TRIZ délivrés le 16 novembre 2025 ; elles indiquent une expiration trois ans après délivrance. Le site n’affiche que « 2025 ». — [GdP](../../public/assets/documents/Attestation%20de%20r%C3%A9ussite%20MOOC%20GdP.pdf); [GdP Scrum](../../public/assets/documents/Attestation%20de%20r%C3%A9ussite%20MOOC%20GdP%20GPAS.pdf); [GdP MVP](../../public/assets/documents/Attestation%20de%20r%C3%A9ussite%20MOOC%20GdP%20MVP.pdf); [GdP PAE](../../public/assets/documents/Attestation%20de%20r%C3%A9ussite%20MOOC%20GdP%20PAE.pdf); [GdP TRIZ](../../public/assets/documents/Attestation%20de%20r%C3%A9ussite%20MOOC%20GdP%20TRIZ.pdf)
- Les champs `skills`, `description` et `duration` ne figurent généralement pas sur les certificats eux-mêmes. Ils doivent être traités comme résumés éditoriaux à valider contre le contenu officiel des cours, et non comme faits prouvés par le badge. — [certifications.js](../../src/data/certifications.js); [documents](../../public/assets/documents)

#### Assets et liens locaux

- Images présentes : `Site.png` 1000×620 (123 001 octets), `covid_trends.png` 1000×500 (90 319), `netflix-analysis.png` 1000×563 (131 679), `weather-app.png` 1325×1092 (115 803), `profil-armel.jpg` 760×760 (122 563). — [images](../../public/assets/images)
- Les documents publics totalisent environ 8,7 Mo ; le dossier `public` environ 9,3 Mo et le build environ 9,7 Mo, essentiellement parce que 35 certificats PDF et le CV sont copiés tels quels. — [public/assets/documents](../../public/assets/documents); [public](../../public)
- `profil-armel.jpg` est une photo plein pied extérieure sur fond végétal très coloré ; elle est authentique mais moins adaptée à un hero professionnel dense sans recadrage/traitement cohérent. — [photo](../../public/assets/images/profil-armel.jpg)
- `favicon.svg` est un pictogramme Lucide « brain », renforçant encore l’image IA au lieu de l’identité Software & AI. `public/assets/react.svg` est un asset inutilisé. — [favicon.svg](../../public/favicon.svg); [react.svg](../../public/assets/react.svg)
- Aucun asset local ne soutient Ankata, Quick Menu Africa, PyCompressor, Titanic, RefactoSphere, l’application TNS ou les produits Axiane. Ces médias devront venir des repos/démos réels, jamais de mockups inventés. — [images](../../public/assets/images); [projects.js](../../src/data/projects.js); [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)

### Inferences
- Les projets software les plus différenciants localement sont Ankata, RefactoSphere, l’application TNS et les systèmes de gestion Axiane, mais seuls les repos/une inspection de code externe peuvent établir leur maturité, rôle exact et architecture. Ils ne doivent pas être promus comme livrés ou production-ready sur la seule base du CV.
- Les cours Coursera/Google/Meta sont plus crédibles comme compléments de parcours que la longue série de micro-certificats Udemy effectués le même jour. La future section devrait sélectionner 3–5 preuves alignées sur data/cloud/engineering/gestion de projet et placer le reste dans une vue secondaire discrète.
- Le CV téléchargeable est aujourd’hui la plus forte source de réalisations software, mais aussi le document le plus en contradiction avec le repositionnement demandé ; il faut le mettre à jour en même temps que le site ou retirer temporairement son CTA dominant.

### Gaps
- Les métriques +15 % ventes, 200+ foyers, 200+ participants, le classement « 4e en France », les dates/titres Axiane et la réalité du japonais ne sont pas prouvés localement.
- Les PDF Udemy sont principalement des images sans couche texte exploitable ; leurs titres et IDs sont encodés dans les noms de fichiers et les données, mais une vérification visuelle ou via URL officielle reste souhaitable avant correction éditoriale.
- Aucun justificatif local n’atteste directement les expériences Forum 10,000 Codeurs, Club Génie logiciel, Telecel ou santé communautaire.

## Quels éléments sont maintenables, réutilisables ou problématiques ?

### Takeaway
La séparation composants/données, le bilingue, les assets authentiques, le responsive Tailwind et quelques primitives UI sont de bonnes bases. En revanche, le design et le contenu produisent une succession uniforme de cartes sombres, l’architecture éditoriale ne démontre ni produit ni architecture logicielle, et plusieurs composants ont des lacunes d’accessibilité, de performance ou de cohérence.

### Cited Findings

#### À réutiliser

- `LanguageContext` est court, compréhensible et fonctionnel ; la persistance FR/EN et la mise à jour de `html.lang` peuvent être conservées. — [LanguageContext.jsx](../../src/context/LanguageContext.jsx)
- La séparation de `profile`, `projects`, `experiences`, `certifications` de la logique de rendu est une bonne direction. — [src/data](../../src/data)
- Les composants réutilisables `SectionTitle` et `Marquee`, les icônes Lucide et les tokens Tailwind `dark`, `card`, `primary`, `accent` fournissent un socle minimal cohérent. — [SectionTitle.jsx](../../src/components/ui/SectionTitle.jsx); [Marquee.jsx](../../src/components/ui/Marquee.jsx); [tailwind.config.js](../../tailwind.config.js)
- Les images projets et le portrait ont été fortement optimisés dans le commit local `edeb296`; toutes les images de contenu portent `loading="lazy"` et `decoding="async"`. — [About.jsx](../../src/components/sections/About.jsx); [Projects.jsx](../../src/components/sections/Projects.jsx); [images](../../public/assets/images)
- Les sections utilisent des conteneurs `max-w-*`, des grilles `md:grid-cols-*`/`lg:grid-cols-*`, des espacements mobiles, un menu mobile à partir de `md`, et les CTA du hero passent de colonne à ligne à partir de `sm`; le responsive est conçu, même s’il reste à tester visuellement. — [Hero.jsx](../../src/components/sections/Hero.jsx); [Navbar.jsx](../../src/components/layout/Navbar.jsx); [Skills.jsx](../../src/components/sections/Skills.jsx); [Projects.jsx](../../src/components/sections/Projects.jsx)
- Le spotlight du Hero modifie directement un style via `ref` plutôt que de provoquer un re-render React à chaque mouvement ; c’est une optimisation correcte. — [Hero.jsx](../../src/components/sections/Hero.jsx)
- Les liens externes utilisent généralement `target="_blank"` et `rel="noreferrer"`; les icônes sociales et les liens de vérification possèdent des `aria-label`. — [Footer.jsx](../../src/components/layout/Footer.jsx); [Certifications.jsx](../../src/components/sections/Certifications.jsx)

#### À remplacer ou refactorer

- Le modèle projet ne contient que titre/catégorie/image/techs/description/lien/icône. Il force une carte identique pour un notebook data, une CLI, une app full-stack et une app mobile, effaçant la difficulté technique et l’impact réel. — [projects.js](../../src/data/projects.js); [Projects.jsx](../../src/components/sections/Projects.jsx)
- Les « snippets » des projets sans capture sont du texte décoratif écrit à la main, non extrait du code. Celui de PyCompressor contient même une métrique non sourcée. Ces faux terminaux donnent une impression de profondeur sans preuve et doivent être remplacés par architecture, capture réelle, séquence d’usage ou code vérifié. — [projects.js](../../src/data/projects.js); [Projects.jsx](../../src/components/sections/Projects.jsx)
- Le site est visuellement une longue série de grilles de cards sombres à bordures, avec beaucoup de tags et des interactions hover. La hiérarchie entre projets majeurs, secondaires, compétences et badges est faible. — [Skills.jsx](../../src/components/sections/Skills.jsx); [Projects.jsx](../../src/components/sections/Projects.jsx); [Certifications.jsx](../../src/components/sections/Certifications.jsx)
- L’ordre actuel place Timeline et Skills avant Projects, retardant les preuves de capacité. Pour le nouveau positionnement, les meilleurs projets doivent apparaître immédiatement après le Hero ou une courte preuve de crédibilité. — [App.jsx](../../src/App.jsx)
- Le Hero n’énonce ni le nom complet ni « Software & AI Engineer », et répète IA/Data dans le titre, la bio et le badge ; il réduit effectivement le profil à la spécialisation. — [Hero.jsx](../../src/components/sections/Hero.jsx); [i18n.js](../../src/data/i18n.js)
- Le logo `Armel.ai` et le favicon cerveau continuent de cadrer Armel comme profil IA avant logiciel. — [Navbar.jsx](../../src/components/layout/Navbar.jsx); [favicon.svg](../../public/favicon.svg)
- La section Certifications rend 35 cartes par défaut, chacune avec date, description, trois tags et deux actions. Cette densité transforme le site en catalogue de badges, dilue les projets et charge 8,7 Mo de PDFs publics. — [Certifications.jsx](../../src/components/sections/Certifications.jsx); [certifications.js](../../src/data/certifications.js); [documents](../../public/assets/documents)
- `profile.role` et `profile.bio` ne sont pratiquement pas la source du Hero/About, car ces textes sont dupliqués dans `i18n.js`. Les descriptions de projets et expériences sont également dupliquées/surchargées par ID, créant plusieurs vérités concurrentes. — [profile.js](../../src/data/profile.js); [i18n.js](../../src/data/i18n.js); [Hero.jsx](../../src/components/sections/Hero.jsx); [Timeline.jsx](../../src/components/sections/Timeline.jsx)
- La photo réelle fait 760×760, mais le composant déclare `width="640" height="800"`, ratio incorrect susceptible de réserver un espace 4:5 avant chargement puis de causer un déplacement de layout. — [About.jsx](../../src/components/sections/About.jsx); [photo](../../public/assets/images/profil-armel.jpg)
- Framer Motion est chargé dans presque toutes les sections pour des fades/scales simples ; le JavaScript de production atteint 124,95 kB gzip. `LazyMotion`/`MotionConfig` ou des animations CSS/IntersectionObserver plus ciblées permettraient de réduire le coût. — [package.json](../../package.json); [src/components](../../src/components)
- Le Hero écoute `mousemove` sur `window` pendant toute la vie de la page, même lorsque le Hero est hors écran. Le listener devrait être limité au Hero/pointer devices ou suspendu hors viewport. — [Hero.jsx](../../src/components/sections/Hero.jsx)
- Seule l’animation CSS du marquee honore `prefers-reduced-motion`; les animations Framer Motion, `animate-ping`, `animate-bounce`, hover scales et transitions ne sont pas globalement désactivées. — [index.css](../../src/index.css); [Hero.jsx](../../src/components/sections/Hero.jsx); [src/components](../../src/components)
- Les filtres projets/certifications n’exposent pas `aria-pressed`, la navigation active n’expose pas `aria-current`, le sélecteur de langue n’expose pas son état, et les focus visibles ne sont pas systématiquement stylés. — [Navbar.jsx](../../src/components/layout/Navbar.jsx); [Projects.jsx](../../src/components/sections/Projects.jsx); [Certifications.jsx](../../src/components/sections/Certifications.jsx)
- Le formulaire utilise uniquement des placeholders : aucun `<label>`, aucune aide/erreur accessible. Il ne soumet rien à un service ; il ouvre simplement un lien `mailto:`. Le CTA « Send Message » peut donc surprendre les utilisateurs sans client mail configuré. — [Contact.jsx](../../src/components/sections/Contact.jsx)
- Le retour « Copied! » de Discord n’est pas annoncé via une zone `aria-live`; le menu mobile ne gère ni Escape, ni focus, ni verrouillage du scroll. — [Contact.jsx](../../src/components/sections/Contact.jsx); [Navbar.jsx](../../src/components/layout/Navbar.jsx)
- Il n’existe pas de lien d’évitement (« skip to content »), et les IDs d’ancre sont portés par des `<div>` autour des sections plutôt que par les sections elles-mêmes. — [App.jsx](../../src/App.jsx)
- Le contraste exact des nombreux textes `text-gray-500` sur `#0a0a0a/#111111` doit être mesuré ; ils sont utilisés pour descriptions, tags et métadonnées essentielles, donc un échec WCAG est plausible. — [src/components](../../src/components); [tailwind.config.js](../../tailwind.config.js)

### Inferences
- Les meilleures primitives à préserver sont le contexte de langue, les données séparées, la palette sombre et l’emploi d’assets authentiques. L’essentiel des sections métier devrait être recomposé plutôt que retouché.
- Le portfolio gagnerait à employer 2–3 gabarits éditoriaux : grande étude de cas featured, projet secondaire compact, archive/expérimentation ; cela permettrait de montrer produit, architecture et résultat sans uniformiser tout en cards.
- Le marquee apporte du mouvement mais répète une liste de technologies sans preuve. Il est moins précieux qu’un schéma de capacités reliées à des projets concrets et peut être supprimé si la refonte reste dense.

### Gaps
- Sans rendu local aux breakpoints, les risques précis d’overflow des longs titres, adresses email, tags et filtres restent à valider.
- Aucun audit automatisé Lighthouse/axe n’a été exécuté dans cette sous-tâche ; les constats accessibilité sont issus du code.

## Quels sont les problèmes SEO, performance, responsive, accessibilité et liens ?

### Takeaway
Le socle SEO minimal existe (title, description, canonical, Open Graph/Twitter), mais il est anglais, statique et centré AI/Data. La SPA n’a ni données structurées, ni sitemap/robots, ni pré-rendu, et son média social est un portrait. Les liens locaux existent, mais les URLs externes et démos doivent être validées par l’audit web/GitHub.

### Cited Findings
- `<html lang="en">`, title, description, OG et Twitter positionnent tous Armel comme « AI & Data Engineering Student » avec projets IA/Data Science/software engineering ; ils restent inchangés quand l’interface passe en français. — [index.html](../../index.html); [LanguageContext.jsx](../../src/context/LanguageContext.jsx)
- La canonical et `og:url` pointent correctement vers `https://armel-ki-portfolio.vercel.app/`. — [index.html](../../index.html)
- `og:image` et `twitter:image` utilisent la photo personnelle carrée, non une carte sociale conçue pour le partage ; aucun `og:image:width/height/alt`, aucune locale OG, aucun `site_name` n’est défini. — [index.html](../../index.html); [photo](../../public/assets/images/profil-armel.jpg)
- Aucun JSON-LD `Person`, aucun `sameAs`, sitemap, robots.txt, manifest, favicon multi-format ou page 404 versionnée n’existe. — [index.html](../../index.html); [public](../../public)
- Le contenu applicatif est injecté côté client ; le HTML source ne contient aucune section projet/parcours. Les moteurs modernes peuvent exécuter le JS, mais le pré-rendu donnerait une indexation, un aperçu et une robustesse supérieurs. — [index.html](../../index.html); [main.jsx](../../src/main.jsx)
- Le bundle JS principal est unique (390,33 kB brut, 124,95 kB gzip). Aucune route ni lazy import ne découpe Framer Motion ou la longue liste de certifications. — [vite.config.js](../../vite.config.js); [App.jsx](../../src/App.jsx); [Certifications.jsx](../../src/components/sections/Certifications.jsx)
- Les cinq images sont raisonnablement légères, mais il n’existe pas de variantes WebP/AVIF ou `srcset/sizes`. Les project cards affichent toutes les captures dans un ratio fixe `h-48 object-cover`, ce qui peut rogner des détails de dashboards. — [Projects.jsx](../../src/components/sections/Projects.jsx); [images](../../public/assets/images)
- Tous les chemins locaux référencés dans le code existent : 5 images, 35 certificats PDF et le CV. Aucun lien de démo projet n’est présent. — [projects.js](../../src/data/projects.js); [certifications.js](../../src/data/certifications.js); [public/assets](../../public/assets)
- Le contact email/LinkedIn/GitHub/Discord est codé ; le formulaire utilise `mailto:` et la carte email ouvre aussi un lien avec `target="_blank"`, comportement inutilement variable selon le navigateur. — [Contact.jsx](../../src/components/sections/Contact.jsx); [profile.js](../../src/data/profile.js)
- La navbar possède 7 liens, trop nombreux pour une navigation desktop concise ; elle devient un menu empilé sur mobile. Les intitulés et le menu sont bilingues, mais le `aria-label` du bouton (« Open menu/Close menu ») reste uniquement anglais. — [Navbar.jsx](../../src/components/layout/Navbar.jsx); [i18n.js](../../src/data/i18n.js)

### Inferences
- Pour la performance, le plus gros gain n’est pas l’optimisation supplémentaire des PNG mais la réduction du catalogue de certifications rendu par défaut, la maîtrise de Framer Motion et éventuellement le pré-rendu.
- Pour le SEO bilingue, deux URLs pré-rendues (`/fr`, `/en`) avec `hreflang` seraient idéales, mais une seule URL avec métadonnées générées au build dans la langue cible reste acceptable si le besoin multilingue ne justifie pas la complexité.
- Une image OG dédiée 1200×630 devrait combiner nom, rôle « Software & AI Engineer » et une mosaïque de produits réels ; ne pas réutiliser le portrait seul ni l’ancienne capture « Aspiring AI Engineer ».

### Gaps
- Les réponses HTTP, redirections, cache headers et éventuels réglages Vercel ne sont pas dans le dépôt ; ils doivent être inspectés sur le site déployé.
- Les URLs externes GitHub, LinkedIn, vérification des certificats et éventuelles démos n’ont pas été testées dans cet audit local ; d’autres chercheurs doivent les vérifier sur le web.

## Quelle approche d’implémentation réaliserait le mieux un portfolio Software & AI Engineer tout en préservant les faits ?

### Takeaway
La meilleure approche est une refonte éditoriale et structurelle sur la stack actuelle : nouveau modèle de contenu vérifiable, projets featured racontés comme produits, preuve software avant catalogue de compétences, IA comme spécialisation transversale, certifications fortement éditées, accessibilité et SEO intégrés dès les composants. Le code actuel doit servir de source de faits et d’assets, pas de modèle visuel à conserver en bloc.

### Cited Findings
- La stack actuelle compile et lint correctement ; aucune contrainte technique locale ne justifie une réécriture hors React/Vite. — [package.json](../../package.json); [vite.config.js](../../vite.config.js)
- Le code et le CV contiennent assez de réalisations web, backend, mobile, data et IA pour construire un positionnement plus large, mais les projets les plus puissants ne figurent pas encore dans les données de la page. — [projects.js](../../src/data/projects.js); [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)
- Les sources locales comportent des incohérences de dates, de titres et de métriques ; l’implémentation doit inclure une couche de validation explicite au lieu de recopier toutes les affirmations. — [certifications.js](../../src/data/certifications.js); [experiences.js](../../src/data/experiences.js); [CV local](../../public/assets/documents/KI_Armel_Stephane_Novak.pdf)

### Inferences

#### Architecture de contenu recommandée

- Créer un schéma `projects` riche et typé : `slug`, `title`, `category`, `featured`, `status`, `context`, `role`, `problem`, `solution`, `technicalChallenge`, `architecture`, `features`, `stack`, `aiUse`, `integrations`, `repoUrl`, `demoUrl`, `media[]`, `result` et `evidence`. Chaque claim doit pointer vers une source réelle ou rester marqué `needsValidation`.
- Remplacer la duplication `projects.js + i18n.items[id]` par des objets localisés adjacents ou des fichiers de contenu par langue avec validation de schéma. Faire de même pour expérience/certifications.
- Garder `profile` comme source unique des coordonnées et du positionnement ; générer Hero, metadata, JSON-LD et Footer depuis cette source pour éviter les divergences.
- Distinguer trois niveaux : 3–4 études de cas featured très visuelles ; 3–6 projets secondaires ; archive/expérimentations. Ne pas afficher automatiquement tous les repos.

#### Ordre et composants recommandés

- `Navbar` courte : Projets, Expertise/Capacités, Parcours, À propos, Contact, langue ; le nom « Armel KI » remplace `Armel.ai`.
- `Hero` : nom explicite, rôle « Software & AI Engineer », proposition de valeur produit de bout en bout, deux CTA (« Voir les projets », « Me contacter ») et CV à jour en lien secondaire.
- `FeaturedProjects` immédiatement après le Hero, avec une grande composition asymétrique et 3–4 projets dont l’architecture/les fonctionnalités sont lisibles sans ouvrir GitHub.
- `Capabilities` reliées à des preuves : applications web/full-stack, backend/APIs, IA/agents, data/dashboards, automatisation/intégrations. Chaque capacité cite 1–2 projets réels au lieu d’un nuage de tags.
- `SelectedWork` pour projets secondaires, avec filtres simples seulement si le volume le justifie.
- `ExperienceEducation` compact : Axiane/TNS/Télécom/CPGE et distinctions vérifiées, sans timeline exhaustive de faible valeur.
- `SelectedCredentials` : 3–5 certifications pertinentes, puis un lien « voir toutes les certifications » dans un drawer/page secondaire. Éviter 35 cartes dans le flux principal.
- `About` et `Contact` personnels, non agence : disponibilité, types de collaboration, email/LinkedIn/GitHub ; le formulaire doit soit envoyer réellement via un endpoint, soit dire explicitement qu’il ouvre l’application email.

#### UI, motion, responsive et accessibilité recommandés

- Conserver une base sombre mais créer une identité plus éditoriale : surface neutre, accent bleu/violet parcimonieux, typographie expressive, séparations par espace et composition plutôt que bordure autour de chaque bloc.
- Utiliser des captures réelles dans des cadres cohérents ; recapturer le portfolio, éviter l’IDE pour Netflix si une visualisation propre est disponible, conserver Weather/COVID comme preuves secondaires, récupérer les assets réels des repos prioritaires.
- Animation : entrée douce du Hero, reveal discret des études de cas, micro-parallaxe ou survol uniquement sur médias, transitions de filtres courtes. Respecter globalement `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`; bannir les animations permanentes non informatives.
- Mobile first : cartes featured en pile, architecture transformée en liste lisible, filtres horizontaux scrollables, zones tactiles ≥44 px, aucun texte tronqué essentiel, email long avec wrap.
- Accessibilité : skip link, landmarks sémantiques, un H1 unique avec le nom/rôle, labels de formulaire, `aria-current`, `aria-pressed`, focus visible à fort contraste, statut copie en `aria-live`, menu mobile avec Escape/focus, alternatives textuelles utiles, contraste WCAG AA.

#### SEO/performance recommandés

- Mettre à jour title/description/OG/Twitter vers Software & AI Engineer et produits numériques ; générer une image OG dédiée ; ajouter JSON-LD `Person`/`sameAs`, sitemap et robots.
- Pré-rendre la home (et idéalement les case studies) au build ; si le bilingue reste sur une seule URL, synchroniser au minimum `title`, description et OG avec la langue initiale.
- Convertir les captures en WebP/AVIF avec fallback, déclarer dimensions exactes, `srcset/sizes`, et charger en priorité uniquement le média above-the-fold.
- Employer `LazyMotion` ou remplacer les fades simples par CSS ; charger le détail des certifications à la demande ; supprimer `clsx`, `tailwind-merge`, `@types/*` si inutiles ou les utiliser réellement dans une migration TS.

#### Faits à faire valider avant codage

- Titre, rôle et dates Axiane ; statut éventuel de KIA Consulting ; droit de mentionner les clients/écoles/centre de langues ; maturité et démontrabilité des produits Axiane.
- Statut, architecture, contribution personnelle et médias de RefactoSphere, TNS Prospect, Ankata, Quick Menu Africa, PyCompressor et autres repos sélectionnés.
- « spécialisation IA & Big Data », classement Télécom Nancy, chiffres 200+/15 %, anglais B2/japonais, disponibilité exacte pour stage/alternance.
- Mise à jour du CV pour l’aligner sur Software & AI Engineer et correction des dates de certificats.

### Gaps
- L’ordre final des projets et les textes de case study dépendent de l’audit exhaustif des repos/démos conduit en parallèle ; le dépôt portfolio seul ne suffit pas à juger qualité, maturité et rôle personnel.
- La décision de maintenir une version bilingue complète, de créer des pages de cas ou de rester one-page doit être arrêtée dans `PORTFOLIO_MASTER_BRIEF.md` après l’audit global.
