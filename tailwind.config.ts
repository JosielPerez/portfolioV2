import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        "101": "1.01",
        "102": "1.02",
        "103": "1.03",
        "104": "1.04",
       
      },
      colors: {
        "purple-light": "#F8EBFF",
        "purple-light-300": "#B89CFF",
        "purple-dark-100": "#5E4B8F",
        "purple-dark-300": "#423D4F",
        "purple-dark-400": "#4E4564",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
