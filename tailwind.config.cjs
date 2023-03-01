/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(222, 124, 0)',
        gray: '#E3E3E3',
        dark: '#1D1E22',
        medium: 'rgb(37,37,43)',
        light: 'rgb(78, 78, 78)'
      }
    }
  },
  plugins: []
}

module.exports = config
