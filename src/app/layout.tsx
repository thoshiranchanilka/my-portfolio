'use client'
import theme from './lib/theme'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/nav'
import Footer from './components/footer'
import Head from './components/head'

import '@fontsource/azeret-mono/800.css'
import '@fontsource/courier-prime/400.css'

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
