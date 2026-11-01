/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5433EB",
        accent: "#5433EB",
        "lavender-bg": "#f5f0ff",
        "lavender": "#e6e0ff"
      },
      fontFamily: {
        sans: ["var(--sans)"],
        heading: ["var(--heading)"],
      },
    },
  },
  plugins: [],
};
