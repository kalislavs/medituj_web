/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: "1080px",
    },
    colors: {
      primary: "#143A52",
      secondary: "#6E828A",
      danger: "#E3EFF3",
    },
    textColor: {
      primary: "#143A52",
      secondary: "#6E828A",
      danger: "#E3EFF3",
    },
    dropShadow: {
      custom1: "0 5px 10px rgb(0,0,0, 0.5)",
      custom: "0 2px 5px rgb(128,128,128, 0.5)",
    },
    lineHeight: {
      "extra-loose": "2.5",
      12: "3rem",
    },
  },
  plugins: [],
};
