/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#3D717E',
          200: '#10475E',
          300: '#0B2839'
        },
        amber : {
          100: '#D68631',
          200: '#964405',
          300: '#5A3211'
        }
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}

