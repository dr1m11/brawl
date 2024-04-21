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
        "option-bg": "rgba(72, 49, 142, 0.2)",
        '6445118': 'rgb(64, 45, 118)',
        '6944145': 'rgb(69, 44, 145)',
        '373070': 'rgb(37, 30, 70)',
        '43119251-opacity': 'rgba(43, 119, 251, 0.5)',
        '43119251': 'rgb(43, 119, 251)',
      },
      textColor: {
        "main": "rgba(132, 140, 236, 0.75)",
        "main-op40": "rgba(132, 140, 236, 0.40)",
        "title-case-color": "rgba(240, 244, 254, 0.9)",
        '242': 'rgba(242, 242, 242, 0.75)'
      },
      borderColor: {
        "header": "rgb(77, 67, 146)",
        '6445118': 'rgb(64, 45, 118)',
        '7767146': 'rgba(77, 67, 146, 0.4)',
        'green-btn': 'linear-gradient(180.00deg, rgb(27, 191, 103) 75%,rgba(46, 255, 142, 0.9) 96.429%);'
      },
      zIndex: {
        "1000": "1000"
      },
    },
  },
  plugins: [],
};
export default config;
