/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#071d18',
        forest: '#0d332b',
        moss: '#265a49',
        acid: '#d9ff55',
        copper: '#d97845',
        clay: '#b85236',
        cream: '#f3efe4',
        paper: '#f8f5ed',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Archivo', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        label: '.18em',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
