/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      'bg-color': '#030917',
      // 060D0D for luxury black
      //space-needle black bg - #0E0E0E
      'brand-yellow': 'amber-400',
      // muted yellow - 
      'brand-orange': '#f58c1f',
      // sherwin williams suggested colors/secondary
      'sensible-gray': 'b6b5ab',
      // space-needle gray - #404856
      'andiron': '#424036',
      // complementary color
      'comp-blue': 'blue-700'},
      fontFamily: {
        prose: ['source sans pro', 'sans-serif'],
        sans: ['belleza', 'sans-serif'],
        serif: ['Libre Caslon Display', 'serif']
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
