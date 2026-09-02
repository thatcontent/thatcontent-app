/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: { primary: '#07070A', secondary: '#0D0D12' },
        accent: { violet: '#7C3AED', blue: '#2563EB' },
        text: { primary: '#FFFFFF', secondary: '#A1A1AA' },
        glass: { bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.12)' }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}