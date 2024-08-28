/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*.{html,js}"],
theme: {
    extend: {
  spacing:{"15":"4rem"},
  fontFamily:{'inter':"Inter"},
    colors: {
       "ige":"#ffff00",
      "tidak":"red"
      },
},
  },
  plugins: [],
};

