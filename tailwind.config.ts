import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': 'clamp(0.8rem, calc(0.8rem + 0.625vw), 1.3rem)',   
        'sm': 'clamp(1rem, calc(0.9rem + 0.625vw), 1.6rem)', 
        'base': 'clamp(1.2rem, calc(1rem + 0.625vw), 1.7rem)', 
        'lg': 'clamp(1.6rem, calc(1.4rem + 0.625vw), 2.2rem)', 
        'xl': 'clamp(2.4rem, calc(2.2rem + 0.625vw), 2.9rem)', 
        '2xl': 'clamp(3rem, calc(2.8rem + 0.625vw), 3.6rem)',  
        'p': 'clamp(1rem, calc(0.9rem + 0.625vw), 1.4rem)'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config