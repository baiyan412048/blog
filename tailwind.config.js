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
      colors: {
        green: '#5C8374',
        blue: '#263E52',
        yellow: '#FBCC6C'
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-code': '#FFFFFF',
            '--tw-prose-pre-bg': '#263E52',
            '--tw-prose-invert-code': '#FFFFFF',
            '--tw-prose-invert-pre-bg': '#263E52',
            code: {
              color: 'var(--tw-prose-code)',
              backgroundColor: 'var(--tw-prose-pre-bg)',
              padding: '0 0.25rem',
              fontWeight: '400',
              borderRadius: '0.25rem'
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            'a code': {
              color: 'var(--tw-prose-code)',
            },
            'h1 code': {
              color: 'var(--tw-prose-code)',
            },
            'h2 code': {
              color: 'var(--tw-prose-code)',
            },
            'h3 code': {
              color: 'var(--tw-prose-code)',
            },
            'h4 code': {
              color: 'var(--tw-prose-code)',
            },
            'blockquote code': {
              color: 'var(--tw-prose-code)',
            },
            'thead th code': {
              color: 'var(--tw-prose-code)',
            },
          }
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
