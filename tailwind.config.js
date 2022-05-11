const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      '2xs': '375px',
      'xs': '425px',
      'sm': '695px',
      'sm2': '695px',
      '2md': '960px',
    },
    extend: {
      colors: {
        'pink-pastel-100': '#ffeaea',
        'pink-pastel-200': '#ffe1e1',
        'pink-pastel-300': '#ffd8d8',
        'pink-pastel-400': '#ffc3c3',
        'pink-pastel-500': '#ffb0b0'
      }
    },
  },
  plugins: [],
}