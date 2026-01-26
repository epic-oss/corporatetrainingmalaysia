import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#dae5f2',
          200: '#b8cce6',
          300: '#8aabd4',
          400: '#5a86bf',
          500: '#3d6aa8',
          600: '#1e3a5f',
          700: '#1a3354',
          800: '#162b47',
          900: '#12233a',
          950: '#0c1726',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        hrdf: {
          DEFAULT: '#16a34a',
          light: '#22c55e',
          dark: '#15803d',
        }
      },
    },
  },
  plugins: [],
}
export default config
