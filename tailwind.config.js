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
        afrealblue: {
          100: '#344054',
        },
        logocolor:{
          100: '#344054'
        }
      },
      backgroundImage: {
        'nature-light': "url('/img/Splines1.webp')",
        'nature-dark': "url('/img/Splines7.webp')",
        'logo-light': "url('/img/PHILIP-OFEI-1.webp')",
        'logo-dark': "url('/img/PHILIP-OFEI-2.webp')",
        'menu-light': "url('/img/MENU-ICON-1.webp')",
        'menu-dark': "url('/img/MENU-ICON.webp')",
        'dm': "url('https://res.cloudinary.com/davak/image/upload/v1649415276/philip/golight_zmco4u.svg')",
        'lm': "url('https://res.cloudinary.com/davak/image/upload/v1649415276/philip/godark_qux7aa.svg')",
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
