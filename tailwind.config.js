/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        radio: "Radio Canada",
      },
      colors: {
        "main-color": "#72E2AE",
        "sec-color": "#233F45",
        "desc-color": "#818391",
      },
    },
  },
  plugins: [require("daisyui")],
};
