import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideMargin: {
          '0%': { marginLeft: '-4rem' },
          '50%': { marginLeft: '-2rem' },
          '100%': { marginLeft: '0px' },
        },
      },
      animation: {
        slideMargin: 'slideMargin 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
