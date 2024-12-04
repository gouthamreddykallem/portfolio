'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { scrollToSection, useActiveSection } from '../utils/scroll'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
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

const NavLink = ({ 
  href, 
  children, 
  isActive 
}: { 
  href: string; 
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <a 
    href={href}
    onClick={(e) => {
      e.preventDefault()
      scrollToSection(href)
    }}
    className={`${
      isActive 
        ? 'text-white border-b-2 border-white' 
        : 'text-gray-300 hover:text-white'
    } transition-colors duration-300`}
  >
    {children}
  </a>
)