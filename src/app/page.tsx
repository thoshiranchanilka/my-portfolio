'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import Hero from './components/hero'
import About from './components/about'
import Feature from './components/feature'
import Skills from './components/skills'
import Work from './components/work'
import Contact from './components/contact'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Feature />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  )
}
