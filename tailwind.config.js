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
        c1:'#1e293b',
        c2:'#0f172a',
        c3:'#94a3b8ff',
        c4:'#7dd3fc1a',
        c5:'#94a3b81a',
        b1:'#64748b4d',
  
      },
      screens:{
        'xs':{'max':'639px'},
      }
    },
  },
  plugins: [],
  darkMode:"class",
}

