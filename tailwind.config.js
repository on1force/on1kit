/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        pepereum: {

          "primary": "#CBE4DE",

          "secondary": "#0E8388",

          "accent": "#2E4F4F",

          "neutral": "#CBE4DE",

          "base-100": "#2C3333",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  }
};