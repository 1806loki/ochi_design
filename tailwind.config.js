/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      founders: ["FoundersGrotesk", "sans-serif"],
      'founders-bold': ["FoundersGrotesk-Bold", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
