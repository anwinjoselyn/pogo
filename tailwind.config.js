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
      blueGreen: {
        lightest: '#f2f9f9',
        light1: '#d9eeee',
        light2: '#c0e3e3',
        light3: '#a6d8d8',
        light4: '#8dcdcd',
        light5: '#73c2c2',
        light6: '#5ab7b7',
        mid: '#48a5a5',
        mid1: '#48a5a5',
        mid2: '#327272',
        dark: '#275959',
        dark1: '#1c3f3f',
        darker: '#112626',
        darkest: '#060d0d',
      },
      newBlue: {
        lightest: '#edf9fe',
        light1: '#cbeefd',
        light2: '#a8e3fb',
        light3: '#85d8fa',
        light4: '#62cdf8',
        light5: '#3fc2f7',
        light6: '#1cb7f6',
        mid: '#09a5e3',
        mid1: '#088bc0',
        mid2: '#07729d',
        dark: '#05597a',
        dark1: '#043f57',
        darker: '#022634',
        darkest: '#010d11',
      },
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
      header:
        'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
      exp: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;',
      sidebar: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
      hover:
        'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;',
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
