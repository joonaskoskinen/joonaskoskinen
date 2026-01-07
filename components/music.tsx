"use client"

import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const musicHighlights = [
  {
    year: "2016",
    milestone: "Started producing electronic music",
    description: "Began journey into music production, learning synthesis and sound design",
  },
  {
    year: "2018",
    milestone: "Developed signature sound",
    description: "Crafted unique production style blending multiple genres",
  },
  {
    year: "2020",
    milestone: "Professional projects",
    description: "Produced tracks for various artists and commercial projects",
  },
  {
    year: "2023",
    milestone: "Major label release",
    description: "Released music on Sony Music Finland, reaching wider audiences",
  },
  {
    year: "2024-",
    milestone: "Ongoing evolution",
    description: "Continuously pushing boundaries in production and mixing",
  },
]

export function Music() {
  return (
    <section id="music" className="py-24 px-4 relative bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
              <span className="text-accent">Music</span> Production
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Creating experiences since 2016, with releases on Sony Music Finland
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <div className="space-y-8">
            {musicHighlights.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative">
                  <Card className="md:ml-20 p-8 border-2 border-border hover:border-accent transition-all duration-300 group bg-card">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-10 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block group-hover:bg-accent transition-colors" />

                    {/* Year badge */}
                    <div className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-lg mb-4 font-bold text-lg">
                      {item.year}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {item.milestone}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Music stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Years", value: "8+" },
            { label: "Projects", value: "100+" },
            { label: "Genres", value: "Multi" },
            { label: "Status", value: "Active" },
          ].map((stat, index) => (
            <ScrollReveal key={index} delay={500 + index * 100}>
              <div className="text-center p-6 bg-card border-2 border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
