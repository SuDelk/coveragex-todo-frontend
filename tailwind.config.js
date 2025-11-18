/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // Include all React files
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 10px #6366f1',
      },
      minHeight: {
        taskList: '20rem', // ensures 5 tasks space
      },
    },
  },
  plugins: [],
};
