/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        carmin: {
          DEFAULT: '#8B1E2F',
          dark:    '#5C1320',
          deep:    '#3D0C15',
          light:   '#A83040',
          muted:   '#C4707F',
        },
        cream:  '#F7F1E8',
        gold:   '#C4A47C',
        carbon: '#141414',
        stone:  '#1C1C1C',
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
