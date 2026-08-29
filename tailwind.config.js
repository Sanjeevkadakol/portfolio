/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'parchment-cream': '#f7f6e3',
        'cream': '#f7f6e3',
        'ink-black': '#262d29',
        'ink': '#262d29',
        'electric-lemon': '#ffff48',
        'lemon': '#ffff48',
      },
      fontFamily: {
        prody: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        suisse: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        'suisse-book': ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        cards: '37px',
        buttons: '18px',
        pills: '9999px',
        nav: '8px',
        inputs: '8px',
        '3xl': '37px',
      },
      spacing: {
        '8': '8px',
        '12': '12px',
        '20': '20px',
        '28': '28px',
        '37': '37px',
        '112': '112px',
      },
      maxWidth: {
        'page': '1280px',
      },
      lineHeight: {
        tight: '1.15',
      }
    },
  },
  plugins: [],
}
