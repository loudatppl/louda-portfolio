/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dwhite' : '#f9f9f9',
        'dblack' : '#2d2e32',
        'lgray' : '#d3d3d3',
        'dgray' : '#63666a',
        'dgreen' : '#49986b'

      },

      fontFamily: {
        'blond' : 'BLOND',
        'rroboto' : 'ROBOTO-REGULAR',
        'broboto' : 'ROBOTO-BOLD',
        'robotob' : 'ROBOTO-BLACK'
      }
    },
  },
  plugins: [],
}

