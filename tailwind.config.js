/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: '#111b27',
              backgroundColor: '#e3eaf2',
              padding: '0 0.25rem',
              borderRadius: '0.25rem'
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            'a code': {
              color: '#111b27',
            },
            'h1 code': {
              color: '#111b27',
            },
            'h2 code': {
              color: '#111b27',
            },
            'h3 code': {
              color: '#111b27',
            },
            'h4 code': {
              color: '#111b27',
            },
            'blockquote code': {
              color: '#111b27',
            },
            'thead th code': {
              color: '#111b27',
            },
          }
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
