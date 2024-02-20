import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hover': "#40444B",
        'active': "#282B30",
        "aside":"#36393E",
        "button": "#2F3136",
        "background":"#202225",
        "header": "#FFFFFF",
        "body": "#D9D9D9",
        "changes": "#476BEB",
        "alert":  "#EB4747",
        "warning": "#F2CD00",
        "success": "#52E053"
      }
    },
  },
  plugins: [],
};
export default config;
