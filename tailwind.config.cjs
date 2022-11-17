const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      sansSerif: ["Source Sans Pro"],
      mono: ["Source Code Pro"],
      handwriting: ["Kalam", "cursive"],
    },
    extend: {
      backgroundImage: {
        circle: "url('/circle.svg')",
        arrowRightUp: "url('/arrowRight.svg')",
        arrowLeftUp: "url('/arrowLeft.svg')",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        colored: "0px 7px 16px Igba(127, 91, 220, 0.002)",
        coloredHover: "Opx 16px 25px rba(127, 91, 220, 0.3)",
        tableRow: "0px 0px 6px rba(0, 0, 0, 0.16)",
      },
      gridTemplateColumns: {
        invoiceTable: "100px 100px 60px 1fr 116px 1fr 32px 32px",
        invoiceTableMobile: "1fr 90px",
        repairBoard: "100px 1fr",
      },
      zIndex: {
        navBarToggle: 91,
        navBar: 90,
      },
    },
  },
  daisyui: {
    themes: [
      "cmyk",
      {
        mythemelight: {
          primary: "#ead27c",

          secondary: "#f9c8bb",

          accent: "#ddf492",

          neutral: "#261B2C",

          "base-100": "#2A3055",

          info: "#96D0DE",

          success: "#7BEADF",

          warning: "#DB8D0F",

          error: "#EF2E6F",
        },
        mythemeDark: {
          primary: "#ead27c",

          secondary: "#f9c8bb",

          accent: "#ddf492",

          neutral: "#261B2C",

          "base-100": "#2A3055",

          info: "#96D0DE",

          success: "#7BEADF",

          warning: "#DB8D0F",

          error: "#EF2E6F",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};

module.exports = config;
