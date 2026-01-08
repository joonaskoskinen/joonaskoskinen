"use client"

import { Linkedin, Mail, Terminal } from "lucide-react"

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/koskinenjoonas/",
    color: "hover:text-accent hover:border-accent",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:koskinenjoonas@yahoo.com",
    color: "hover:text-primary hover:border-primary",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative min-h-[60vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          {/* Terminal prompt */}
          <div className="font-mono text-sm text-muted-foreground mb-8">
            <span className="text-primary">{">"}</span> ./initiate_contact.sh
          </div>

          {/* Big heading */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance font-mono">
            {"LET'S"} <span className="text-primary animate-text-glow">CONNECT</span>
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-accent font-mono">
            <span className="text-muted-foreground">{"//"}</span> BUILD SOMETHING
          </h2>

          {/* Contact text */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Got a project in mind? Whether {"it's"} web development, IT consulting, or music production, {"let's"} make
            it happen.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 border border-border bg-card flex items-center justify-center transition-all duration-300 ${social.color} group`}
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-mono">
              <Terminal className="w-4 h-4 text-primary" />
              <span>© {new Date().getFullYear()} Joonas Koskinen</span>
              <span className="text-primary">|</span>
              <span>Built with Next.js</span>
              <span className="animate-blink text-primary">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
