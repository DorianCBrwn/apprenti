const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      backgroundImage: {
        circle: "url(/circle.svg)",
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
        invoiceTable: "100px 100px 1fr 116px 32px 32px",
      },
    },
  },
  daisyui: {
    themes: [
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
