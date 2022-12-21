/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,json}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: {
        primary: {
          DEFAULT: "#0066FF",
          100: "#F5F9FF",
          200: "#CCE0FF",
          300: "#A3C8FF",
          400: "#7AAFFF",
          500: "#5297FF",
          600: "#297EFF",
          700: "#0066FF",
          800: "#0050C7",
          900: "#00398F",
        },
      },

      utility: {
        action: "#009ce3",
        information: "#4d6680",
        confirmation: "#78a100",
        warning: "#f2b600",
        critical: "#e81c00",
        rating: "#ffc120",
        saved: "#e44753",
      },

      content: {
        contrast: "rgba(19, 41, 63, 1)",
        default: "rgba(19, 41, 63, 0.8)",
        subtle: "rgba(19, 41, 63, 0.65)",
        nonessential: "rgba(19, 41, 63, 0.4)",
      },

      layout: {
        divider: "rgba(167, 174, 181, 0.6)",
        level0: "rgba(255, 255, 255, 1)",
        level0accent: "rgba(237, 240, 242, 1)",
        level1: "rgba(249, 250, 251, 1)",
        level1accent: "rgba(228, 231, 235, 1)",
        level2: "rgba(242, 245, 247, 1)",
        level2accent: "rgba(220, 225, 230, 1)",
        level3: "rgba(235, 239, 242, 1)",
        level3accent: "rgba(211, 216, 222, 1)",
      },
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      // typography: ({ theme }) => ({
      //   DEFAULT: {
      //     css: {
      //       color: "red",
      //       span: {
      //         color: "red",
      //       },
      //     },
      //   },
      // }),
    },
  },
  plugins: [
    // require("@tailwindcss/typography")
  ],
};
