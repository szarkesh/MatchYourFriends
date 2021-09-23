module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['PT Sans']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        lightest: '#F4FBFF',
        light: '#ADD0E0',
        DEFAULT: '#F4FBFF',
        dark: '#47819B',
        darkest: '#19323C'
      },
      blaze: {
        light: '#F5A63C',
        DEFAULT: '#FF7637',
        dark: '#B6370E',
      },

      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#F4FBFF',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
