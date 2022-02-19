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
        accent1: '#F0BB62',
        accent2: '#F4EEA9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}