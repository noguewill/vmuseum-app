module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        widestxl: "0.2rem",
      },
      colors: {
        dirtGold: "#946a00",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
