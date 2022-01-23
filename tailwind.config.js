module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-pattern": "url('./assets/login-bg.jpg')",
      },
      colors: {
        darkColor: "#462200",
        primary: {
          main: "#FDF2FF",
          light: "#757ce8",
          main2: "#3f50b5",
          dark: "#002884",
          contrastText: "#fff",
        },
        secondary: {
          main: "#8F12FE",
          light: "#ff7961",
          main2: "#f44336",
          dark: "#ba000d",
          contrastText: "#000",
        },
      },
    },
  },
  plugins: [],
};
