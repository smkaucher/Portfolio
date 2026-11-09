/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      brown: "rgb(var(--c-brown) / <alpha-value>)",
      lightBrown: "rgb(var(--c-lightBrown) / <alpha-value>)",
      darkBrown: "rgb(var(--c-darkBrown) / <alpha-value>)",
      black: "rgb(var(--c-black) / <alpha-value>)",
      white: "rgb(var(--c-white) / <alpha-value>)",
      cyan: "rgb(var(--c-cyan) / <alpha-value>)",
      lightCyan: "rgb(var(--c-lightCyan) / <alpha-value>)",
      darkCyan: "rgb(var(--c-darkCyan) / <alpha-value>)",
      orange: "rgb(var(--c-orange) / <alpha-value>)",
      lightOrange: "rgb(var(--c-lightOrange) / <alpha-value>)",
      darkOrange: "rgb(var(--c-darkOrange) / <alpha-value>)",
      grey: "rgb(var(--c-grey) / <alpha-value>)",
      lightGrey: "rgb(var(--c-lightGrey) / <alpha-value>)",
      darkGrey: "rgb(var(--c-darkGrey) / <alpha-value>)",
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgb(var(--c-cyan) / 0.3)",
        cyanBigShadow: "10px 10px 1000px 500px rgb(var(--c-cyan) / 0.18)",
        cyanMediumShadow: "10px 10px 200px 150px rgb(var(--c-cyan) / 0.3)",
        orangeBigShadow: "10px 10px 10000px 500px rgb(var(--c-orange) / 0.18)",
        orangeMediumShadow: "10px 10px 2000px 150px rgb(var(--c-orange) / 0.3)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
