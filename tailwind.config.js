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
        'lpink' : '#f2b3ca',
        'dpink' : '#a67b8a',
        'dblack' : '#262423',
        'dgray' : '#8c8c8c',
        'npink' : '#ff85ae'
      },

      fontFamily: {
        'blond' : 'BLOND',
        'igor' : 'IGOR',
        'ppthin' : 'PP-NEUE-MONTREAL-THIN',
        'ppmed' : 'PP-NEUE-MONTREAL-MEDIUM',
        'ppbook' : 'PP-NEUE-MONTREAL-BOOK',
        'ppbold' : 'PP-NEUE-MONTREAL-BOLD',
        'courier' : 'COURIER'
      }
    },
  },
  plugins: [],
}

