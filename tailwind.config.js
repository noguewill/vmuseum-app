module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        widestxl: "0.2rem",
      },
      colors: {
        etherealGold: "#946a00",
        natureGreen: "#319900",
        natureSoftGreen: "#58993a",
        natureHardGreen: "#274d16",
        dreamPink: "#AB5B5C",
        dreamYellow: "#FFA600",
        dreamPurple: "#4600A4",
        dreamLightPurple: "#C888BF",
      },
      fontSize: {
        xxxx: "20rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
