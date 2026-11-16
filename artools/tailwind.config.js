/* Config do Tailwind desta landing (tokens 1:1 do design_system.html).
   Gerar o CSS, a partir desta pasta:
   npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.in.css -o tailwind.css --minify */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        stone: {
          50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e',
          500: '#78716c', 600: '#57534e', 700: '#44403c', 800: '#292524', 900: '#1c1917',
        },
        'surface-light': '#EAEAE5',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
};
