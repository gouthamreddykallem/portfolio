'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      
      // Get all sections
      const sections = ['hero', 'skills', 'experience', 'projects', 'achievements', 'contact']
      const sectionElements = sections.map(section => 
        document.getElementById(section)
      )

      // Find the current section
      const scrollPosition = window.scrollY + 100 // Offset for better timing

      sectionElements.forEach((section) => {
        if (!section) return
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              GOUTHAM REDDY KALLEM
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#hero" isActive={activeSection === 'hero'}>About</NavLink>
            <NavLink href="#skills" isActive={activeSection === 'skills'}>Skills</NavLink>
            <NavLink href="#experience" isActive={activeSection === 'experience'}>Experience</NavLink>
            <NavLink href="#projects" isActive={activeSection === 'projects'}>Projects</NavLink>
            <NavLink href="#achievements" isActive={activeSection === 'achievements'}>Achievements</NavLink>
            <NavLink href="#contact" isActive={activeSection === 'contact'}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <Link 
    href={href} 
    className={`transition-colors duration-300 ${
      isActive 
        ? 'text-blue-400 font-medium' 
        : 'text-gray-300 hover:text-white'
    }`}
  >
    {children}
  </Link>
)