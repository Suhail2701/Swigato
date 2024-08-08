/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        customGray: '#100b22', // Define your custom color
        customWhite: '#E0E0E0',
        customBlue: '#2b1e56',
        customBlue2: '#50528a',
        customBlue3: '#b8b2c9',
  
      },
      screens:{
        'xs':{'max':'639px'},
      }
    },
  },
  plugins: [],
  darkMode:"class",
}

