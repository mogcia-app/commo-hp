import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F4EEFD",
          100: "#E9DAFB",
          400: "#B681EE",
          500: "#A66BE8",
          600: "#9257D9",
          900: "#352146"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(64, 39, 91, 0.12)",
        glow: "0 20px 60px rgba(166, 107, 232, 0.24)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};

export default config;
