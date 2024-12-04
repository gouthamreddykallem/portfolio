'use client'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Credits from './components/Credits'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <Hero />
      <Skills />
       <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Credits/>
      <Footer /> 
    </main>
  )
}
