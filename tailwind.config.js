/** @type {import('tailwindcss').Config} */
/** @tpye {import('rippleui')}.Config} */

module.exports = {
  rippleui: {
    themes: [
      {
        themeName: 'light',
        colorScheme: 'light',
        colors: {
          primary: '#1D402C',
          secondary: '#3d3d3d',
          accent: 'D7BB84',
          backgroundPrimary: '#ffffff',
        },
      },
      {
        themeName: 'dark',
        colorScheme: 'dark',
        colors: {
          primary: '#D7BB84',
          secondary: '#E9ECEA',
          backgroundPrimary: '#1a1a1a',
        },
      },
    ],
  },
  content: ['./app/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1D402C',
        secondary: '#3d3d3d',
        accent: '#D7BB84',
        backgroundPrimary: '#ffffff',
        themeGrey: '#E9ECEA',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1920px',
    },
  },
  plugins: [require('rippleui')],
}
