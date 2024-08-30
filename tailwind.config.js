/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'intro-email-bg': 'hsl(217, 28%, 15%)',
        'main-bg': 'hsl(218, 28%, 13%)',
        'footer-bg': 'hsl(216, 53%, 9%)',
        'testimonials-bg': 'hsl(219, 30%, 18%)',

        'cyan-cta' : 'hsl(176, 68%, 64%)',
        'blue-cta': 'hsl(198, 60%, 50%)',
        'light-red': 'hsl(0, 100%, 63%)',

        'white' : 'hsl(0, 0%, 100%)'
      },
      spacing: {
        '54': '13.5rem',
      },
    },
  },
  plugins: [],
}
