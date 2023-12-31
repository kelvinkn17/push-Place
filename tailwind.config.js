/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Red Hat Display'", 'sans-serif'],
        header: ["'Unbounded'", 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: '#FAFAFA',
          '50': '#f5f6f8',
          '100': '#eceef2',
          '200': '#d6dae1',
          '300': '#b1bac8',
          '400': '#8796a9',
          '500': '#68798f',
          '600': '#536176',
          '700': '#444f60',
          '800': '#3b4351',
          '900': '#343a46',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          '50': '#f6f6f6',
          '100': '#F0F0F0',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#1a1a1a',
        },
        primary: {
          DEFAULT: '#00A707',
          '50': '#f1fce9',
          '100': '#E3F4D3',
          '200': '#c3f3a3',
          '300': '#BAE380',
          '400': '#9AD85C',
          '500': '#5ac022',
          '600': '#00A707',
          '700': '#618E33',
          '800': '#2d5d17',
          '900': '#144B01',
          '950': '#143209',
        },
        secondary: {
          DEFAULT: '#00fed1',
          '50': '#e7fffa',
          '100': '#c6fff0',
          '200': '#92ffe6',
          '300': '#4dffdf',
          '400': '#00fed1',
          '500': '#00e8bd',
          '600': '#00be9c',
          '700': '#009882',
          '800': '#007868',
          '900': '#006256',
          '950': '#003833',
        },
        accent: {
          DEFAULT: '#efa286',
          '50': '#fdf6f3',
          '100': '#fceae4',
          '200': '#fadace',
          '300': '#f5bfac',
          '400': '#efa286',
          '500': '#e27851',
          '600': '#ce5d34',
          '700': '#ad4b28',
          '800': '#8f4125',
          '900': '#773b25',
          '950': '#401c0f',
        },
        success: {
          DEFAULT: '#3db000',
          '50': '#f2ffe5',
          '100': '#e1ffc7',
          '200': '#c3ff95',
          '300': '#99ff57',
          '400': '#78f629',
          '500': '#54dc06',
          '600': '#3db000',
          '700': '#308605',
          '800': '#2a690b',
          '900': '#24590e',
          '950': '#0e3201',
        },
        warning: {
          DEFAULT: '#E4B00E',
          '50': '#fdfbe9',
          '100': '#fcf8c5',
          '200': '#fbee8d',
          '300': '#f8dc4c',
          '400': '#f3c611',
          '500': '#e4b00e',
          '600': '#c4880a',
          '700': '#9d610b',
          '800': '#824d11',
          '900': '#6e3f15',
          '950': '#402008',
        },
        error: {
          DEFAULT: '#ff1717',
          '50': '#fff0f0',
          '100': '#ffdddd',
          '200': '#ffc0c0',
          '300': '#ff9494',
          '400': '#ff5757',
          '500': '#ff2323',
          '600': '#ff1717',
          '700': '#d70000',
          '800': '#b10303',
          '900': '#920a0a',
          '950': '#500000',
        },
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require('tailwindcss-animated')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F480D3',
          "primary-light": "#BAE380",
          "base-100": "#FFFFFF",
        }
      }
    ]
  }
}

