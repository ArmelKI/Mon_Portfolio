# Armel KI — Software & AI Engineer

Portfolio personnel d’Armel KI, construit comme un dossier de preuves vivant : produits web et mobile, backend/API, automatisation, data et IA utile.

Le site présente six études de cas principales, sept réalisations publiques complémentaires, quatre projets privés documentés, un parcours interactif et une bibliothèque consultable de 35 certifications. Les statuts et limites sont affichés explicitement afin de distinguer MVP, prototypes, analyses reproductibles et travaux dont le code n'est pas public.

L’identité visuelle adopte un langage de « product playground » : couleurs franches, formes simples, hiérarchie typographique très marquée et interactions courtes. Cette énergie visuelle sert la lecture des preuves sans transformer le portfolio en site d’agence ni en template gaming.

## Stack

- React 19 + Vite 7
- Tailwind CSS 3 et CSS éditorial sur mesure
- Lucide React
- Données bilingues FR/EN
- Pré-rendu statique du contenu critique après build
- Tests Node sur le modèle de contenu et contrôle des liens locaux

## Commandes

```bash
npm install
npm run dev
npm run lint
npm test
npm run check:links
npm run build
npm run preview
```

Le build de production injecte un instantané sémantique dans le HTML initial pour exposer le H1, le positionnement et les projets avant l’exécution de React.

## Contenu et stratégie

- `PORTFOLIO_MASTER_BRIEF.md` : source de vérité stratégique et factuelle.
- `MOTION_BRIEF.md` : brief de vidéo courte.
- `src/data/projects.js` : projets principaux et réalisations complémentaires.
- `src/data/certifications.js` : bibliothèque complète des certifications.
- `src/data/profile.js` et `src/data/portfolio.js` : identité, textes bilingues, capacités et parcours.

## Déploiement

Le site est conçu pour un déploiement statique sur Vercel. Aucune publication ni fusion sur la branche principale n’est automatisée par ce dépôt.
