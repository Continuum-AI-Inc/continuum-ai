/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{apps,libs}/**/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,scss}'],
  theme: {
    extend: {
      colors: {
        "fg-primary": "#ffffff",
        "fg-secondary": "#fafafa",
        "light": "#eee",
        "gray": "#666666",
        "bg-primary": "#333333",
        "bg-secondary": "#111111"
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}
