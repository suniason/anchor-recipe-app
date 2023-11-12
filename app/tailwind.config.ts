import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },colors: {
      'white': '#ffffff',
      'black': '#000000',
      'grey': '#9d9d9d',
      'text': {
        50: '#e9eefc',
        100: '#d3ddf8',
        200: '#a6baf2',
        300: '#7a98eb',
        400: '#4e76e4',
        500: '#2153de',
        600: '#1b43b1',
        700: '#143285',
        800: '#0d2159',
        900: '#07112c',
        950: '#030816',
      },
      'background': {
        50: '#e8effc',
        100: '#d1defa',
        200: '#a3bdf5',
        300: '#759cf0',
        400: '#477beb',
        500: '#195ae6',
        600: '#1448b8',
        700: '#0f368a',
        800: '#0a245c',
        900: '#05122e',
        950: '#030917',
      },
      'primary': {
        50: '#e9eefc',
        100: '#d2dcf9',
        200: '#a5baf3',
        300: '#7897ed',
        400: '#4b75e7',
        500: '#1f52e0',
        600: '#1842b4',
        700: '#123187',
        800: '#0c215a',
        900: '#06102d',
        950: '#030816',
      },
      'secondary': {
        50: '#e9eefc',
        100: '#d3ddf8',
        200: '#a6baf2',
        300: '#7a98eb',
        400: '#4e76e4',
        500: '#2153de',
        600: '#1b43b1',
        700: '#143285',
        800: '#0d2159',
        900: '#07112c',
        950: '#030816',
      },
      'accent': {
        50: '#e9eefc',
        100: '#d2dcf9',
        200: '#a5baf3',
        300: '#7897ed',
        400: '#4b75e7',
        500: '#1f52e0',
        600: '#1842b4',
        700: '#123187',
        800: '#0c215a',
        900: '#06102d',
        950: '#030816',
      },
     },
  },
  plugins: [],
}
export default config