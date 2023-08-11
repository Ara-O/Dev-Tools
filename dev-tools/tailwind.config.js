/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ml': '1000px',
        // => @media (min-width: 768px) { ... }

      }
    },
  },
  plugins: [],
}

