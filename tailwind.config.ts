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
      colors: {
        darkBlue: "rgb(12, 10, 62, 1)",
        aquamarine: "rgba(100, 247, 217, 1)",
      },
      boxShadow: {
        custom: "5px 5px 7px 3px rgba(0,0,0,0.31)",
      },
    },
  },
  screens: {
    sm: "320px",
    md: "740px",
    lg: "976px",
    xl: "1200px",
    xxl: "1441px",
    "3xl": "1620px",
    "4xl": "1920px",
    "sm-tall": { raw: "(max-width: 740px) and (min-height: 751px)" },
    small: { raw: "(min-width: 976px) and (max-height: 750px)" },
    tall: { raw: "(min-width: 976px) and (min-height: 751px)" },
    extra: { raw: "(min-width: 976px) and (min-height: 930px)" },
  },
  plugins: [],
};
export default config;
