import type { Config } from 'tailwindcss';
import * as defaultColors from 'tailwindcss/colors';

export const colors = {
  ...defaultColors,
  primary: '#004D5A',
  secondary: '#BAF3E6',
  lightGray: '#eee',
  black: {
    pure: '#000',
    111: '#111',
    222: '#222',
    333: '#333',
    444: '#444',
    555: '#555',
    666: '#666',
    777: '#777',
    888: '#888',
    999: '#999',
  },
};

const config: Config = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Ping LCG', 'sans-serif'],
      },
      fontWeight: {
        light: '400',
        normal: '500',
        bold: '700',
        black: '900',
      },
    },
  },
  plugins: [],
};
export default config;
