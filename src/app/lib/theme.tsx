import { extendTheme } from "@chakra-ui/react";

//Fonts
import '@fontsource/azeret-mono/800.css'
import '@fontsource/azeret-mono/300.css'
import '@fontsource/courier-prime/400.css'

const theme = extendTheme({
    fonts: {
      heading: `'Azeret Mono', monospace`,
      body: `'Courier Prime', monospace`,
    },
  })

export default theme;