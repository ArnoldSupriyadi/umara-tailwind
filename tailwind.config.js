/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}", "./public/**/*.{html,js}"],
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
         },
         palette1: {
           a: '#4C3D19',
           b: '#354024',
           c: '#889063',
           d: '#CFBB99',
           e: '#E5D7C4'
         },
         palette2: {
           a: '#896F36',
           b: '#973B00',
           c: '#CB9123',
           d: '#FFF4DE',
           e: '#572E12'
         },
         body: {
          a: '#F5F4F4',
         },
         umara: {
          a: '#886F35',
          b: '#FFF9F9',
          c: '#D3902A',
          d: '#1F4F35',
         },
         umk: {
          a: '#2F2F2F',
          b: '#F5F4F4',
          c: '#D3902A',
          d: '#1F4F35',
         },
         
       },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'playfair': ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
}

