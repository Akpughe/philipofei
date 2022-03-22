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
        'logo-light': "url('/img/PHILIP OFEI 🚀 (1).png')",
        'logo-dark': "url('/img/PHILIP OFEI 🚀 (2).png')",
        'menu-light': "url('/img/MENU ICON (1).png')",
        'menu-dark': "url('/img/MENU ICON.png')",
        'lm': "url('/img/godark.svg')",
        'dm': "url('/img/golight.svg')",
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
