/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'color-primary': '#01051e',
        'color-primary-light': '020726',
        'color-primary-dark': '#010417',
        'color-secondary': '#ff7d3b',
        'color-gray': '#333',
        'color-white': '#fff',
        'color-blod': '#A427DF',
        'nav-bg': '#102C57'
      },
    },
    fontFamily:{
      'body': ['Roboto', 'sans-serif'],
      },
    container:{
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '50px',
      }
    },
  },
  plugins: [],
}

