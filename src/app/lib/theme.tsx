import { extendTheme } from "@chakra-ui/react";
//Font Weights
import "@fontsource/abeezee";
import "@fontsource/montserrat";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'ABeeZee', sans-serif`,
  },
  colors: {
    brand: {
      100: "#fbf38e",
      200: "#faf177",
      300: "#f9ee61",
      400: "#f8ec4a",
      500: "#f7e934",
      600: "#f6e71d",
      700: "#ddd01a",
      800: "#FF9900", // base yellow
      900: "#aca214", 
    },
  },
});

export default theme;
