module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#282830',
        'nav-bg': '#28292F',
        'heading-font': '#FFBD14',
        'bg-light': '#3D3E43',
        'bg-light95': 'rgba(61,62,67, 0.95)',
        'bg-light2': '#535355',
        'beaver': '#9B836A',
        'beaver-dark': '#563411',
        'border-color': '#FF6D19'
      },
      container: {
        center: true,
      },
      fontFamily: {
        'bungee': ['Bungee'],
      },
    },
    screen: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}