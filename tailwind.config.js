/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        modal: "#6B7280BF",
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        fade: "fade 3s ease forwards",
      },
    },
    screens: {
      tl: "375px",
      lt: "744px",
      dt: "1440px",
    },
  },
  plugins: [],
};