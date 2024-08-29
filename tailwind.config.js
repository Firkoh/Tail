/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*.{html,js}"],
theme: {
    extend: {
  spacing:{"15":"4rem"},
  fontFamily:{'inter':"Inter"},
    colors: {
       "primary":"#ffff00",
      "secondary":"red"
      },
outlineWidth: {
        3: '3px',
      }
},
  },
  plugins: [],
};

