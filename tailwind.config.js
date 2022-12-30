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
        sm10: '368px',
        sm9: '419px',
        sm8: '626px',
        sm7: '600px',
        sm6: '424px',
        sm5: '533px',
        sm4: '376px',
        sm3: '471px',
        sm2: '500px',
        md5: '986px',
        md4: '846px',
        md3: '730px',
        md2: '790px',
        lg10: '1309px',
        lg9: '1226px',
        lg8: '1284px',
        lg7: '1188px',
        lg6: '1294px',
        lg5: '1065px',
        lg4: '944px',
        lg3: '1210px',
        lg2: '1254px',
      }
    },
  },
  plugins: [],
}
