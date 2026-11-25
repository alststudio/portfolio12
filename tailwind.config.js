/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'PP Neue Montreal'",
          'system-ui',
          '-apple-system',
          "'Segoe UI'",
          'Roboto',
          "'Helvetica Neue'",
          'Arial',
          'sans-serif',
        ],
        mondwest: ["'PP Mondwest'", 'Georgia', "'Times New Roman'", 'serif'],
      },
      boxShadow: {
        primary:
          '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)',
        secondary: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)',
        tertiary:
          '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08), 0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0)',
        nav: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08), 0 12px 40px 0 rgba(5,26,36,0.12)',
        darkcard:
          'inset 0 1px 0 0 rgba(255,255,255,0.12), inset 0 12px 32px 0 rgba(224,235,240,0.06), 0 4px 16px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
