import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      open_sans: ['Open Sans', 'sans-serif'],
      source_sans_3: ['Source Sans 3', 'sans-serif'],
    },
    colors: {
      darkGray1: '#535353',
      darkGray2: '#323338',
      darkGray3: '#2E2E2E',
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  plugins: [],
};
export default config;
