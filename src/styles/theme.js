import { extendTheme } from "native-base";
import fontConfig from "./fonts";

export default extendTheme({
  ...fontConfig,
  components: {
    Heading: {
      baseStyle: {
        color: "#fff8e5",
      },
    },
    Text: {
      baseStyle: {
        color: "#fff8e5",
      },
    },
  },
  colors: {
    customBrown: "#8a624a",
    customPearl: "#fff8e5",
  },
});
