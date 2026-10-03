# Médias réels et démos des dépôts publics

## Quels dépôts contiennent des screenshots/assets qui peuvent devenir des médias de cartes portfolio ?

### Takeaway
Grill Go et Sweet Site Studio contiennent des images locales réelles, prêtes à être copiées dans le portfolio comme visuels de contexte. Aucun des sept dépôts inspectés ne contient de screenshot applicatif explicite ; Salon Shine, Vêtements BF, Quick Menu Africa et PyCompressor devront donc être capturés depuis une exécution locale si l’on veut montrer l’interface plutôt qu’une illustration.

### Cited Findings
- Grill Go versionne une image de héros 1920 × 1080 et quatre photos carrées de plats dans `src/assets` ; elles sont des assets locaux utilisables pour une carte ou une mosaïque du projet. — [hero-grill.jpg](https://raw.githubusercontent.com/ArmelKI/grill-go/main/src/assets/hero-grill.jpg), [attieke.jpg](https://raw.githubusercontent.com/ArmelKI/grill-go/main/src/assets/attieke.jpg), [poisson.jpg](https://raw.githubusercontent.com/ArmelKI/grill-go/main/src/assets/poisson.jpg), [riz-gras.jpg](https://raw.githubusercontent.com/ArmelKI/grill-go/main/src/assets/riz-gras.jpg), [yassa.jpg](https://raw.githubusercontent.com/ArmelKI/grill-go/main/src/assets/yassa.jpg)
- Sweet Site Studio versionne une image de héros 1920 × 1080, six images de galerie carrées et un logo de pâtisserie ; ces médias sont les meilleurs visuels sources pour cette réalisation. — [hero-cake.jpg](https://raw.githubusercontent.com/ArmelKI/sweet-site-studio/main/src/assets/hero-cake.jpg), [gallery-1.jpg](https://raw.githubusercontent.com/ArmelKI/sweet-site-studio/main/src/assets/gallery-1.jpg), [gallery-2.jpg](https://raw.githubusercontent.com/ArmelKI/sweet-site-studio/main/src/assets/gallery-2.jpg), [gallery-3.jpg](https://raw.githubusercontent.com/ArmelKI/sweet-site-studio/main/src/assets/gallery-3.jpg), [gallery-4.jpg](https://raw.githubusercontent.com/ArmelKI/sweet-site-studio/main/src/assets/gallery-4.jpg), [gallery-5.jpg](https://raw.githubusercontent.com/ArmelKI/sweet-site-studio/main/src/assets/gallery-5.jpg), [gallery-6.jpg](https://raw.githubusercontent.com/ArmelKI/sweet-site-studio/main/src/assets/gallery-6.jpg), [logo-patisserie.png](https://raw.githubusercontent.com/ArmelKI/sweet-site-studio/main/src/assets/logo-patisserie.png)
- Ankata contient un logo et des logos de compagnies, mais pas de capture de l’expérience passager prête à publier ; le média le plus sûr sans exécution est le logo. — [ankata_logo.jpeg](https://raw.githubusercontent.com/ArmelKI/Ankata/main/mobile/assets/logos/ankata_logo.jpeg), [arborescence des assets Ankata](https://github.com/ArmelKI/Ankata/tree/main/mobile/assets)
- Les arbres des dépôts Salon Shine, Vêtements BF, Quick Menu Africa et PyCompressor ne listent pas de fichier PNG/JPEG/WebP de capture produit. — [Salon Shine](https://github.com/ArmelKI/salon-shine), [Vêtements BF](https://github.com/ArmelKI/v-tementsbf-boutique), [Quick Menu Africa](https://github.com/ArmelKI/quick-menu-africa), [PyCompressor](https://github.com/ArmelKI/PyCompressor)

### Inferences
- Pour rendre tous les projets au même niveau visuel, la bonne suite est de lancer chaque projet public et d’en faire une ou deux captures authentiques (page d’accueil + écran différenciant : admin, panier, QR, etc.), puis de les placer dans `public/assets/images/projects/`.
- Les photos de plats et de pâtisserie doivent accompagner une capture d’interface dès qu’elle est disponible : seules, elles montrent l’univers métier mais pas la qualité du produit logiciel.

### Gaps
- Aucune démo déployée vérifiable ou capture applicative versionnée n’a été trouvée pour Salon Shine, Grill Go, Vêtements BF, Quick Menu Africa, Sweet Site Studio ou PyCompressor.

## Quelles démos ou URLs de déploiement sont vérifiées ou mentionnées ?

### Takeaway
Parmi les sept dépôts ciblés, seule l’API GitHub d’AxiNafa expose une homepage renseignée ; aucun dépôt de cette sélection ne déclare une démo dans ses métadonnées GitHub. Les README de quatre projets Lovable contiennent une URL modèle non renseignée et ne doivent pas être présentés comme des démos.

### Cited Findings
- La homepage renseignée dans les métadonnées GitHub d’AxiNafa est `https://axinafa-ai.vercel.app`. — [métadonnées GitHub AxiNafa-AI](https://api.github.com/repos/ArmelKI/AxiNafa-AI)
- Les métadonnées GitHub des dépôts Salon Shine, Grill Go, Vêtements BF, PyCompressor, Ankata, Quick Menu Africa et Sweet Site Studio ne renseignent pas de homepage. — [Salon Shine](https://api.github.com/repos/ArmelKI/salon-shine), [Grill Go](https://api.github.com/repos/ArmelKI/grill-go), [Vêtements BF](https://api.github.com/repos/ArmelKI/v-tementsbf-boutique), [PyCompressor](https://api.github.com/repos/ArmelKI/PyCompressor), [Ankata](https://api.github.com/repos/ArmelKI/Ankata), [Quick Menu Africa](https://api.github.com/repos/ArmelKI/quick-menu-africa), [Sweet Site Studio](https://api.github.com/repos/ArmelKI/sweet-site-studio)
- Les README de Salon Shine, Grill Go, Vêtements BF, Quick Menu Africa et Sweet Site Studio contiennent le placeholder `https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID`, non une URL de projet utilisable. — [README Salon Shine](https://github.com/ArmelKI/salon-shine/blob/main/README.md), [README Grill Go](https://github.com/ArmelKI/grill-go/blob/main/README.md), [README Vêtements BF](https://github.com/ArmelKI/v-tementsbf-boutique/blob/main/README.md), [README Quick Menu Africa](https://github.com/ArmelKI/quick-menu-africa/blob/main/README.md), [README Sweet Site Studio](https://github.com/ArmelKI/sweet-site-studio/blob/main/README.md)

### Inferences
- Les CTA honnêtes à conserver sont donc `Voir le code` pour les dépôts publics et, lorsqu’un rendu live est demandé, `Demander une démo` jusqu’à ce qu’une URL de déploiement réelle soit fournie ou créée.

### Gaps
- Les liens de déploiement éventuellement détenus hors GitHub/Lovable ne peuvent pas être déduits de ces dépôts publics et nécessitent une confirmation de l’auteur.

## Quels faits issus du code peuvent renforcer les descriptions des cartes ?

### Takeaway
Les cinq projets React ne sont pas de simples pages statiques : leurs routeurs et composants exposent des parcours métier et, pour plusieurs, un espace d’administration. PyCompressor est une application desktop fonctionnelle avec sélection multiple, réglage de qualité, redimensionnement et traitement asynchrone.

### Cited Findings
- Salon Shine route vers services, avant/après, galerie, rendez-vous, avis et contact, ainsi qu’un espace admin pour le tableau de bord, les services, la galerie, les rendez-vous et le design. — [routes Salon Shine](https://github.com/ArmelKI/salon-shine/blob/main/src/App.tsx)
- La stack déclarée de Salon Shine associe Vite, React, TypeScript, shadcn-ui et Tailwind CSS ; le projet embarque aussi Framer Motion dans ses dépendances. — [package.json Salon Shine](https://github.com/ArmelKI/salon-shine/blob/main/package.json)
- Grill Go prévoit des parcours menu, commande, livraison, avis et contact, plus une administration pour le tableau de bord, le menu, la livraison, les avis et le design. — [routes Grill Go](https://github.com/ArmelKI/grill-go/blob/main/src/App.tsx)
- Grill Go contient explicitement un composant de panier, un composant de QR menu et un bouton WhatsApp. — [dossier des composants Grill Go](https://github.com/ArmelKI/grill-go/tree/main/src/components)
- Vêtements BF propose collections, détail produit, panier, favoris, lookbook et contact, avec un garde d’administration couvrant tableau de bord, collections, produits, témoignages, lookbook, contact et design. — [routes Vêtements BF](https://github.com/ArmelKI/v-tementsbf-boutique/blob/main/src/App.tsx)
- Quick Menu Africa expose un menu public par restaurant (`/m/:restaurantId`) ainsi que des zones protégées : tableau de bord, menu, QR codes, commandes, point de vente, stock, analytique, clients, promotions et paramètres. — [routes Quick Menu Africa](https://github.com/ArmelKI/quick-menu-africa/blob/main/src/App.tsx)
- Sweet Site Studio comporte menu, détail produit, checkout, panier, favoris, commandes de gâteau sur mesure, événements, avis et contact ; son administration couvre notamment galerie, menu, commandes, gâteaux personnalisés, SEO et page d’accueil. — [routes Sweet Site Studio](https://github.com/ArmelKI/sweet-site-studio/blob/main/src/App.tsx)
- Ankata est structuré en API Node.js/Express et app mobile Flutter avec PostgreSQL, Supabase, JWT, SMS/Twilio et fournisseurs de paiement ; le README documente recherche de lignes, authentification OTP et création de réservation. — [README Ankata](https://github.com/ArmelKI/Ankata/blob/main/README.md)
- PyCompressor utilise CustomTkinter ; l’interface accepte plusieurs fichiers, expose un curseur de qualité de 10 à 100 %, une option de redimensionnement à 1920 px, une progression et lance le traitement dans un thread daemon. — [fenêtre PyCompressor](https://github.com/ArmelKI/PyCompressor/blob/main/gui/app_window.py)
- PyCompressor compresse les JPEG et PNG avec Pillow et optimise les flux de contenu PDF avec pypdf. — [compression image](https://github.com/ArmelKI/PyCompressor/blob/main/logic/compressor_img.py), [compression PDF](https://github.com/ArmelKI/PyCompressor/blob/main/logic/compressor_pdf.py), [dépendances](https://github.com/ArmelKI/PyCompressor/blob/main/requirements.txt)

### Inferences
- Wording concis recommandé pour les cartes :
  - **Salon Shine** : « Expérience de salon : réservation, galerie, avant/après et espace d’administration. »
  - **Grill Go** : « Parcours de commande pour la restauration : menu, panier, livraison, QR menu et administration. »
  - **Vêtements BF** : « Boutique éditoriale : collections, produit, panier, favoris, lookbook et administration. »
  - **Quick Menu Africa** : « Outil de restauration : menu public, QR, commandes, point de vente, stock et analytique. »
  - **Sweet Site Studio** : « Vitrine et commande pour pâtisserie : catalogue, panier, gâteaux sur mesure, événements et back-office. »
  - **PyCompressor** : « Utilitaire desktop de compression d’images et PDF, avec réglage de qualité, traitement multiple et suivi de progression. »
- Pour ne pas sur-promettre, ne pas qualifier les espaces admin de “backend sécurisé” ou de “production” à partir de ces seules sources : les routes et composants le prouvent, pas une authentification serveur déployée.

### Gaps
- Le code public inspecté ne fournit pas de métrique d’utilisation, d’utilisateurs actifs, de client, de revenus ou de déploiement : aucune de ces affirmations ne doit être ajoutée au portfolio.
