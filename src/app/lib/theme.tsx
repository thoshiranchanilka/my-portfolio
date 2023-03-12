import { extendTheme } from "@chakra-ui/react";

//Fonts
import '@fontsource/urbanist/900.css'
import '@fontsource/urbanist/400.css'
import '@fontsource/overpass-mono/400.css'

const theme = extendTheme({
    fonts: {
      heading: `'Urbanist', sans-serif`,
      body: `'Overpass Mono', monospace`,
    },
    
  })

export default theme;