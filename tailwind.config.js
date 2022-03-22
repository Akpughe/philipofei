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
        'nature-light': "url('/img/Splines1.webp')",
        'nature-dark': "url('/img/Splines7.webp')",
        'logo-light': "url('/img/PHILIP-OFEI-1.webp')",
        'logo-dark': "url('/img/PHILIP-OFEI-2.webp')",
        'menu-light': "url('/img/MENU-ICON-1.webp')",
        'menu-dark': "url('/img/MENU-ICON.webp')",
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
