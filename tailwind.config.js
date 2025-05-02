/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 16px 0px rgba(0, 0, 0, 0.1)',
        'gray': '0 4px 6px rgba(128, 128, 128, 0.5)',
        'custom2':' 0px 0px 9.34px 0px #C3C3C340',
        'custom3': '0px 4px 16px 0px rgba(0, 0, 0, 0.1)',

      },
      filter: {
        'blue-500': 'invert(32%) sepia(92%) saturate(6203%) hue-rotate(183deg) brightness(96%) contrast(104%)',
      },
      colors: {
        primary: '#6161FF',
        dark:"#26222B"
      },
      fontWeight:{
        light:100,
      }
    },
  },
  variants: {
    filter: ['responsive', 'hover', 'focus'],
  },

 
}
