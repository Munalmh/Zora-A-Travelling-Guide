/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0d9488', // Teal 600
        'brand-secondary': '#0f766e', // Teal 700
        'brand-accent': '#f59e0b', // Amber 500
        'bg-main': '#f9fafb', // Gray 50
        'bg-card': '#ffffff', // White
        'text-main': '#111827', // Gray 900
        'text-muted': '#4b5563', // Gray 600
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        // Fallback for headings if desired, but Inter is standard and clean
        heading: ['Inter', 'sans-serif'], 
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
