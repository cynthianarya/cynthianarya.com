// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#fbf8fb',
          100: '#f5f0f7',
          200: '#eadfef',
          300: '#dac6e1',
          400: '#c3a4ce',
          500: '#a97fb6',
          600: '#8d6099',
          700: '#7b5285', // <-
          800: '#604167',
          900: '#523956',
          950: '#311d35',
        },
        accent: {
          50: '#eeefff',
          100: '#e0e1ff', // <-
          200: '#c7c7fe',
          300: '#a7a5fc',
          400: '#8d81f8',
          500: '#7b63f1',
          600: '#6e46e5',
          700: '#5f38ca',
          800: '#4d30a3',
          900: '#412e81',
          950: '#271b4b',
        },
        rosa: {
          50: '#fbf4ff', // <-
          100: '#f6e8ff',
          200: '#edd0fe',
          300: '#e1abfc',
          400: '#d179f9',
          500: '#ba46ef',
          600: '#a126d3',
          700: '#871caf',
          800: '#71198f',
          900: '#5f1a75',
          950: '#3d044e',
        },
        'custom-text': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#333333', // <-
          950: '#262626',
        },
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              color: theme('colors.primary.900'),
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
