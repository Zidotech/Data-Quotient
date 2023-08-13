/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark: "hsl(208, 11%, 30%)",
        Blue: "hsl(211, 53%, 56%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        shadow: ["Shadows Into Light", "cursive"],
        great: ["Great Vibes", "cursive"],
        amatic: ["Amatic SC", "cursive"],
        kelly: ["Kelly Slab", "cursive"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1081px",
      xl: "1700px",
    },
  },
  plugins: [],
};
