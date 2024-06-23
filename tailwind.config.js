/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'selector',
    theme: {
      extend: {
        screens: {
          "other": {'min': '340px', 'max': '2100px'}
        },
        colors: {
          "darkTh": "#1E293B",
          "darkW": "#FFFDFA"
        }
      },
    },
    plugins: [],
  }