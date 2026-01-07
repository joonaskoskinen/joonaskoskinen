"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2 hover:scale-105 transition-transform duration-300">
              <span className="text-foreground">Joonas</span>
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-primary hover:text-accent transition-colors duration-300">
              Koskinen
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg group-hover:bg-accent group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">IT Specialist</p>
                <p className="text-xl font-semibold group-hover:text-primary transition-colors">
                  ICT Engineering Student
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 bg-accent flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Producer</p>
                <p className="text-xl font-semibold group-hover:text-accent transition-colors">Since 2016</p>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed text-pretty mb-32">
            IT specialist with hands-on experience in Azure, M365, and Business Central. Currently studying ICT
            Engineering while producing music signed to major labels.
          </p>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
