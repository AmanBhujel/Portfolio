/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mooli: ['Mooli', 'sans-serif'],
        sans: ['Open Sans', 'sans'],
        montserrat: ['Montserrat', 'sans'],
        cursive:['Cedarville Cursive','sans'],
        josefin:['Josefin Sans','sans'],
      },
      height: {
        '35rem': '35rem',
        '42rem': '42rem',
        '27rem': '27rem'
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
