/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      
    },

    extend: {
      fontFamily: {
        DMsans: ["DM Sans", 'sans-serif']
      },

      width: {
        200: '525px'
      },

      colors: {
        'gray': '#9CA3AF',
        'rose': '#BE123C',
        'footerColor': '#BE123C'
      }
    },
  },
  plugins: [],
}

