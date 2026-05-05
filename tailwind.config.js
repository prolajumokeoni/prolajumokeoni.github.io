/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        navy: {
          900: '#0b0b18',
          800: '#0f0f22',
          700: '#13132a',
          600: '#1a1a35'
        },
        accent: {
          blue: '#2563eb',
          'blue-hover': '#1d4ed8'
        }
      }
    }
  },
  plugins: []
}
