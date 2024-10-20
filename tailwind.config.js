/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2c2838",
        secondary: "#424c6d",
        accent: "#95e2b5",
        light: "#ebffe5",
        dark: "#232422",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica"],
        display: ["Righteous", "Helvetica"],
      },
    },
  },
  plugins: [],
};
