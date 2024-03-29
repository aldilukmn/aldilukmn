/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "system-ui", "sans-serif"],
        Logo: ["Arizonia", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        primary: "#2349FF"
      }
    },
  },
  plugins: [],
}

