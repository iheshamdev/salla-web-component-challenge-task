import type { Config } from 'tailwindcss';
import * as defaultColors from 'tailwindcss/colors';

const colors = {
  ...defaultColors,
  primary: '#004D5A',
  secondary: '#BAF3E6',
  gray: '#eee',
  black: {
    100: '#111',
    200: '#222',
    300: '#333',
    400: '#444',
    500: '#555',
    600: '#666',
    700: '#777',
    800: '#888',
    900: '#999',
    pure: '#000',
  },
};
export { colors };

const config: Config = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Ping LCG', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
