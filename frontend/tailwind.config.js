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
      logo: "Limelight",
    },
    extend: {
      height: {
        232: "232px",
        248: "248px",
        264: "264px",
        320: "320px",
        350: "350px",
      },
      width: {
        232: "232px",
        248: "248px",
        264: "264px",
        320: "320px",
        350: "350px",
      },
      colors: {
        primary: "#8E9882",
        secondary: "#C69F66",
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
      borderWidth: {
        10: "10px",
      },
      textColor: {
        light: "#FBFAF8",
        title: "#32332E",
        paragraph: "#615F5B",
        footer: "#8A8370",
        grey: "#44403C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
