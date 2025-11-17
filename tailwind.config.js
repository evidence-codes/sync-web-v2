/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ["var(--font-abhaya)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
