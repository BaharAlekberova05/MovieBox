/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    container: {
        padding : '0 100px',
        center : true,
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
        'footerColor': '#BE123C',
        'button' : '#BE123C', 
        'button-bg' : '#960E2B'
      }
    },
  },
  plugins: [],
}

