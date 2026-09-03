export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breatheGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1) translate(-50%, -50%)' },
          '50%': { opacity: '0.6', transform: 'scale(1.15) translate(-50%, -50%)' },
        },
        floatDash: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideRight: {
          '0%, 100%': { transform: 'translateX(-4px)', opacity: '0.6' },
          '50%': { transform: 'translateX(4px)', opacity: '1' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'breathe-glow': 'breatheGlow 6s ease-in-out infinite',
        'float-dash': 'floatDash 6s ease-in-out infinite',
        'slide-right': 'slideRight 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}