module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
        display: ['DM Serif Display', 'serif'],
        accent: ['Berkshire Swash', 'serif'],
      },
      colors: {
        primary: '#7F1D1D',
        secondary: '#F3A78F',
      },
      backgroundImage: {
        mi2023bg: "url('../static/images/mi2023-headerbg.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}