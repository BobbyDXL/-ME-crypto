/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium black and white palette
        primary: {
          black: "#030303",
          white: "#FFFFFF",
          gray: {
            100: "#F5F5F5",
            200: "#E5E5E5",
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
          }
        },
        accent: {
          1: "#FFFFFF",  // Pure white accents
          2: "#8D8D8D",  // Subtle silver
          3: "#333333",  // Dark accent
        },
      },
      fontFamily: {
        syncopate: ['Syncopate', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

