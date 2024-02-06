/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#324C2A",
      secondary: "#FF5C00",
      secondary_light: "#FFB991",
      tertiary: "#756A6D",
      neutral: {
        100: "#F0F0F0",
        200: "#E2E0E0",
      },
    },
    extend: {},
  },
  plugins: [],
};
