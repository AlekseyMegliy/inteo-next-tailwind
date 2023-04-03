/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: "1600px",
      lg: "1200px",
      md: "991px",
      sm: "650px",
    },
    extend: {
      colors: { brown: "#996830", dark: "#2C2C2C", beige: "#E6D8CC" },
    },
    fontFamily: {
      outfit: ["Outfit", "Arial", "sans-serif"],
      playfairDisplay: ["Playfair Display", "Times New Roman", "serif"],
      playfairNumbers: [
        "Playfair Display",
        {
          fontFeatureSettings: '"pnum", "lnum", "liga"',
        },
      ],
    },
  },
  plugins: [],
};
