"use client"

import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <div className="inline-block mb-6 px-6 py-2 border-2 border-primary/30 rounded-full">
              <span className="text-sm text-primary font-mono uppercase tracking-widest">Career Path</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
              Work <span className="text-primary">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Professional journey across enterprise software and IT infrastructure
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Azets Insight */}
          <ScrollReveal delay={100}>
            <Card className="p-8 border-2 border-border hover:border-primary transition-all duration-300 group bg-card h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-48 h-24 mb-2">
                  <Image src="/images/azets-logo-p.jpg" alt="Azets logo" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Software Advisor</h3>
                  <p className="text-muted-foreground font-semibold">Azets Insight Oy</p>
                  <p className="text-sm text-muted-foreground mt-2">2025 - Present</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Business Central consulting, Azure infrastructure management, user management, and log monitoring for
                  enterprise clients
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* Istekki */}
          <ScrollReveal delay={200}>
            <Card className="p-8 border-2 border-border hover:border-primary transition-all duration-300 group bg-card h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-48 h-24 mb-2">
                  <Image src="/images/istekki.jpg" alt="Istekki logo" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Service Desk Specialist
                  </h3>
                  <p className="text-muted-foreground font-semibold">Istekki Oy</p>
                  <p className="text-sm text-muted-foreground mt-2">2024 - 2025</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  First-line IT support, system troubleshooting, and customer service for various organizations
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
