/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleMain: "#8054F6",
        purpleAccent: "#CFAAFF",
        purpleSoft: "#F4ECFF",
        purpleCard: "#A88CFF",
        purpleBorder: "#B9A4FF",
      },
    },
  },
  plugins: [],
}
