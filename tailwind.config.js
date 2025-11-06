/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      terminalBg: '#000000',
      terminalFg: '#00FF66',
      terminalFgDim: '#33CC66',
      terminalAlert: '#FF0033',
      terminalWarning: '#FFFF66',
      terminalAccent: '#00CC44',
      black: '#000000',
      white: '#FFFFFF',
    },
    fontFamily: {
      mono: ['"VT323"', '"Share Tech Mono"', 'Courier New', 'monospace'],
    },
    extend: {
      keyframes: {
        blink: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '0.99' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
      },
      animation: {
        blink: 'blink 1s infinite step-start',
        flicker: 'flicker 2s infinite',
      },
    },
  },
  plugins: [],
};
