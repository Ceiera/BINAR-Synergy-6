/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-darkblue01": "#CFD4ED",
        "primary-darkblue02": "#AEB7E1",
        "primary-darkblue03": "#5E70C4",
        "primary-darkblue04": "#0D28A6",
        "primary-darkblue05": "#091B6F",
        "primary-limegreen01": "#DEF1DF",
        "primary-limegreen02": "#C9E7CA",
        "primary-limegreen03": "#92D094",
        "primary-limegreen04": "#5CB85F",
        "primary-limegreen05": "#3D7B3F",
        "neutral-01": "#FFFFFF",
        "neutral-02": "#D0D0D0",
        "neutral-03": "#8A8A8A",
        "neutral-04": "#3C3C3C",
        "neutral-05": "#151515",
        "alert-danger": "#252D3A",
        "alert-warning": "#F9CC00",
        "alert-success": "#73CA5C",
      }
    },
  },
  plugins: [],
};
