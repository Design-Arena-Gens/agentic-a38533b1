import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c8eb2d",
        secondary: "#ff3c00",
        background: "#f7f7f5",
        text: "#0a0a0a",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Hedvig Letters Serif', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
