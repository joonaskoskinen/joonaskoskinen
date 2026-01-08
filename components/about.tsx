"use client"

import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <ScrollReveal>
            <div>
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">{">"}</span> cat about.txt
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
                About <span className="text-primary">Me</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm an IT specialist with a passion for both technology and music. Currently studying{" "}
                  <span className="text-foreground font-mono font-semibold">ICT Engineering</span>, I combine technical
                  expertise with creative production.
                </p>

                <p>
                  My professional journey has taken me through service desk operations at{" "}
                  <span className="text-primary font-mono font-semibold">Istekki Oy</span> and business software
                  consulting at <span className="text-primary font-mono font-semibold">Azets Insight Oy</span>, where
                  I've worked extensively with Microsoft technologies, Azure infrastructure, and enterprise solutions.
                </p>

                <p>
                  Outside of IT, I've been producing electronic music since 2016, with releases on{" "}
                  <span className="text-accent font-mono font-semibold">Sony Music Finland</span>. This dual expertise
                  allows me to approach problems from both analytical and creative perspectives.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side - Quick facts cards */}
          <div className="space-y-4">
            <ScrollReveal delay={200}>
              <Card className="p-6 border border-primary/30 hover:border-primary transition-all duration-300 group bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-primary bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                    <svg
                      className="w-6 h-6 text-primary group-hover:text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">status.role</p>
                    <p className="text-lg font-semibold font-mono">IT Specialist & Student</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="p-6 border border-accent/30 hover:border-accent transition-all duration-300 group bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-accent bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all">
                    <svg
                      className="w-6 h-6 text-accent group-hover:text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">hobby.music</p>
                    <p className="text-lg font-semibold font-mono">Producer since 2016</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="p-6 border border-primary/30 hover:border-primary transition-all duration-300 group bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-primary bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                    <svg
                      className="w-6 h-6 text-primary group-hover:text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">location.current</p>
                    <p className="text-lg font-semibold font-mono">Kuopio, Finland</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Card className="p-6 border border-accent/30 hover:border-accent transition-all duration-300 group bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-accent bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all">
                    <svg
                      className="w-6 h-6 text-accent group-hover:text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">approach.style</p>
                    <p className="text-lg font-semibold font-mono">Tech Meets Creativity</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
