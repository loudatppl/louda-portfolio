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
        'beige' : '#F8F2E9',
        'sand' : '#E4DCCB',
        'taupe' : '#A89985',
        'mocha' : '#7E685C',
        'dbrown' : '#4F3B31',
        'dblack' : '#1a1a1a'
      },

      fontFamily: {
        'ppbook' : 'PP-NEUE-MONTREAL-BOOK',
        'ppbold' : 'PP-NEUE-MONTREAL-BOLD',
        'blond' : 'BLOND',
        'oswald' : 'OSWALD',
        'open' : 'OPEN-SANS'
      }
    },
  },
  plugins: [],
}

