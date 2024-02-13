/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Raleway :['Protest Guerrilla','sans-serif'],
        Strike :[ 'Protest Strike', 'sans-serif'],
        Noto:['Noto Serif', 'serif'],
        Roboto :['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

