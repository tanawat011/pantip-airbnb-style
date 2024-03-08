/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        base: '940px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      colors: {
        'primary': '#3c3963',
        'secondary': '#353156',
        'tertiary': '#2d2a49',
        'accent': '#44416f',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

