/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
