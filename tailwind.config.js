/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'tooltip-fade': 'tooltipFade 2s ease-out forwards',
      },
      keyframes: {
        tooltipFade: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px) translateX(-50%)'
          },
          '10%': { 
            opacity: '1',
            transform: 'translateY(0) translateX(-50%)'
          },
          '85%': { 
            opacity: '1',
            transform: 'translateY(0) translateX(-50%)'
          },
          '100%': { 
            opacity: '0',
            transform: 'translateY(0) translateX(-50%)'
          }
        }
      }
    },
  },
  plugins: [],
}