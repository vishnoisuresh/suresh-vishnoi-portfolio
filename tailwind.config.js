/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#1e1e1e',
        'terminal-text': '#d4d4d4',
        'yaml-key': '#9cdcfe',
        'yaml-string': '#ce9178',
        'yaml-comment': '#6a9955',
        'yaml-number': '#b5cea8',
        'yaml-boolean': '#569cd6',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'Menlo', 'Monaco', 'Consolas', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}
