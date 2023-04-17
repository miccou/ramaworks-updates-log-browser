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
      black: colors.stone,
      white: colors.amber,
      gray: colors.emerald
    },
  },
  plugins: [],
}