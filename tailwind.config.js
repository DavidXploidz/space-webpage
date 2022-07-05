/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Azul': '#0B0D17',
        'GrisAzul': '#D0D6F9',
        'Stroke' : '#979797'
      },
      
    },
  },
  plugins: [],
}
