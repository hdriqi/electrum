module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production' ? true : false,
    content: ["./components/**/*.js", "./pages/**/*.js"],
  },
  corePlugins: {
    fontFamily: false
  },
  theme: {
    extend: {
      colors: {
        'primary-navy': '#1C2E5C',
        'primary-green': '#2FDE9B'
      }
    },
  },
  variants: {},
  plugins: [],
}