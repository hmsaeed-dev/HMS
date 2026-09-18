import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: "#f7f4ef",
        },
        olive: {
          DEFAULT: "#728649",
          lt: "#8a9e60",
        },
        ink: {
          DEFAULT: "#2a2a22",
          "60": "rgba(42, 42, 34, 0.60)",
          "40": "rgba(42, 42, 34, 0.40)",
          "20": "rgba(42, 42, 34, 0.20)",
          "10": "rgba(42, 42, 34, 0.08)",
          "05": "rgba(42, 42, 34, 0.04)",
        },
        earth: "#8b6b4d",
        sky: "#5a8aa8",
        overlay: "rgba(114, 134, 73, 0.15)",
        selection: "rgba(114, 134, 73, 0.25)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "sans-serif"],
        mono: ["var(--font-mono)", "Fira Code", "monospace"],
      },
      fontSize: {
        "fs-200": "0.50rem",
        "fs-300": "0.8125rem",
        "fs-400": "1rem",
        "fs-500": "1.125rem",
        "fs-600": "1.3125rem",
        "fs-700": "1.625rem",
        "fs-800": "2.125rem",
        "fs-900": "3.25rem",
        display: "clamp(2.8rem, 6vw, 5.5rem)",
        "fluid-h1": "clamp(3.2rem, 8vw + 1rem, 7rem)",
        "fluid-h2": "clamp(2.4rem, 4vw + 0.5rem, 4.5rem)",
        "fluid-h3": "clamp(1.8rem, 4.5vw, 3rem)",
        "fluid-h4": "clamp(1.5rem, 3.5vw, 2.25rem)",
      },
      spacing: {
        "space-2xs": "0.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4rem",
        "space-4xl": "8rem",
        "space-5xl": "10rem",
      },
      borderRadius: {
        "sm-custom": "16px",
        "md-custom": "24px",
        "lg-custom": "32px",
      },
      boxShadow: {
        "soft-sm": "0 2px 8px rgba(0, 0, 0, 0.05)",
        "soft-md": "0 4px 20px rgba(114, 134, 73, 0.15)",
        "soft-lg": "0 12px 40px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
