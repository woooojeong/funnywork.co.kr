/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          600: '#1B2B4D',
          700: '#162342',
          800: '#111C36',
          900: '#0C1526',
        },
      },
    },
  },
  plugins: [],
} 