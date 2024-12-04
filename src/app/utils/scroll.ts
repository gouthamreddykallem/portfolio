// src/utils/scroll.ts
export const scrollToSection = (elementId: string) => {
    // Remove the '#' from the elementId if it exists
    const id = elementId.replace('#', '')
    const element = document.getElementById(id)
    
    if (element) {
      // Get the navbar height to offset the scroll position
      const navbar = document.querySelector('nav')
      const offset = navbar ? navbar.offsetHeight : 0
      
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  
  // Custom hook for handling active section
  import { useState, useEffect } from 'react'
  
  export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('')
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section[id]')
        // const scrollPosition = window.scrollY + 100 // Offset for better accuracy
  
        sections.forEach((section) => {
          const element = section as HTMLElement
          const { top, bottom } = element.getBoundingClientRect()
          
          if (top <= 100 && bottom >= 100) {
            setActiveSection(element.id)
          }
        })
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    return activeSection
  }