"use client"

import { useState, useEffect } from "react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Music", href: "#music" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-mono text-sm text-primary">
          <span className="text-muted-foreground">user@</span>jk<span className="animate-blink">_</span>
        </div>

        {/* Nav items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              aria-label={`Navigate to ${item.label}`}
              className={`px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all duration-300 border ${
                activeSection === item.href.slice(1)
                  ? "text-primary border-primary bg-primary/10"
                  : "text-muted-foreground border-transparent hover:text-primary hover:border-primary/50"
              }`}
            >
              <span className="text-primary/50 mr-1">0{index + 1}.</span>
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-foreground hover:text-primary transition-colors border border-primary/30 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                aria-label={`Navigate to ${item.label}`}
                className={`text-left font-mono text-sm uppercase tracking-wider transition-colors py-3 border-b border-border/50 ${
                  activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="text-primary/50 mr-2">0{index + 1}.</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
