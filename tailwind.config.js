/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jazinski: {
          blue: '#3d5a73',
          gold: '#c9a65c',
        },
        dark: {
          base: '#0f1419',
          card: '#1a1f26',
          border: '#2a3038',
        },
        gold: {
          light: '#e6c068',
          DEFAULT: '#c9a65c',
          dark: '#b8955a',
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(201, 166, 92, 0.3)',
        'glow-strong': '0 0 30px rgba(201, 166, 92, 0.5)',
      },
    },
  },
  plugins: [],
}