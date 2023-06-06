/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/** @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig */

/** @type {TailwindConfig} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      height: {
        232: "232px",
        248: "248px",
        264: "264px",
        350: "350px",
      },
      width: {
        232: "232px",
        248: "248px",
        264: "264px",
        350: "350px",
      },
      colors: {
        primary: "black",
        white: "#fff",
        details: "#F1E7CD",
        arabic: "#CD4C15",
        robusta: "#758266",
      },
      borderRadius: {
        input: "0.625rem",
      },
      borderColor: {
        DEFAULT: "#E7E3D9",
      },
      textColor: {
        black: "black",
        primary: "#32332E",
        light: "#FBFAF8",
        secondary: "black",
        grey: "#44403C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
