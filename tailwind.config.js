/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Add the path to your React components
    './public/index.html',          // If using public folder for index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
