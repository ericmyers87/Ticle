import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ticle-black": "#0B0B0F",
        "ticle-surface": "#14141B",
        "ticle-muted": "#1E1E29",
        "ticle-border": "#2A2A37",
        "ticle-accent": "#E50914",
        "ticle-text": "#F5F5F7",
        "ticle-subtext": "#B5B5BD"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"]
      },
      spacing: {
        "content": "1.5rem"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
