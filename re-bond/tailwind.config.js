/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      green: colors.green,
      'baseBlue':'#2859C5',
      'level1':'#3EC60F',
      'level2':'#0EBAE0',
      'level3':'#2859C5',
      'level4':'#A42DB8',
      'level5':'#DD041E',
      'form':'#F5F5F5',
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradientOrange':'linear-gradient(to bottom,rgba(204, 177, 61, 0.4),rgba(198, 52, 52, 1))',
        'gradientViolet':'linear-gradient(to bottom,rgba(190, 62, 184, 0.4),rgba(88, 54, 226, 1))',
        'gradientGreen':'linear-gradient(to bottom,rgba(200, 228, 41, 0.5),rgba(33, 173, 89, 1)',
        'gradientSky':'linear-gradient(to bottom,rgba(76, 230, 219, 0.5),rgba(0, 155, 221, 1)',
        'gradientblue':'linear-gradient(to bottom,rgba(31, 65, 184, 0.6),rgba(19, 33, 166, 1)'
      })
    },
  },
  plugins: [
    require("tailwindcss-inner-border"),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}

