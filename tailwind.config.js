const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1024px"
       }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography, forms],
}
