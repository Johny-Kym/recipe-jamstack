module.exports = {
  purge: [
    "./pages/index.js",
    "./pages/about.js",
    "./pages/services.js",
    "./components/Header.js",
    "./components/Recipe.js",
    "./pages/recipes/[slug].js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Roboto"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
