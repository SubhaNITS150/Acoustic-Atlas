/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FFFFFF',
        'brand-light-gray': '#F5F7FA',
        'brand-dark-blue': '#1A2E40',
        'brand-teal': '#00C49A',
        'map-green': '#2ECC40',
        'map-yellow': '#FFDC00',
        'map-red': '#FF4136',
      },
      fontFamily: {
        // Add 'Manrope' to your project, e.g., via Google Fonts in your layout.js
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};