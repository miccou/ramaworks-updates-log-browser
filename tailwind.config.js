const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      stone: colors.stone,
      amber: colors.amber,
      emerald: colors.emerald
    },
  },
  plugins: [],
}