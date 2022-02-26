import { Platform } from "react-native";

const fontConfig = {
  web: {
    regular: {
      fontFamily: "BebasNeue-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "BebasNeue-Regular",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "BebasNeue-Regular",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "BebasNeue-Regular",
      fontWeight: "normal",
    },
  },
  ios: {
    regular: {
      fontFamily: "System",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "System",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "System",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "System",
      fontWeight: "normal",
    },
  },
  android: {
    regular: {
      fontFamily: "BebasNeue-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "BebasNeue-Regular",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "BebasNeue-Regular",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "BebasNeue-Regular",
      fontWeight: "normal",
    },
  },
};

export default function configureFonts(config) {
  const fonts = Platform.select({ ...fontConfig, ...config });
  return fonts;
}
