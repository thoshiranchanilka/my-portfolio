import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  fonts: {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: {
      100: "#d9f0Ed", //Cyan 100
      500: "#0099fe", //Blue 300
      900: "#338c85", //Teal 400
    },
  },
});

export default theme;
