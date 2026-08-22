/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand scale interpolated from white -> #136BFF -> #162B4D (navy).
        // 500 is your exact bright blue; 900 is your exact navy.
        brand: {
          50:  "#F6F9FF",
          100: "#E7F0FF",
          200: "#CBDEFF",
          300: "#A1C4FF",
          400: "#639DFF",
          500: "#136BFF",
          600: "#145DD8",
          700: "#144EAF",
          800: "#153D7F",
          900: "#162B4D",
        },
      },
    },
  },
  plugins: [],
};
