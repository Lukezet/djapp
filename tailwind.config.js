/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'svg': "url('src/assets/neon.svg')",
      },
      plugins: [
        function ({ addUtilities }) {
          const newUtilities = {
            '.bg-fixed': {
              'background-attachment': 'fixed',
            },
          };
          addUtilities(newUtilities, ['responsive', 'hover']);
        },
      ],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

