module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        // Credits: http://colormind.io/
        'pearl-blush': '#EBE2DB', // background
        twine: '#BD8A52', // light-accent
        stack: '#8B978C', // main brand color
        'stack-dark': '#545E55', // main brand color dark version
        'stack-extra-dark': '#3c433d', // main brand color extra dark version
        'roman-coffee': '#775A50', // dark accent
        'cape-cod': '#36443D', // dark shades
        'aqua-forest': '#5FA862', // Success
        'golden-grass': '#DC982A', // Warning
        pomegranate: '#F44336', // Danger
      },
    },
  },
  plugins: [],
}
