/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
 
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
  daisyui: {
    themes: ["light"], // Set the desired theme here (light or dark)
  },
}