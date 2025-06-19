module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
  theme: {
    extend: {
      animation: {
        scroll: "scroll 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
}
