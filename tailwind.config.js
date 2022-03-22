module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          900: '#101828',
        },
      },
      backgroundImage: {
        'nature-light': "url('/img/Splines1.png')",
        'nature-dark': "url('/img/Splines7.png')",
        'logo-light':
          "url('/img/PHILIP OFEI 🚀 (1).png')",
        'logo-dark':
          "url('/img/PHILIP OFEI 🚀 (2).png')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
