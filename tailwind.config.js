export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Exact values pulled from the live site's assets/css/main.css :root block
        brand: {
          DEFAULT: '#10AD54', // --accent-color
          dark: '#0d8e44',    // ~14% darker, matches the color-mix() hover states
          light: '#E7F6EC',
          soft: '#F1FAF4',
        },
        eco: {
          green: '#10AD54',
          dark: '#0C8F45',
          black: '#060606',
        },
        ink: '#171717',   // --heading-color
        body: '#444444',  // --default-color
        cream: '#f9f5f4', // .light-background --background-color
        night: {
          DEFAULT: '#060606', // .dark-background --background-color
          soft: '#171717',
          light: '#252525',   // .dark-background --surface-color
        },
      },
      fontFamily: {
        // Roboto = body copy, Lato = headings, Inter = nav/UI chrome — matches the original three-font system
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        nav: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '10px', // .btn-primary-ghost / .btn-accent / .btn-join all use this exact radius
      },
      boxShadow: {
        card: '0 1px 2px rgba(23,23,23,0.04), 0 8px 24px -12px rgba(23,23,23,0.12)',
        lift: '0 24px 60px -30px rgba(23,23,23,0.35)',
        glow: '0 0 0 1px rgba(16,173,84,0.35), 0 0 50px rgba(16,173,84,0.18)',
      },
      maxWidth: {
        shell: '1200px',
      },
    },
  },
  plugins: [],
}
