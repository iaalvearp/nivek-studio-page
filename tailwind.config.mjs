/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": {
            "clip-path":
              "polygon(0% 32%, 21% 35%, 34% 48%, 48% 55%, 65% 54%, 76% 50%, 87% 42%, 100% 36%, 100% 100%, 0% 100%)",
          },
          "50%": {
            "clip-path":
              "polygon(0 45%, 20% 50%, 34% 48%, 48% 47%, 65% 46%, 75% 44%, 86% 37%, 100% 30%, 100% 100%, 0% 100%)",
          },
        },
      },
      animation: {
        wave: "wave 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
