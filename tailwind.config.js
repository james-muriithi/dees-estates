const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#0F298B",
        secondary: "#2549D3",
        white: "#FAFAFA",
        light: "#FFFFFF",
      }
    }
  },
  plugins: [],
}