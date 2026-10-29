/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f7f4',
          100: '#e1ede6',
          200: '#c5dcd0',
          300: '#9cc2b1',
          400: '#6ea38d',
          500: '#4e8671',
          600: '#3c6b5a',
          700: '#325649',
          800: '#2b463c',
          900: '#253b34',
          950: '#13211d',
        },
        camp: {
          wood: '#8B5A2B',
          warm: '#FBF8F3',
          sand: '#EED9C4',
          dark: '#1C1917',
          orange: '#FF6B35',
          tqGreen: '#00A86B'
        }
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Nanum Myeongjo', 'serif'],
      }
    },
  },
  plugins: [],
}
