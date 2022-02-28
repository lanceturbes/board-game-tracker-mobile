import configureFonts from "./fonts";

const lightTheme = {
  dark: false,
  mode: "adaptive",
  roundness: 8,
  colors: {
    primary: "#fff8e6",
    accent: "#bfe5d9",
    background: "#8a624c",
    surface: "#8a624c",
    text: "#fff8e6",
    disabled: "#493928",
    placeholder: "#88624d",
    backdrop: "#fff8e6",
    onSurface: "#282828",
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
};

const darkTheme = {
  dark: true,
  mode: "adaptive",
  roundness: 8,
  colors: {
    primary: "#fff8e6",
    accent: "#bfe5d9",
    background: "#8a624c",
    surface: "#8a624c",
    text: "#fff8e6",
    disabled: "#493928",
    placeholder: "#88624d",
    backdrop: "#fff8e6",
    onSurface: "#282828",
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
};

module.exports = { darkTheme, lightTheme };
