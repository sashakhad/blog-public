import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dev-primary": "#1a1a1a",
        "dev-accent": "#10b981", 
        "dev-text": "#f8fafc",
        "dev-secondary": "#64748b",
        "dev-bg": "#0f172a",
        "dev-card": "#1e293b",
      },
      fontFamily: {
        "mono": ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
