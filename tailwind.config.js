/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark: "hsl(0, 0%, 81%)",
        Blue: "hsl(205, 82%, 47%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        shadow: ["Shadows Into Light", "cursive"],
        great: ["Great Vibes", "cursive"],
        amatic: ["Amatic SC", "cursive"],
        kelly: ["Kelly Slab", "cursive"],
      },
    },
  },
  plugins: [],
};
