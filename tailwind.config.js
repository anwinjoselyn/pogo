module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      openSans: ['Red Hat Mono', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      blueBlack: '#003342',
      orange: {
        bright: '#FF4D00',
        muted: '#F57636',
      },
      red: {
        primary: '#FF2929',
        bg: '#FF4D000D',
      },
      gray: {
        lightest: '#E6EDF0',
        light: '#E8E9EB',
        dark: '#AEBCC2',
        darkest: '#4C5760',
        1: '#E5E5E5',
        2: '#D2D2D2',
        3: '#CCCCCC',
        4: '#99A1A7',
        5: '#808080',
        6: '',
      },
      blue: {
        lightest: '#B5DFFF',
        light: '#4AA7ED',
        muted: '#139ED1',
        dark: '#147BC9',
        darkest: '#0280A6',
      },
      background: {
        dark: '#AECAD4',
        light: '#F7FDFF',
        darker: '#2D3039',
        darkest: '#1E2028',
      },
      green: {
        light: '#BFFFDA',
        bright: '#15C25E',
        dark: '#209652',
      },
      yellow: '#FFFF0D',
      black: {
        pure: '#000000',
        1: '#252525',
        light: '#4C5760',
        2: '#333333',
      },
      white: '#FFFFFF',
    },
    boxShadow: {
      header: '0px 2px 3px rgba(0, 0, 0, 0.1)',
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
