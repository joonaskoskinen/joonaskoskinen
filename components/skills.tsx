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
            <div className="inline-block mb-6 px-6 py-2 border-2 border-primary/30 rounded-full">
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
              <Card className="group p-8 border-2 border-border hover:border-primary hover:scale-105 transition-all duration-500 bg-card relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-${category.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-${category.color}/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${category.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
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
