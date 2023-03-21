'use client'
import Hero from './components/hero'
import About from './components/about'
import Feature from './components/feature'
import Skills from './components/skills'
import Work from './components/work'
import Hire from './components/hire'
import Youtube from './components/youtube'
import Contact from './components/contact'


export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="EwZo3L6BAR_o-LhyxRZLtBOr5nHTjPBzOa5UE_Monjg" />
      </Head>
      <main>
        
        <Hero />
        <About />
        <Feature />
        <Skills />
        <Work />
        <Hire />
        <Youtube />
        <Contact />
        
      </main>
    </>
  )
}
