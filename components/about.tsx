"use client"

import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <ScrollReveal>
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
                About <span className="text-primary">Me</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm an IT specialist with a passion for both technology and music. Currently studying{" "}
                  <span className="text-foreground font-semibold">ICT Engineering</span>, I combine technical expertise
                  with creative production.
                </p>

                <p>
                  My professional journey has taken me through service desk operations at{" "}
                  <span className="text-primary font-semibold">Istekki Oy</span> and business software consulting at{" "}
                  <span className="text-primary font-semibold">Azets Insight Oy</span>, where I've worked extensively
                  with Microsoft technologies, Azure infrastructure, and enterprise solutions.
                </p>

                <p>
                  Outside of IT, I've been producing electronic music since 2016, with releases on{" "}
                  <span className="text-accent font-semibold">Sony Music Finland</span>. This dual expertise allows me
                  to approach problems from both analytical and creative perspectives.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side - Quick facts cards */}
          <div className="space-y-4">
            <ScrollReveal delay={200}>
              <Card className="p-6 border-2 border-border hover:border-primary transition-all duration-300 group bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
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
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Current Role</p>
                    <p className="text-lg font-semibold">IT Specialist & Student</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="p-6 border-2 border-border hover:border-accent transition-all duration-300 group bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
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
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Music Career</p>
                    <p className="text-lg font-semibold">Producer since 2016</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="p-6 border-2 border-border hover:border-primary transition-all duration-300 group bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
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
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-lg font-semibold">Kuopio, Finland</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Card className="p-6 border-2 border-border hover:border-accent transition-all duration-300 group bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
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
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Approach</p>
                    <p className="text-lg font-semibold">Tech Meets Creativity</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-24">
            <h3 className="text-3xl font-bold mb-12 text-center">Work Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Azets Insight */}
              <Card className="p-8 border-2 border-border hover:border-primary transition-all duration-300 group bg-card">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-48 h-24 mb-2">
                    <Image src="/images/azets-logo-p.jpg" alt="Azets logo" fill className="object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Software Advisor</h4>
                    <p className="text-muted-foreground">Azets Insight Oy</p>
                    <p className="text-sm text-muted-foreground mt-2">2023 - Present</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Business Central consulting, Azure infrastructure management, user management, and log monitoring
                    for enterprise clients
                  </p>
                </div>
              </Card>

              {/* Istekki */}
              <Card className="p-8 border-2 border-border hover:border-primary transition-all duration-300 group bg-card">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-48 h-24 mb-2">
                    <Image src="/images/istekki.jpg" alt="Istekki logo" fill className="object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Service Desk Specialist</h4>
                    <p className="text-muted-foreground">Istekki Oy</p>
                    <p className="text-sm text-muted-foreground mt-2">2021 - 2023</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    First-line IT support, system troubleshooting, and customer service for various organizations
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
