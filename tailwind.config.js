/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
      backgroundImage: {
        "hero-img": "url('./assets/banner.jpg')",
        "her-dark": "url('./assets/bannerdark.jpg')",
      },
    },
    screens: {
      xs: "240px",
      sm: "360px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1200px",
      "3xl": "1400px",
    },
  },
  plugins: [],
};
