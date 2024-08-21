import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["e-Ukraine", "Roboto"],
        serif: ["e-Ukraine", "Roboto"],
        mono: ["e-Ukraine", "Roboto"],
        head: ["e-UkraineHead", "Roboto"],
      },
      colors: {
        "coral-reef": {
          "50": "#f9f7f3",
          "100": "#f1ede3",
          "200": "#e1d9c7",
          "300": "#caba9c",
          "400": "#b9a17e",
          "500": "#ab8b64",
          "600": "#9e7a58",
          "700": "#83634b",
          "800": "#6b5141",
          "900": "#584436",
          "950": "#2e231c",
        },
      },
    },
  },
};
