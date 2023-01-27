import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgba(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0  scrollbar-track-gray-400/40 scrollbar-thumb-[#f7ab0a]/60 scrollbar-thin'>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>      
        {/* Header */ }
        <Header />
        {/* Hero */ }
        <Hero />
        {/* About */ }
        <About />
        {/* Experience */ }
        <Experience />
        {/* Skills */ }
        <Skills />
        {/* Projects */ }
        <Projects />
        {/* Contact Me */}
        <Contact />
      </main>
    </div>
  )
}
