import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "brawl-purple-main": "rgb(46, 31, 92)",
        "brawl-purple-header": "rgb(54, 36, 107)",
        "brawl-purple-header-opacity": "rgba(54, 36, 107, 0.7)",
        "green-button-inactive": "linear-gradient(180.00deg, rgb(27, 191, 103) 75%,rgba(46, 255, 142, 0.9) 96.429%)",
        "option-bg": "rgba(72, 49, 142, 0.2)"
      },
      textColor: {
        "main": "rgba(132, 140, 236, 0.75)",
        "title-case-color": "rgba(240, 244, 254, 0.9)"
      },
      borderColor: {
        "header": "rgb(77, 67, 146)"
      },
      zIndex: {
        "1000": "1000"
      }
    },
  },
  plugins: [],
};
export default config;
