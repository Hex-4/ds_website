module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
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
