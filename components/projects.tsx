"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, Briefcase, TrendingUp, Shield, Database, GraduationCap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const workExperience = [
  {
    title: "Software Advisor",
    company: "Azets Insight Oy",
    period: "Current Role",
    description: "Business software consulting focused on Microsoft Dynamics NAV/Business Central",
    achievements: [
      "User management and optimization for Business Central clients",
      "System health monitoring through log analysis and diagnostics",
      "SPOC (Single Point of Contact) support for enterprise customers",
      "Azure infrastructure troubleshooting and maintenance",
    ],
    skills: ["Business Central", "Azure", "User Management", "Log Monitoring", "M365"],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Service Desk Specialist",
    company: "Istekki Oy",
    period: "Previous Role",
    description: "IT support and system administration following ITIL best practices",
    achievements: [
      "Active Directory user and group management",
      "Azure AD integration and troubleshooting",
      "Microsoft 365 administration and support",
      "Incident management and resolution tracking",
    ],
    skills: ["Azure AD", "Active Directory", "ITIL", "M365 Admin", "Service Desk"],
    icon: <Shield className="w-6 h-6" />,
  },
]

const projects = [
  {
    title: "Plushimo",
    url: "plushimo.com",
    description: "E-commerce platform with focus on performance and search optimization",
    caseStudy: {
      challenge: "Low organic traffic and poor search engine visibility",
      solution: "Implemented comprehensive SEO strategy with Next.js optimization",
      result: "30% increase in organic traffic within 3 months",
    },
    tech: ["Next.js", "TypeScript", "React", "SEO Optimization"],
    metrics: [{ label: "SEO Improvement", value: "+30%" }],
  },
  {
    title: "Summari",
    url: "summari.fi",
    description: "Finnish web solution with robust backend architecture",
    caseStudy: {
      challenge: "Need for flexible payment system beyond traditional Shopify store",
      solution: "Implemented custom Stripe integration supporting subscriptions, one-time payments, and secure checkout flows",
      result: "Deployed production-ready platform",
    },
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Authentication"],
    metrics: [],
  },
]

const securityInterests = [
  {
    title: "Log Analysis & Monitoring",
    description: "Experience in monitoring Business Central logs for security events and system anomalies",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "User & Access Management",
    description: "Managing user permissions and access compliance in enterprise environments",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Azure Security",
    description: "Working with Azure AD, conditional access policies, and cloud security best practices",
    icon: <TrendingUp className="w-5 h-5" />,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Work Experience Section */}
        <div>
          <ScrollReveal>
            <div className="mb-16">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">{">"}</span> cat ./experience/work.json
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
                <span className="text-primary">Work</span> Experience
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                IT professional with hands-on experience in enterprise software and cloud infrastructure
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="group relative overflow-hidden border border-border hover:border-primary transition-all duration-500 bg-card">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-accent/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground ml-2">
                      {job.company.toLowerCase().replace(/ /g, "-")}.sh
                    </span>
                  </div>

                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 border border-primary bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                          <div className="text-primary group-hover:text-background transition-colors">{job.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold font-mono group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 mt-1">
                            <p className="text-lg font-semibold text-accent font-mono">{job.company}</p>
                            <span className="hidden md:inline text-muted-foreground">|</span>
                            <p className="text-sm text-muted-foreground font-mono">{job.period}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{job.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground font-mono uppercase tracking-wider mb-3">
                        <span className="text-primary">$</span> achievements
                      </h4>
                      <ul className="space-y-2 font-mono text-sm">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 group/item">
                            <span className="text-primary mt-0.5">{">"}</span>
                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm font-mono border border-primary/30 hover:bg-primary hover:text-background transition-all cursor-default"
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
            <div className="mt-8 p-6 border border-accent/30 bg-accent/5 hover:border-accent transition-all duration-300">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-accent" />
                <p className="text-lg font-mono">
                  <span className="font-semibold text-accent">[STUDYING]</span>
                  <span className="text-muted-foreground"> ICT Engineering @ LAB University of Applied Sciences</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Cybersecurity Interests Section */}
        <div>
          <ScrollReveal>
            <div className="mb-16">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">{">"}</span> sudo ./security_focus.sh
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
                <span className="text-primary">Cybersecurity</span> Focus
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Passionate about security, monitoring, and protecting enterprise systems
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {securityInterests.map((interest, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group relative overflow-hidden border border-border hover:border-accent transition-all duration-500 bg-card p-6">
                  <div className="w-12 h-12 border border-accent bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-all">
                    <div className="text-accent group-hover:text-background transition-colors">{interest.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold font-mono mb-3 group-hover:text-accent transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{interest.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Web Projects Section */}
        <div>
          <ScrollReveal>
            <div className="mb-16">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">{">"}</span> ls ./projects/web/
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
                <span className="text-primary">Web</span> Projects
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Full-stack applications with measurable results and real-world impact
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="group relative overflow-hidden border border-border hover:border-primary transition-all duration-500 bg-card">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-accent/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground ml-2">{project.url}</span>
                  </div>

                  <div className="p-8">
                    {/* Project number */}
                    <div className="text-5xl font-bold font-mono text-primary/20 mb-4">0{index + 1}</div>

                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold font-mono group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>

                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition-colors inline-block mb-4 font-mono text-sm hover:underline"
                    >
                      https://{project.url}
                    </a>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    {/* Case study details */}
                    <div className="mb-6 p-4 border border-border bg-muted/20">
                      <h4 className="text-sm font-semibold text-foreground font-mono uppercase tracking-wider mb-3">
                        <span className="text-primary">//</span> Case Study
                      </h4>
                      <div className="space-y-2 text-sm font-mono">
                        <p>
                          <span className="text-accent">challenge:</span>{" "}
                          <span className="text-muted-foreground">{project.caseStudy.challenge}</span>
                        </p>
                        <p>
                          <span className="text-primary">solution:</span>{" "}
                          <span className="text-muted-foreground">{project.caseStudy.solution}</span>
                        </p>
                        <p>
                          <span className="text-accent">result:</span>{" "}
                          <span className="text-foreground font-semibold">{project.caseStudy.result}</span>
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    {project.metrics.length > 0 && (
                      <div className="flex gap-4 mb-6">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="flex-1 p-3 border border-primary/30 bg-primary/5">
                            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">
                              {metric.label}
                            </p>
                            <p className="text-2xl font-bold font-mono text-primary">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm font-mono border border-primary/30 hover:bg-primary hover:text-background transition-all cursor-default"
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
