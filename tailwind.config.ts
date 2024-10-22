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
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderColorFields: "#373737",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(96.34deg, hashtag#FF4E83 0.62%, hashtag#FFBB54 97.92%)",
      },
      backgroundColor: {
        fields: " #141414",
      },
    },
  },
  plugins: [],
};
export default config;
