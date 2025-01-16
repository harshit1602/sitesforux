import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pagebg: "#101010",
        containerbg: "#202020",
        textwhite: "#ebebeb",
      },
      
      fontFamily: {
        instrument: ['Instrument Sans', "sans-serif"],
        playfair: ['Playfair Display', "serif"],
      },

      animation: {
        backgroundshine: "backgroundshine 4s linear infinite",
        marquee: 'marquee 18s linear infinite',
      },

      keyframes: {
        backgroundshine: {
          from: { backgroundPosition: "0" },
          to: { backgroundPosition: "-200%" },
        },
        marquee: {
          '0%': { transform: "translateX(0%)" },
          '100%': { transform: "translateX(-100%)" },
        }
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
} satisfies Config;
