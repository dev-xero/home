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
        'bg-dark': '#090C12',
        'light-dark': "#282F40",
        'white': '#F4F9FB',
        'grey-000': '#ECEFF3',
        'grey-050': '#B5C3D8',
        'grey-100': '#7A879A',
        'blue': '#8EB8F8',
        'green': '#5EF6A4'
      }
    },
  },
  plugins: [],
};
export default config;
