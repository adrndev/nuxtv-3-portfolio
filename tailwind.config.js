/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  safelist: [
    'animate-[fadeIn_5s_ease]'
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: 'Jost, cursive',
        inconsolata: 'Inconsolata',
        poppins: 'Poppins, sans-serif',
        roboto: 'Roboto',
        monospace: 'monospace',
      },
      lineHeight: {
        20: '5rem',
      },
      borderWidth: {
        5: '5px',
      },
      colors: {
        'yellow-main': '#ffe852',
        'yellow-light': '#fff9d3',
        'dark-gray': '#071013',
        secondary: '#0D1E24',
        'gray-main': '#CAD3C8',
        'white-main': '#f9f9f9',
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      },
      keyframes: {
        slideDown: {
          '0%': { top: '-120px' },
          '100%': { top: '0' },
        },
        slideRight: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
