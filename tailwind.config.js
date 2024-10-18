/** @type {import('tailwindcss').Config} */
// theme: "#744fef",
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: "#05A081",
        dark_bg:"#242424",
        dark_card: ""
      },
      boxShadow: {
        full: "0 0 4px #000",
      },
      // fontFamily:{
      //   font-family
      // }
    },
  },
  plugins: [],
};
