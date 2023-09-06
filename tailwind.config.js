/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        Bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateY(2%)' },
          '20%, 40%, 60%, 80%': { transform: 'translateY(-2%)' },
        },
      },
      animation: {
        'Bounce': 'Bounce 17s linear infinite alternate',
      }
      
    },
  },
  plugins: [],
}

