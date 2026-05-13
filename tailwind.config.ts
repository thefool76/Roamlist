import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f5efe4",
        porcelain: "#fffaf1",
        ink: "#191611",
        muted: "#70675b",
        moss: "#52614a",
        clay: "#a86749",
        ochre: "#c59a56",
        linen: "#ebe1d2"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(56, 44, 27, 0.14)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.72)"
      }
    }
  },
  plugins: []
};

export default config;
