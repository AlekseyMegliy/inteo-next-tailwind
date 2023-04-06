/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.2rem",
        md: "2.5rem",
        xl: "7rem",
      },
    },
    screens: {
      xl: "1440px",
      lg: "1200px",
      md: "768px",
      sm: "500px",
    },
    extend: {
      colors: { brown: "#996830", dark: "#2C2C2C", beige: "#E6D8CC" },
    },
    fontFamily: {
      outfit: ["Outfit", "Arial", "sans-serif"],
      playfairDisplay: [
        "Playfair Display",
        {
          fontFeatureSettings: '"pnum", "lnum", "liga"',
        },
      ],
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
