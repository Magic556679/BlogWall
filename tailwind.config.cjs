/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '-2px 2px 0 0 rgba(0, 0, 0, 1)',
        '4xl': '-8px 8px 0 0 #00040029',
      }
    }
  },
  plugins: []
}
