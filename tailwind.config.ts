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
        "option-bg": "rgba(72, 49, 142, 0.2)",
        '6445118': 'rgb(64, 45, 118)',
        '6944145': 'rgb(69, 44, 145)',
        '373070': 'rgb(37, 30, 70)',
        '373070-OP30': 'rgba(37, 30, 70, 0.3)',
        '43119251-opacity': 'rgba(43, 119, 251, 0.7)',
        '43119251': 'rgb(43, 119, 251)',
        '217': 'rgba(217, 217, 217, 0.01)',
        '8420126': 'rgb(84, 20, 126)',
        '7381172': 'rgb(73, 81, 172)',
        '7381172-OP20': 'rgba(73, 81, 172, 0.2)',
        '7381172-OP60': 'rgba(73, 81, 172, 0.6)',
        '2501760': 'rgb(250, 176, 0)',
        '6747127': 'rgb(67, 47, 127)',
        '494088': 'rgb(49, 40, 88)',
        '9580160': 'rgb(95, 80, 160)',
        '8766187': 'rgb(87,66,187)',
        '9580160-OP20': 'rgba(95, 80, 160, 0.2)',
        '9580160-OP40': 'rgba(95, 80, 160, 0.4)',
        '24416163': 'rgba(244, 161, 63, 0.75)',
        '2551840': 'rgb(255, 184, 0)',
        '332762': 'rgb(33, 27, 62)',
        '5436107': 'rgba(54, 36, 107, 0.6)',
        '5436107NO-OP': 'rgb(54, 36, 107)',
        '2463838': 'rgb(246, 38, 38)',
        '5665162': 'rgb(56, 65, 162)',
        '12620176': 'rgb(126, 20, 176)',
        '83110250': 'rgb(83, 110, 250)',
        'white-OP20': 'rgba(255, 255, 255, 0.2)',
        '255248231': 'rgb(255, 248, 231)',
        '6243127': 'rgb(62, 43, 127)',
        '473889': 'rgb(47, 38, 89)',
        '383838-OP20': 'rgba(38, 38, 38, 0.2)',
        '222838-OP40': 'rgba(22, 28, 38, 0.4)',
        '453091': 'rgb(45,30,91)',
        '8052167': 'rgb(80, 52, 167)',
        '7145146': 'rgb(71, 45, 146)',
        '432583': 'rgb(43, 25, 83)',
        "5537108": 'rgb(55, 37, 108)',
      },
      textColor: {
        "main": "rgba(132, 140, 236, 0.75)",
        "main-op40": "rgba(132, 140, 236, 0.40)",
        "title-case-color": "rgba(240, 244, 254, 0.9)",
        '242': 'rgba(242, 242, 242, 0.75)',
        'white-OP60': 'rgba(255, 255, 255, 0.6)',
        '7044145': 'rgb(70, 44, 145)',
        '2431440': 'rgb(243, 144, 0)',
        '848CEC': '#848CEC'
      },
      borderColor: {
        "header": "rgb(77, 67, 146)",
        '6445118': 'rgb(64, 45, 118)',
        '7767146': 'rgba(77, 67, 146, 0.4)',
        'green-btn': 'linear-gradient(180.00deg, rgb(27, 191, 103) 75%,rgba(46, 255, 142, 0.9) 96.429%);',
        '2358720': 'rgb(235, 87, 20)',
        '2551840': 'rgb(238, 130, 46)',
        '453091': 'rgb(45,30,91)',
        '2364141': 'rgb(236,41,41)',
        '132140236': 'rgb(132, 140, 236)',
        '5436107': 'rgba(54, 36, 107, 0.6)',
      },
      zIndex: {
        "1000": "1000"
      },
      gradientColorStops: {
        '8420126': 'rgb(84, 20, 126)',
        '7381172': 'rgb(73, 81, 172)',
        '24416163': 'rgb(247,158,97)',
        '2551840': 'rgb(236,129,46)',
        '2501760': 'rgba(250, 176, 0, 0.9)',
        '227167255': 'rgba(227, 167, 255, 0.9)',
        '6747127': 'rgb(67, 37, 127)',
        '5436107': 'rgb(54, 36, 107)',
        '7449150': 'rgb(74, 49, 150)',
        '6842143': 'rgb(68, 42, 143)',
        '24013247': 'rgb(240, 132, 47)',
        '2432190': 'rgb(243, 219, 0)',
        '9444168': 'rgb(94, 44, 168)',
        '7973191': 'rgb(79, 73, 191)',
        '255108108': 'rgb(255,108,108)',
        '2364141': 'rgb(236,41,41)',
        'black-op-0': 'rgba(0, 0, 0, 0)'
      }
    },
    screens: {
      '1060': '1060px'
    }
  },
  plugins: [],
};
export default config;
