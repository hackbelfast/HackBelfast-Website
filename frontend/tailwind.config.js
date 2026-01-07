/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hack-yellow': '#FFD93D',
        'hack-orange': '#FF8C42',
        'hack-red': '#FF5E5B',
        'hack-pink': '#FF006E',
        'hack-purple': '#8B5CF6',
        'hack-deep-purple': '#6D28D9',
      },
      backgroundImage: {
        'hack-gradient': 'linear-gradient(135deg, #FFD93D 0%, #FF8C42 25%, #FF5E5B 50%, #FF006E 75%, #8B5CF6 100%)',
        'hack-gradient-reverse': 'linear-gradient(135deg, #8B5CF6 0%, #FF006E 25%, #FF5E5B 50%, #FF8C42 75%, #FFD93D 100%)',
      }
    },
  },
  plugins: [],
}