/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lucky: ["'Luckiest Guy'", "cursive"],
        fredoka: ["Fredoka", "sans-serif"], 
      },
      colors: {
        "app-bg": "var(--background-col)",
        "app-surface": "var(--surface-col)",
        "app-text": "var(--text-col)",
        accent: "var(--accent-col)",
        brand: "var(--primary-col)",
        highlight: "var(--highlight-col)",
      },
    },
  },
  plugins: [],
}