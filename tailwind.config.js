module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require("tailwind-extended-shadows")
  ],
  theme: {
    extend: {
      height: {
        'screen/60': '60vh',
        'screen/50': '50vh'
      },
      width: {
        'screen/60': '60vw',
        'screen/40': '40vw',
        'screen/80': '80vw'
      }
    }
  },
};