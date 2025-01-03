module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure Tailwind scans your files
  theme: {
    extend: {
      keyframes: {
        disappearDownSlow: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(30px)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        disappearDownSlow: 'disappearDownSlow 1.5s ease-in-out forwards', // 1.5s for text
        fadeOut: 'fadeOut 1s ease-in-out forwards', // 1s for arrow
      },
    },
  },
  plugins: [],
};
