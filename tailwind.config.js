/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'custom-green': '#ffff',
        'custom-border-line': '#F5F5F5',
        'custom-text-color-one': '#101828',
        'custom-text-color-nav-link': '#344054',
        'gray-50': '#F9FAFB',
        'gray-20': '#667085',
        'purple-1': '#53389E',
        'purple-2': '#7F56D9',
        'gray-10': '#F9FAFB',
      },
    },
  },
  plugins: [],

}
