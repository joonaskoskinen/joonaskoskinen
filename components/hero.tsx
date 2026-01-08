"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Software Advisor // Cybersecurity Enthusiast // IT Specialist"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [mounted])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 matrix-bg"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.75 0.18 175) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.75 0.18 175) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glowing orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="hidden md:block absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/50" />
      <div className="hidden md:block absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/50" />
      <div className="hidden md:block absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/50" />
      <div className="hidden md:block absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/50" />

      <div className="relative z-10 max-w-6xl w-full">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="font-mono text-xs md:text-sm text-muted-foreground mb-4">
            <span className="text-primary">~</span> ./portfolio.sh --user="Joonas Koskinen"
          </div>

          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight mb-2">
              <span className="text-foreground">Joonas</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-primary animate-text-glow">
              Koskinen
            </h1>
          </div>

          <div className="font-mono text-sm md:text-xl text-muted-foreground mb-6 md:mb-8 min-h-[2rem]">
            <span className="text-primary">{">"}</span> {typedText}
            <span className="animate-blink text-primary">_</span>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="flex items-center gap-3 group cursor-pointer border border-primary/30 bg-card/50 p-3 md:p-4 hover:border-primary hover:bg-primary/5 transition-all">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-primary bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all flex-shrink-0">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-background"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">status://work</p>
                <p className="text-base md:text-lg font-semibold font-mono group-hover:text-primary transition-colors truncate">
                  Azets Insight
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 group cursor-pointer border border-accent/30 bg-card/50 p-3 md:p-4 hover:border-accent hover:bg-accent/5 transition-all">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-accent bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all flex-shrink-0">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-accent group-hover:text-background"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">focus://security</p>
                <p className="text-base md:text-lg font-semibold font-mono group-hover:text-accent transition-colors truncate">
                  Cybersecurity
                </p>
              </div>
            </div>
          </div>

          <p className="text-base md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-pretty mb-8 md:mb-12">
            Software advisor specializing in{" "}
            <span className="text-primary font-mono font-semibold">Microsoft Business Central</span>,{" "}
            <span className="text-primary font-mono font-semibold">Azure</span>, and{" "}
            <span className="text-primary font-mono font-semibold">M365</span> at Azets Insight. Passionate about
            cybersecurity, system optimization, and building secure web applications.
          </p>

          <div className="mb-24 md:mb-32 relative">
            <div className="border border-primary bg-card/80 backdrop-blur-sm p-4 md:p-6 animate-glow">
              <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 md:w-10 md:h-10 border border-primary bg-primary/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-mono font-bold mb-2 text-primary">
                    <span className="text-accent">[ALERT]</span> Actively Seeking New Opportunities
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    I'm actively seeking new job opportunities, particularly in{" "}
                    <span className="text-foreground font-mono font-semibold">1st–2nd level IT support roles</span>. I'm
                    motivated to develop my career in the IT field and am especially interested in{" "}
                    <span className="text-foreground font-mono font-semibold">cybersecurity</span>, where I want to
                    deepen my expertise and continuously learn through hands-on practical work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <span className="sr-only">Scroll down</span>
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
