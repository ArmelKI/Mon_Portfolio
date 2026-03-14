/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        card: "#111111",
        primary: "#3b82f6", // Bleu tech
        accent: "#8b5cf6", // Violet Data/IA
      }
    },
  },
  plugins: [],
}