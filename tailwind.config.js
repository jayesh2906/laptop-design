module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "620px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    boxShadow: {
      inner: "inset 0 0px 3px 1px",
    },
    extend: {
      backgroundImage: {
        coverImage: "url('/src/assets/cover.jpg')",
        coverBlur: "url('/src/assets/coverBlur.jpg')",
        wallpaper: "url('/src/assets/wallpaper.jpg')",
        celebrate: "url('/src/assets/celebrate.jpg')",
      },
      fontSize: {
        xxs: ["0.50rem", { lineHeight: ".8rem" }],
      },
    },
  },
  plugins: [],
};
