import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-pp': 'linear-gradient(45deg, #4DBBEB 0%, #C387FF 20%, #FF45AA 100%)',
        'gradient-pp1': 'linear-gradient(45deg, #4DBBEB 5%, #C387FF 25%, #FF45AA 100%)',
        'gradient-pp2': 'linear-gradient(45deg, #4DBBEB 0%, #C387FF 30%, #FF45AA 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
