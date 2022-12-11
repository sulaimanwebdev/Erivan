/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-main': '#101113',
        'dark2-main': '#1E2024',
        'content-main': '#C4C5C7',
        'gray-main': '#6A6C71',
        'form-main': '#232427',
        'placeholder-main': '#50545E',
        'placeholder-main': '#50545E',
      },

      screens:{
        sm4: '376px',
        sm3: '471px',
        sm2: '500px',
        md2: '790px',
        lg4: '944px',
        lg3: '1210px',
        lg2: '1254px',
      }
    },
  },
  plugins: [],
}
