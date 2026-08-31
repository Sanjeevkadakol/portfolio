/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        putty: '#c4c3b6',
        ink: '#000000',
        bone: '#e7e5e4',
        chalk: '#ebebeb',
        vellum: '#dfdcd5',
        graphite: '#595855',
        ash: '#808080',
        paper: '#ffffff',
      },
      fontFamily: {
        davinci: ['Playfair Display', 'Cormorant Garamond', 'Cinzel', 'Georgia', 'serif'],
        helvetica: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        cards: '9px',
        buttons: '28.8px',
        links: '2px',
        pill: '9999px',
      },
      maxWidth: {
        page: '1280px',
      },
      letterSpacing: {
        tighter: '-0.05em',
        davinci: '-0.02em',
        wordmark: '-0.035em',
      }
    },
  },
  plugins: [],
}
