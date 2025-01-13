/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "purple-background": "url('/images/bg.jpeg')",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "bounce-slow": "bounce 1.3s infinite",
        filling: "filling 0.5s linear both",
        fly: "fly 1s infinite ease alternate",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        filling: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fly: {
          "0%": { transform: "translate(-30px, -30px)" },
          "100%": { transform: "translate(-80px, -80px)" },
        },
      },
    },
  },
  plugins: [],
};
