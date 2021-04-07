module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          '50':  '#f7fbfd',
          '100': '#e7f8fd',
          '200': '#c3e7fc',
          '300': '#9bd0fb',
          '400': '#64a4fb',
          '500': '#3376fa',
          '600': '#004cff',
          '700': '#1d40df',
          '800': '#1831ad',
          '900': '#132885',
        },
        indigo: {
          '50':  '#f5f9fc',
          '100': '#e8f1fc',
          '200': '#cedbfb',
          '300': '#b0c0fa',
          '400': '#8b93fa',
          '500': '#6365fa',
          '600': '#4944f6',
          '700': '#3b36e4',
          '800': '#2e2bb9',
          '900': '#252592',
        },
        flamingo: {
          '50':  '#f6f5fa',
          '100': '#f1e7fa',
          '200': '#e4c9f8',
          '300': '#d8a8f7',
          '400': '#d07af6',
          '500': '#c84ef6',
          '600': '#af32f1',
          '700': '#8828dc',
          '800': '#6722b2',
          '900': '#521e8d',
        },
        cerise: {
          '50':  '#fdf9f9',
          '100': '#fdeef5',
          '200': '#fbceea',
          '300': '#faa4d9',
          '400': '#fb6abb',
          '500': '#fc4099',
          '600': '#f62572',
          '700': '#db1d59',
          '800': '#ae1843',
          '900': '#8a1534',
        },
        scarlet: {
          '50':  '#fcf8f6',
          '100': '#fcefee',
          '200': '#fad5da',
          '300': '#f9b1b9',
          '400': '#f97d84',
          '500': '#fa5156',
          '600': '#f33239',
          '700': '#d52633',
          '800': '#aa1f2d',
          '900': '#871a26',
        },
        mango: {
          '50':  '#faf6ed',
          '100': '#fbeed7',
          '200': '#f8dfab',
          '300': '#f6c56b',
          '400': '#f39e2f',
          '500': '#f27715',
          '600': '#e6520e',
          '700': '#c53d12',
          '800': '#9f3118',
          '900': '#812818',
        },
        orange: {
          '50':  '#faf7ed',
          '100': '#faf3d0',
          '200': '#f6e995',
          '300': '#f1d64f',
          '400': '#e7b61b',
          '500': '#de930a',
          '600': '#c76f06',
          '700': '#a0530a',
          '800': '#7d400f',
          '900': '#633311',
        },
        sunglow: {
          '50':  '#fafaf2',
          '100': '#faf7d9',
          '200': '#f4ef9b',
          '300': '#ebe054',
          '400': '#d6c31c',
          '500': '#bda409',
          '600': '#988005',
          '700': '#736108',
          '800': '#56490d',
          '900': '#42390e',
        },
        green: {
          '50':  '#f2f9f8',
          '100': '#e4f8ef',
          '200': '#c4f2d7',
          '300': '#91e7b9',
          '400': '#41d387',
          '500': '#18ba57',
          '600': '#139d3d',
          '700': '#187e37',
          '800': '#196132',
          '900': '#174d2c',
        },
        cerulean: {
          '50':  '#f1f9fb',
          '100': '#daf7f9',
          '200': '#aeeef2',
          '300': '#76e0ed',
          '400': '#31c7e4',
          '500': '#12a6d8',
          '600': '#0e85c2',
          '700': '#126a9d',
          '800': '#135174',
          '900': '#12415a',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
}