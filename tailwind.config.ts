import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F8F4FF",
          100: "#EDE3FF",
          400: "#B681EE",
          500: "#A66BE8",
          600: "#7F45C6",
          900: "#2B1A3A"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(43, 26, 58, 0.08)",
        glow: "0 16px 40px rgba(166, 107, 232, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};

export default config;
