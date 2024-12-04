'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { scrollToSection, useActiveSection } from '../utils/scroll'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <div className="flex-1 flex items-center justify-center md:justify-start">
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
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95">
              <MobileNavLink href="#hero" isActive={activeSection === 'hero'} setIsMenuOpen={setIsMenuOpen}>About</MobileNavLink>
              <MobileNavLink href="#skills" isActive={activeSection === 'skills'} setIsMenuOpen={setIsMenuOpen}>Skills</MobileNavLink>
              <MobileNavLink href="#experience" isActive={activeSection === 'experience'} setIsMenuOpen={setIsMenuOpen}>Experience</MobileNavLink>
              <MobileNavLink href="#projects" isActive={activeSection === 'projects'} setIsMenuOpen={setIsMenuOpen}>Projects</MobileNavLink>
              <MobileNavLink href="#achievements" isActive={activeSection === 'achievements'} setIsMenuOpen={setIsMenuOpen}>Achievements</MobileNavLink>
              <MobileNavLink href="#contact" isActive={activeSection === 'contact'} setIsMenuOpen={setIsMenuOpen}>Contact</MobileNavLink>
            </div>
          </div>
        )}
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

const MobileNavLink = ({ 
  href, 
  children, 
  isActive,
  setIsMenuOpen 
}: { 
  href: string; 
  children: React.ReactNode;
  isActive: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}) => (
  <a 
    href={href}
    onClick={(e) => {
      e.preventDefault()
      scrollToSection(href)
      setIsMenuOpen(false)
    }}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      isActive 
        ? 'text-white bg-gray-800' 
        : 'text-gray-300 hover:text-white hover:bg-gray-700'
    } transition-colors duration-300`}
  >
    {children}
  </a>
)