/** @type {import('tailwindcss').Config} */
/** @tpye {import('rippleui')}.Config} */

module.exports = {
  rippleui: {
    themes: [
      {
        themeName: 'light',
        colorScheme: 'light',
        colors: {
          primary: '#D6C000',
          secondary: '#FFBB70',
          accent: '#FFEC9E',
          backgroundPrimary: '#FFFBDA',
          backgroundSecondary: '#FDFDFD',
          black: '#000000',
          textPrimary: '#000000',
          textSecondary: '#6e6e6e',
        },
      },
      {
        themeName: 'dark',
        colorScheme: 'dark',
        colors: {
          primary: '#B6A162',
          secondary: '#FDFEC9',
          accent: '#D1CDC7',
          backgroundPrimary: '#1a1a1a',
          backgroundSecondary: '#B5B49C',
          textPrimary: '#FFFFFF',
          textSecondary: '#969696',
        },
      },
    ],
  },
  content: ['./app/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#D0824B',
        secondary: '#FFBB70',
        accent: '#FFEC9E',
        backgroundPrimary: '#FFFBDA',
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
