import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        racing: ["Racing Sans One", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
