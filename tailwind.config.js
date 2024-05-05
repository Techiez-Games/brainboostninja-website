/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        main: "3.125rem",
      },
      colors: {
        brand: {
          zircon: "#F8F9FF",
          alto: "#D8D8D8",
          corn: "#F8D57E",
          persimmon: "#FF6250",
          pink: "#FF5C7C",
          lightpink: "#FFEBEF",
          gold: "#E8B485",
          dark1: "#324253",
          dark2: "#232C38",
          dark3: "#010101",
          dark4: "#2D2D2D",
          outline: "#FFDCBC",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      // fontSize: {
      //   xs: [".75rem", "1rem"], // 12px font size with 16px line height
      //   sm: [".875rem", "1.25rem"], // 14px font size with 20px line height
      //   base: ["1rem", "1.5rem"], // 16px font size with 24px line height
      //   lg: ["1.125rem", "1.75rem"], // 18px font size with 28px line height
      //   xl: ["1.25rem", "1.75rem"], // 20px font size with 28px line height
      //   "2xl": ["1.5rem", "2rem"], // 24px font size with 32px line height
      // },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
}
