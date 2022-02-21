module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#7F1D1D',
        secondary: '#F3A78F',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}