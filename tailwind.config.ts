import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(270deg, #FF2CDF 16.62%, #0014FF 83.98%)',
        'hero': 'url(/assets/hero-background.png)',
        'background': 'url(/assets/background.svg)',
      },
      colors: {
        primary: '#FF2CDF',
        secondary: '#0014FF',
        dark: '#250E47',
        green: '#48D075',
        black: "#1E1E1E",
        zinc: {
          300: '#656666',
        },
        gray: {
          500: '#1E1E1E',
          400: '#B0B0B0',
          300: 'rgba(255, 255, 255, 0.25)',
          200: '#E0E0E0'
        }
      },
      fontFamily: {
        inter: 'Inter, sans-serif', 
      }
    },
  },
  plugins: [],
}
export default config
