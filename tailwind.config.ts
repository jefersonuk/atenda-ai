import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        atendaBlue: "#0066FF",
        atendaGreen: "#00D96B",
        atendaBlack: "#0A0A0A",
        atendaGray: "#1F2937",
        atendaOrange: "#FF8B35",
        atendaPurple: "#7C3AED"
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
        ]
      }
    }
  },
  plugins: []
};

export default config;
