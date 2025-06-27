/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kokelight: {
          primary: '#FFA600',
          secondary: '#FFD54F',
          dark: '#000000',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 5px rgba(255, 166, 0, 0.5), 0 0 10px rgba(255, 166, 0, 0.5), 0 0 15px rgba(255, 166, 0, 0.5)',
          },
          '100%': { 
            textShadow: '0 0 10px rgba(255, 166, 0, 0.8), 0 0 20px rgba(255, 166, 0, 0.8), 0 0 30px rgba(255, 166, 0, 0.8)',
          },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
    },
  },
  plugins: [],
};
