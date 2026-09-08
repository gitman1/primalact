import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-dark": "#1B1C6B",
        "green-mountain": "#1B1C6B",
        "green-base": "#1B1C6B",
        "green-light": "#1B1C6B",
        "green-vernil": "#1B1C6B",
        "beige-body": "#FFFCF1",
        "beige-header": "#FFF9E3",
        "beige-100": "#FFF4C8",
        "beige-700": "#EFE1B0",
        "beige-btn": "#F1E4B2",
        "brown-dark": "#21190C",
        "brown-500": "#4E4029",
        orange: "#FCB92D",
        "red-promo": "#ED1C24",
      },
      fontFamily: {
        dirty: ["var(--font-dirty)", "Playfair Display", "serif"],
        yanone: ["var(--font-yanone)", "sans-serif"],
        open: ["var(--font-open)", "sans-serif"],
      },
      fontSize: {
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "24": "24px",
        "26": "26px",
        "35": "35px",
        "45": "45px",
        "60": "60px",
        "65": "65px",
        "80": "80px",
        "100": "100px",
      },
      spacing: {
        "15": "15px",
        "25": "25px",
        "30": "30px",
        "40": "40px",
        "50": "50px",
        "60": "60px",
        "70": "70px",
        "80": "80px",
        "100": "100px",
        "120": "120px",
        "200": "200px",
        "400": "400px",
        "968": "968px",
      },
      borderRadius: {
        "10": "10px",
      },
      maxWidth: {
        "400": "400px",
        "768": "768px",
        "968": "968px",
        "1200": "1200px",
      },
      lineHeight: {
        "085": "0.85",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
