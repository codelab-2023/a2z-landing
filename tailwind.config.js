/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Official A2Z Aaradhya logo color tokens
      colors: {
        brand: {
          primary:   '#166B82',   // Logo – deep ocean teal
          secondary: '#9ED6CD',   // Logo – soft mint teal
          dark:      '#0B3B48',   // Dark ink for headings
          deeper:    '#07242D',   // Footer/ultra-dark
          mid:       '#0F5265',   // Mid-tone for hover states
          light:     '#EBF7F6',   // Soft teal background tint
          gold:      '#D97706',   // Warm amber (offer highlights)
        },
      },
      fontFamily: {
        // Space Grotesk → premium geometric for headings
        heading: ['"Space Grotesk"', 'sans-serif'],
        // Inter → clean readable body text
        body: ['"Inter"', 'sans-serif'],
        // Plus Jakarta Sans → kept as legacy utility class
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        // Aliases used by Tailwind prose/sans
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
