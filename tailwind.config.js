/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",
        accent: "#4a90d9",
        light: "#f5f5f5",
        fisherLogoRed: "#BF1F29",
        fisherRed: "#F10507",
        fisherLogoBlue: "#018FFE",
        fisherBlue: "#1475BC",
        blackButtonBg: "#000000",
        hoverButtonBg: "#FFFFFF",

      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
