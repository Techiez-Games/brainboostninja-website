/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};