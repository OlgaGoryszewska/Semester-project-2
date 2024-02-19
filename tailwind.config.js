/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "*.{html,js}"],
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
          300: "#D9D9D9",
        },
        black: "#363636",
      },
      fontFamily: {
        raleway: ["Raleway"],
        poppins: ["Poppins"],
        roboto: ["Roboto Slab"],
      },
      maxWidth: {
        "view-port": "784px",
      },
      width: {
        41: "170px",
        42: "180px",
      },
      height: {
        73: "180px",
        74: "303px",
      },
    },
  },
  plugins: [],
};
