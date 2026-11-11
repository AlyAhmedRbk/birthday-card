/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: '#f6d5de',
          soft: '#fbecef',
        },
        rose: {
          DEFAULT: '#e8a0b0',
          deep: '#c56b82',
        },
        champagne: {
          DEFAULT: '#e8d5a8',
          deep: '#c9a96e',
        },
        ivory: '#faf6f0',
        cream: '#f3ebe1',
        burgundy: {
          DEFAULT: '#5c1f2e',
          deep: '#2a1218',
        },
        lavender: '#d8cce8',
        ink: {
          DEFAULT: '#3a2430',
          soft: '#6b4f5c',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        letter: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        ui: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-rose': '0 0 40px rgba(232, 160, 176, 0.45)',
        'glow-gold': '0 0 36px rgba(201, 169, 110, 0.35)',
        book: '0 25px 50px -12px rgba(42, 18, 24, 0.45)',
      },
      minHeight: {
        dvh: '100dvh',
      },
    },
  },
  plugins: [],
}
