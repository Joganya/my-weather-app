/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [   
     "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'cld-img': "url('/src/assets/Cloud-background.png')",
        
        
      },
      fontFamily: {
        'raleway': ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'regal-black': '#1E213A',
        'regal-blue':'#6E707A',
        'regal-white':'#E7E7EB',
      },
      boxShadow: {
        '3xl': '0 4px 4px 0px rgba(0,0,0,0.25)',
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 2rem',
      },
     
    },
  },
  plugins: [],
}
