/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "15": "4rem",
      },
      fontFamily: {
        'inter': "Inter",
      },
      colors: {
        "primary": "#ffff00",
        "secondary": "red",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'goyang': 'goyang 2500ms ease-in-out infinite',
      },
      keyframes: {
        'goyang': {
          '0%,100%': { transform:'rotate(-4deg)' },
          '50%': { transform:'rotate(4deg)' },
        },
      },
      outlineWidth: {
        '3': '3px',
      },
      ringWidth: {
        '3': '3px',
      },
      margin: {
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};