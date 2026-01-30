/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // blue-800
          light: '#3B82F6', // blue-500
          dark: '#1e3a8a', // blue-900
        },
        secondary: '#3B82F6', // blue-500
        accent: '#DC2626', // red-600
        dark: '#0F172A', // slate-900
        neutral: '#64748B', // slate-500
        light: '#F8FAFC', // slate-50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}