/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "GOLD-TEXT": "#F5B50A",
        "PRIMARY-TEXT": "#D0D5E1",
        "YELLOW-TEXT": "#DCF836",
        "RED-TEXT": "#DD003F",
        TYPOGRAPHY: "#FBFBFB",
        PARAGRAPH: "#CACACA",
        GRAY_COLOR: "#E1E1E1",
      },
      backgroundColor: {
        "SECONDARY-BG": "#020D18",
        "PRIMARY-BG": "#06121E",
        "HOVER-BG": "#1C3D5D",
        blackOverlay: "rgba(0, 0 ,0 ,0.9)",
      },
      fontFamily: {
        body: ["Ubuntu", "sans-serif"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(auto-fill, minmax(150px, 1fr))",
        14: "repeat(auto-fill, minmax(200px, 1fr))",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-200px)",
            transform: "translateX(-200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-out",
        "slide-fwd":
          " slide-fwd 0.30s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [],
};
