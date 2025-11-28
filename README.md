````markdown
# ⚡ Armel KI - Data & AI Portfolio

![Portfolio Preview](public/assets/images/profil-armel.jpg) 
Modern, dark-themed portfolio built for an **Aspiring AI Engineer & Entrepreneur**.  
Designed to showcase Data Science projects, Certifications, and professional milestones with a clean, high-performance UI.

🔗 **Live Demo:** armel-ki-portfolio.vercel.app

---

## 🚀 Features

- **🎨 Modern UI/UX:** Dark mode aesthetic with "Glassmorphism" effects and "Spotlight" animations.
- **🍱 Bento Grid Layout:** Asymmetric grid to showcase Technical Skills (Data, Web, DevOps).
- **🎓 Interactive Timeline:** Visual journey through Education, Career (Axiane Agency), and Associations.
- **📂 Project Filtering:** Filter projects by category (Data Science, AI, Web Dev).
- **📜 Certification Hub:** Dedicated section to view credentials and download PDF certificates.
- **⚡ High Performance:** Built with Vite for instant loading and 100/100 Lighthouse score.
- **📱 Fully Responsive:** Optimized for Mobile, Tablet, and Desktop.

---

## 🛠️ Tech Stack

- **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

The project follows a **Data-Driven** architecture. Content is separated from logic.

```bash
portfolio-v2/
├── public/
│   └── assets/             # Static files (Images, PDFs)
│       ├── documents/      # Certificates & CV
│       └── images/         # Project screenshots & Profile pic
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Skills, Projects, etc.
│   │   └── ui/             # Reusable UI components (SectionTitle, etc.)
│   ├── data/               # THE BRAIN (Edit content here)
│   │   ├── certifications.js
│   │   ├── experiences.js
│   │   ├── profile.js      # Global info (Name, Bio, Social links)
│   │   ├── projects.js
│   │   └── skills.js
│   └── App.jsx
└── tailwind.config.js
````

-----

## 🏁 Getting Started

### 1\. Clone the repository

```bash
git clone [https://github.com/ArmelKI/portfolio-armel.git](https://github.com/ArmelKI/portfolio-armel.git)
cd portfolio-armel
```

### 2\. Install dependencies

```bash
npm install
```

### 3\. Run the development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

-----

## 📝 Customization

You don't need to touch the React code to update your info. Just edit the files in **`src/data/`**:

  - **Update Personal Info:** Edit `src/data/profile.js`
  - **Add a Project:** Add an entry to `src/data/projects.js`
  - **Update Skills:** Modify `src/data/skills.js`

### Adding Images or PDFs

1.  Place your file in `public/assets/...`
2.  Reference it in your data files using the path string: `"/assets/images/my-file.jpg"`

-----

## 🚢 Deployment

This project is optimized for **Vercel**.

1.  Push your code to GitHub.
2.  Import the repo on Vercel.
3.  Click **Deploy**.
4.  Done\! 🚀

-----

## 👤 Author

**Armel Stéphane Novak KI** *Engineering Student @ Télécom Nancy | CEO Axiane Agency*

  - 💼 [LinkedIn](www.linkedin.com/in/armel-stephane-novak-ki)
  - 🐙 [GitHub](https://github.com/ArmelKI)
  - 📧 [Email](mailto:kiarmelstephanenovak@gmail.com)

-----

*Made with ❤️ and ☕ in Nancy, France.*

````