module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#e0c100",
      },
    },
    fontFamily: {
      "sans": "Rubik"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
