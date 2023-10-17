/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem'
      },
      colors: {
        primary: '#5C8374',
        green: '#5C8374',
        blue: '#263E52',
        yellow: '#FBCC6C'
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-code': '#374151',
            '--tw-prose-pre-bg': '#cce5dc',
            '--tw-prose-invert-code': '#374151',
            '--tw-prose-invert-pre-bg': '#cce5dc',
            maxWidth: '100%',
            pre: {
              marginTop: '0',
              marginBottom: '0',
              paddingTop: '0',
              paddingRight: '0',
              paddingBottom: '0',
              paddingLeft: '0',
              backgroundColor: 'none',
              color: 'inherit'
            },
            code: {
              padding: '0 0.25rem',
              color: 'var(--tw-prose-code)',
              border: '1px solid #88b7a5',
              backgroundColor: '#f2f2f2',
              borderRadius: '0.25rem',
              fontWeight: '400',
              fontSize: '0.75rem',
              lineHeight: 'normal'
            },
            'code::before': {
              content: 'none'
            },
            'code::after': {
              content: 'none'
            },
            'a code': {
              color: 'var(--tw-prose-code)'
            },
            'h1 code': {
              color: 'var(--tw-prose-code)'
            },
            'h2 code': {
              color: 'var(--tw-prose-code)'
            },
            'h3 code': {
              color: 'var(--tw-prose-code)'
            },
            'h4 code': {
              color: 'var(--tw-prose-code)'
            },
            'blockquote code': {
              color: 'var(--tw-prose-code)'
            },
            'thead th code': {
              color: 'var(--tw-prose-code)'
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
