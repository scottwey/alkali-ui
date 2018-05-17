import { injectGlobal } from "styled-components";
import {
  lumaSensitiveComplement,
  lumaSensitiveBrightness,
  readableComplement,
  darkenTransparentize as td,
  standardShadow
} from "~/utility/style";

const createTheme = (args = {}) => {
  const { colors: colorOverrides = {}, globalCss: globalOverrides = "" } = args;

  if (!globalOverrides) {
    injectGlobal`
      @import url("https://fonts.googleapis.com/css?family=Lora:400,700|Quicksand:300,400,500");
      @import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css");

      html,
      body {
        font-family: "Quicksand", serif;
        color: #52525f;
        background: white;
        background-size: cover;
        max-width: 100%;
        width: 100vw;
        min-width: 320px;
      }
    `;
  } else {
    injectGlobal`globalOverrides`;
  }

  const colors = {
    black: "#52525f",
    grey: "#dfded9",
    white: "#fdfdfc",
    red: "#d01a25",
    yellow: "#F0E68C",
    blue: "#5af",
    ...colorOverrides
  };

  const namedStyles = [
    "primary",
    "highlight",
    "warning",
    "error",
    "red",
    "blue",
    "black",
    "white",
    "yellow"
  ];

  colors.primary = colors.white;
  colors.highlight = colors.blue;
  colors.warning = colors.yellow;
  colors.error = colors.red;

  const buttonColors = namedStyles
    .concat(Object.keys(colors))
    .reduce((styleObject, name) => {
      const mainColor = colors[name];
      const complementColor = readableComplement(mainColor);
      const mainHoverColor = lumaSensitiveBrightness(mainColor);
      const complementHoverColor = readableComplement(mainHoverColor);
      styleObject[name] = {
        backgroundColor: mainColor,
        color: complementColor,
        "&:hover": {
          color: complementHoverColor,
          backgroundColor: mainHoverColor
        }
      };
      return styleObject;
    }, {});

  const buttonShadows = namedStyles
    .concat(Object.keys(colors))
    .reduce((styleObject, name) => {
      const color = colors[name];
      styleObject[name] = {
        boxShadow: standardShadow(color),
        "&:hover": {
          boxShadow: `1px 7px 14px ${td(0.85, 0.3, color)}, 1px 3px 6px ${td(
            0.9,
            0.7,
            color
          )}`
        },
        "&:active": {
          boxShadow: `0 2px 3px ${td(0.9, 0.3, color)}, 0 1px 1px ${td(
            0.95,
            0.7,
            color
          )}`
        }
      };
      return styleObject;
    }, {});

  colors.disabled = colors.grey;

  colors.darkText = colors.black;
  colors.lightText = colors.white;

  const textColors = {
    dark: {
      color: colors.darkText
    },
    light: {
      color: colors.lightText
    }
  };

  const cardColors = {
    dark: {
      color: colors.lightText,
      backgroundColor: colors.black
    },
    light: {
      color: colors.darkText,
      backgroundColor: colors.white
    }
  };

  const cardShadows = {
    dark: {
      boxShadow: standardShadow(colors.black)
    },
    light: {
      boxShadow: standardShadow(colors.white)
    }
  };

  const borderStyles = {
    border: {
      borderWidth: "1px",
      borderStyle: "solid"
    }
  };

  return {
    colors,
    buttonColors,
    buttonShadows,
    borderStyles,
    textColors,
    cardColors,
    cardShadows
  };
};

export default createTheme;
