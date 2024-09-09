/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cinzel : ['Cinzel'],
        Inter:['Inter'],
        Raleway:['Raleway'],
    },
    
    },
    letterSpacing: {
      widest: '.30em',
      }
  },
  plugins: [
    require('daisyui'),
  ],
}