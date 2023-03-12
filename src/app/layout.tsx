'use client'
import theme from './lib/theme'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/nav'
import Footer from './components/footer'
import Head from './components/head'

import '@fontsource/urbanist/900.css'
import '@fontsource/urbanist/400.css'
import '@fontsource/overpass-mono/400.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head />
      <body>
          <ChakraProvider theme={theme}>
            <Nav />
            {children}
            <Footer />
          </ChakraProvider>
      </body>
    </html>
  )
}
