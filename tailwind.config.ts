import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        racing: ["Racing Sans One", "sans-serif"],
      },
      colors: {
        galaxyOrange: {
          900: "#F2A93F",
        },
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
