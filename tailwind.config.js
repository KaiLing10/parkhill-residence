/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'black': '0 2px 2px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'title': ['Rajdhani', 'sans-serif'],
        'content': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

