"use client"

import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const skillCategories = [
  {
    title: "Business Software",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    skills: [
      "Microsoft Dynamics NAV/Business Central",
      "User Management & Optimization",
      "SPOC Support Model",
      "ERP System Administration",
      "Business Software Consulting",
    ],
    color: "primary",
  },
  {
    title: "Cloud & Infrastructure",
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
    skills: [
      "Microsoft Azure",
      "Azure Active Directory",
      "Microsoft 365 Administration",
      "Cloud Infrastructure",
      "ITIL Service Management",
    ],
    color: "accent",
  },
  {
    title: "Security & Monitoring",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    skills: [
      "Log Analysis & Diagnostics",
      "System Health Monitoring",
      "Access Control & Permissions",
      "Security Best Practices",
      "Incident Response",
    ],
    color: "primary",
  },
  {
    title: "Full-Stack Development",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["Next.js & React", "TypeScript", "Node.js Backend", "PostgreSQL Database", "SEO Optimization"],
    color: "accent",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <div className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-primary">{">"}</span> ls -la ./skills/
            </div>

            <div className="inline-block mb-6 px-4 py-1 border border-primary/50 bg-primary/5">
              <span className="text-sm text-primary font-mono uppercase tracking-widest">Technical Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
              <span className="text-primary">Skills</span> & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Specialized in enterprise software, cloud infrastructure, and modern web development
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="group border border-border hover:border-primary transition-all duration-500 bg-card relative overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground ml-2">
                    {category.title.toLowerCase().replace(/ /g, "-")}.sh
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 border border-${category.color} bg-${category.color}/10 flex items-center justify-center group-hover:bg-${category.color} transition-all duration-300`}
                    >
                      <div className={`text-${category.color} group-hover:text-background transition-colors`}>
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold font-mono group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-2 font-mono text-sm">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 group/item">
                        <span className={`text-${category.color}`}>$</span>
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-all">
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
