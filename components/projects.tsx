"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, Briefcase } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const workExperience = [
  {
    title: "Service Desk Specialist",
    company: "Istekki Oy",
    description: "IT support and system administration",
    skills: ["Azure", "Active Directory", "ITIL", "Microsoft 365"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Software Advisor",
    company: "Azets Insight Oy",
    description: "Business software consulting and support",
    skills: ["Microsoft NAV/Business Central", "SPOC", "Microsoft 365"],
    color: "from-accent/20 to-primary/20",
  },
]

const projects = [
  {
    title: "Plushimo",
    url: "plushimo.com",
    description: "A modern e-commerce platform with sleek design and seamless user experience",
    tech: ["Next.js", "React", "TypeScript"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Summari",
    url: "summari.fi",
    description: "Finnish web solution delivering clean, functional design and robust backend",
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "from-accent/20 to-primary/20",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-24">
        <div>
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
                <span className="text-primary">Work</span> Experience
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                IT professional with experience in service desk operations and business software consulting
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {workExperience.map((job, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="group relative overflow-hidden border-2 border-border hover:border-primary hover:scale-105 transition-all duration-500 bg-card p-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                      <div className="text-sm font-mono text-accent">{job.company}</div>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{job.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20 hover:bg-primary hover:text-background transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-8 p-6 bg-accent/5 border-2 border-accent/20 rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <p className="text-lg">
                  <span className="font-semibold text-accent">Currently studying</span>
                  <span className="text-muted-foreground"> Information and Communication Technology Engineering</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Web Projects section */}
        <div>
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
                <span className="text-primary">Web</span> Projects
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Building full-stack applications with modern technologies and best practices
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="group relative overflow-hidden border-2 border-border hover:border-primary hover:scale-105 hover:rotate-1 transition-all duration-500 bg-card p-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-primary/20 mb-4 group-hover:scale-110 transition-transform">
                      0{index + 1}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>

                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition-colors inline-block mb-4 font-mono text-sm hover:underline"
                    >
                      {project.url}
                    </a>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20 hover:bg-primary hover:text-background transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
