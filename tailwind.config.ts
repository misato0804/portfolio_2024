import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': 'clamp(0.8rem, calc(0.8rem + 0.625vw), 1.3rem)',   // Example values
        'sm': 'clamp(1rem, calc(0.9rem + 0.625vw), 1.6rem)', // Example values
        'base': 'clamp(1.2rem, calc(1rem + 0.625vw), 1.7rem)', // Example values
        'lg': 'clamp(1.6rem, calc(1.4rem + 0.625vw), 2.2rem)', // Example values
        'xl': 'clamp(2.4rem, calc(2.2rem + 0.625vw), 2.9rem)', // Example values
        '2xl': 'clamp(3rem, calc(2.8rem + 0.625vw), 3.6rem)',  // Example values
        'p': 'clamp(1rem, calc(0.9rem + 0.625vw), 1.4rem)'
      },
      colors: {
        spring: {
          cherryBlossom: '#FFB7C5',
          softGreen: '#A7D2A9',
          lightBlue: '#B5D9F8',
          warmBeige: '#F8E3C2',
        },
        summer: {
          coral: '#FF6F61',
          skyBlue: '#87CEEB',
          lemonYellow: '#FFF44F',
          seaGreen: '#2E8B57',
        },
        autumn: {
          crimson: '#DC143C',
          amber: '#FFBF00',
          pumpkin: '#FF7518',
          chestnut: '#954535',
        },
        winter: {
          snowWhite: '#FFFFFF',
          iceBlue: '#A0D2DB',
          slateGray: '#5B6E72',
          pineGreen: '#316650',
        }
      }
    },    
  },
  plugins: [],
};
export default config;
