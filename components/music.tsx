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
            <div className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-accent">{">"}</span> play ./music/timeline.wav
            </div>

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
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-accent/30 hidden md:block" />

          <div className="space-y-6">
            {musicHighlights.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative">
                  <Card className="md:ml-20 border border-border hover:border-accent transition-all duration-300 group bg-card overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-accent/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground ml-2">milestone_{item.year}.log</span>
                    </div>

                    <div className="p-6">
                      {/* Timeline dot */}
                      <div className="absolute left-6 top-12 w-4 h-4 border-2 border-accent bg-background hidden md:block group-hover:bg-accent transition-colors" />

                      {/* Year badge */}
                      <div className="inline-block px-3 py-1 border border-accent bg-accent/10 text-accent mb-4 font-mono font-bold">
                        {item.year}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-accent transition-colors">
                        {item.milestone}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Music stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { label: "Years", value: "8+", prefix: "exp:" },
            { label: "Projects", value: "100+", prefix: "count:" },
            { label: "Genres", value: "Multi", prefix: "type:" },
            { label: "Status", value: "Active", prefix: "state:" },
          ].map((stat, index) => (
            <ScrollReveal key={index} delay={500 + index * 100}>
              <div className="text-center p-6 bg-card border border-border hover:border-primary transition-colors group">
                <div className="font-mono text-xs text-muted-foreground mb-2">{stat.prefix}</div>
                <div className="text-3xl font-bold font-mono text-primary mb-1 group-hover:animate-text-glow">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
