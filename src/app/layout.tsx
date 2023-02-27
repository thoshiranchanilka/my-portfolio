'use client'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/nav'
import Footer from './components/footer'
import Head from './components/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head />
      <body>
          <ChakraProvider>
            <Nav />
            {children}
            <Footer />
          </ChakraProvider>
      </body>
    </html>
  )
}
