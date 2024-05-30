/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
   
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#02C39A',
      'secondary': '#04364A',
      'contrast': '#00A896',
      'light': '#ffffff'
    },
  },
  plugins: [],
}