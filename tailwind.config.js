/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black":"#000000",
        "red-600":"#951c2f",
        "red-800":"#60141e",
        "cream-400":"#f5ddd2",

      },
    },
  },
  plugins: [],
};
