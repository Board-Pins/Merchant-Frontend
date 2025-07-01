/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6161FF',
          50: '#F0F0FF',
          100: '#E0E0FF',
          500: '#6161FF',
          600: '#5050E6',
          700: '#4040CC',
        }
      }
    },
  },
  plugins: [],
}