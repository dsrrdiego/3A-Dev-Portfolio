/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Space Mono", "Pixelade", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
