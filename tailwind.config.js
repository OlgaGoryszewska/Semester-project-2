/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#324C2A",
        secondary: {
          100: "#FFB991",
          200: "#FF5C00",
        },
        tertiary: "#756A6D",
        neutral: {
          100: "#F0F0F0",
          200: "#E2E0E0",
        },
        black: "#363636",
      },
      fontFamily: {
        raleway: ["Raleway"],
        poppins: ["Poppins"],
        roboto: ["Roboto Slab"],
      },
    },
  },
  plugins: [],
};
