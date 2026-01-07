"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  id?: string
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, id, className = "" }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const sectionTop = rect.top + scrolled
      const offset = (scrolled - sectionTop) * speed

      setOffset(offset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <section ref={sectionRef} id={id} className={`relative ${className}`}>
      <div style={{ transform: `translateY(${offset}px)` }}>{children}</div>
    </section>
  )
}
