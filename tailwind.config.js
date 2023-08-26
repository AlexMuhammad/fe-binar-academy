/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js", './node_modules/flowbite/**'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
