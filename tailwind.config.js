module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-extended-shadows")
  ],
  theme: {},
};