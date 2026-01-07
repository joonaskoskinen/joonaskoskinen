"use client"

import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const skillCategories = [
  {
    title: "IT & Cloud",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    skills: ["Microsoft Azure", "Active Directory", "Microsoft 365", "ITIL", "Service Desk"],
    color: "primary",
  },
  {
    title: "Business Software",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    skills: ["Microsoft Dynamics NAV", "Business Central", "SPOC", "ERP Systems"],
    color: "accent",
  },
  {
    title: "Development",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    color: "primary",
  },
  {
    title: "Music Production",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
    skills: ["Sound Design", "Mixing & Mastering", "Electronic Production", "DAW Expertise"],
    color: "accent",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
              <span className="text-primary">Skills</span> & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A diverse skill set spanning IT infrastructure, business solutions, and creative production
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="group p-8 border-2 border-border hover:border-primary hover:scale-105 transition-all duration-500 bg-card relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-${category.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-${category.color}/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${category.color} group-hover:scale-110 transition-all duration-300`}
                  >
                    <div className={`text-${category.color} group-hover:text-background transition-colors`}>
                      {category.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 group/item">
                        <div
                          className={`w-2 h-2 rounded-full bg-${category.color} group-hover/item:scale-150 transition-transform`}
                        />
                        <span className="text-muted-foreground group-hover/item:text-foreground group-hover/item:translate-x-1 transition-all">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
