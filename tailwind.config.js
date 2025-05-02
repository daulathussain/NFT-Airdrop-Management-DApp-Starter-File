/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14101A", // Background color
        secondary: {
          500: "#D946EF", // Fuchsia-500
          600: "#C026D3", // Fuchsia-600
          700: "#A21CAF", // Fuchsia-700
        },
        purple: {
          600: "#9333EA",
          700: "#7E22CE",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #D946EF, #9333EA)",
        "gradient-primary-hover": "linear-gradient(to right, #C026D3, #7E22CE)",
      },
    },
  },
  plugins: [],
};
