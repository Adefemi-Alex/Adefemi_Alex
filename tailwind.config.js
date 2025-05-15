/** @type {import('tailwindcss').Config} */
// theme: "#744fef",
  // theme: "#6F00FF",
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: "#B5FF6D",
        dark_bg:"#242424",
        dark_card: ""
      },
      boxShadow: {
        full: "0 0 4px #000",
      },
     keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        scrollXRev: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" }
        }
      },
      animation: {
        scrollX: "scrollX var(--duration) linear infinite",
        scrollXRev: "scrollX var(--duration) linear infinite",
        scrollY: "scrollY var(--duration) linear infinite"
      }
    },
  },
  plugins: [],
};


