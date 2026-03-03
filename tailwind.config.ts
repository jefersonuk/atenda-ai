import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        atBg: "#070A0F",
        atPanel: "rgba(255,255,255,0.06)",
        atBorder: "rgba(255,255,255,0.12)",
        atText: "#E7ECF5",
        atMuted: "rgba(231,236,245,0.72)",
        atBlue: "#0066FF",
        atGreen: "#00D96B",
        atPurple: "#7C3AED",
        atOrange: "#FF8B35",
      },
      fontFamily: {
        sans: [
          "var(--font-jakarta)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
