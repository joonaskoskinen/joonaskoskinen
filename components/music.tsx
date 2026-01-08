"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Play, ExternalLink, Award, Music2 } from "lucide-react"

const tracks = [
  {
    id: "rEiK2Q_14PA",
    title: "Waiting For You",
    artist: "PIGEON",
    type: "original",
    description: "Original EDM production",
    badge: null,
  },
  {
    id: "KMSA3FTe4NU",
    title: "Co-Production",
    artist: "PIGEON",
    type: "release",
    description: "Sony Music Finland release",
    badge: "Sony Music",
  },
  {
    id: "bJWM8JEOdNY",
    title: "Remix Contest Winner",
    artist: "PIGEON",
    type: "remix",
    description: "Official remix contest placement",
    badge: "Winner",
  },
  {
    id: "C2Y2N6Cp07A",
    title: "Remix",
    artist: "PIGEON",
    type: "remix",
    description: "Official remix",
    badge: null,
  },
  {
    id: "uj38wJSFRhE",
    title: "Remix",
    artist: "PIGEON",
    type: "remix",
    description: "Official remix",
    badge: null,
  },
]

export function Music() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section id="music" className="py-16 md:py-24 px-4 relative bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-10 md:mb-16">
            <div className="font-mono text-xs md:text-sm text-muted-foreground mb-4">
              <span className="text-accent">{">"}</span> play ./PIGEON/discography.wav
            </div>

            <h2 className="text-4xl md:text-7xl font-bold mb-4 text-balance">
              <span className="text-primary">PIGEON</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl">
              EDM producer with releases on Sony Music Finland and remix contest wins
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Track - Large Player */}
        <ScrollReveal>
          <Card className="mb-6 md:mb-8 border border-border overflow-hidden group hover:border-accent transition-all duration-300">
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 border-b border-border bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-destructive/50" />
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-accent/50" />
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary/50" />
              </div>
              <span className="font-mono text-xs text-muted-foreground ml-2 truncate">featured_track.mp4</span>
              <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                <span className="px-2 py-0.5 text-xs font-mono bg-primary/20 text-primary border border-primary/30">
                  Sony Music
                </span>
              </div>
            </div>

            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/KMSA3FTe4NU?rel=0"
                title="Sony Music Finland Release"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="p-3 md:p-4 border-t border-border bg-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-mono font-bold text-base md:text-lg">Co-Production</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Sony Music Finland release</p>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=KMSA3FTe4NU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-border hover:border-accent hover:text-accent transition-all font-mono text-sm w-full sm:w-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  YouTube
                </a>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* Track Grid - Single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-12">
          {tracks
            .filter((t) => t.id !== "KMSA3FTe4NU")
            .map((track, index) => (
              <ScrollReveal key={track.id} delay={index * 100}>
                <Card className="border border-border overflow-hidden group hover:border-accent transition-all duration-300 h-full">
                  <div className="flex items-center gap-2 px-3 md:px-4 py-2 border-b border-border bg-muted/30">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-destructive/50" />
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-accent/50" />
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary/50" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground ml-2 truncate">
                      {track.type}_{index + 1}.mp4
                    </span>
                    {track.badge && (
                      <div className="ml-auto flex items-center gap-1 flex-shrink-0">
                        <Award className="w-3 h-3 text-accent" />
                        <span className="px-2 py-0.5 text-xs font-mono bg-accent/20 text-accent border border-accent/30">
                          {track.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {activeVideo === track.id ? (
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${track.id}?autoplay=1&rel=0`}
                        title={track.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="aspect-video relative cursor-pointer group/thumb w-full"
                      onClick={() => setActiveVideo(track.id)}
                      aria-label={`Play ${track.title}`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${track.id}/maxresdefault.jpg`}
                        alt={track.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${track.id}/hqdefault.jpg`
                        }}
                      />
                      <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                        <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-accent flex items-center justify-center bg-background/80 group-hover/thumb:bg-accent transition-colors">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover/thumb:text-background transition-colors fill-current" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />
                    </button>
                  )}

                  <div className="p-3 md:p-4 border-t border-border">
                    <h3 className="font-mono font-bold text-sm md:text-base group-hover:text-accent transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{track.description}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
        </div>

        {/* Music stats - 2x2 grid on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: "Years", value: "10+", prefix: "exp:", icon: Music2 },
            { label: "Projects", value: "100+", prefix: "count:", icon: Music2 },
            { label: "Label", value: "Sony", prefix: "signed:", icon: Award },
            { label: "Status", value: "Active", prefix: "state:", icon: Play },
          ].map((stat, index) => (
            <ScrollReveal key={index} delay={500 + index * 100}>
              <div className="text-center p-4 md:p-6 bg-card border border-border hover:border-primary transition-colors group">
                <div className="font-mono text-xs text-muted-foreground mb-1 md:mb-2">{stat.prefix}</div>
                <div className="text-2xl md:text-3xl font-bold font-mono text-primary mb-1 group-hover:animate-text-glow">
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
