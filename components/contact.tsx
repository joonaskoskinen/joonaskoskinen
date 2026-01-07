"use client"

import { Linkedin, Mail } from "lucide-react"

const socials = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/koskinenjoonas/", color: "hover:text-accent" },
  { name: "Email", icon: Mail, url: "mailto:koskinenjoonas@yahoo.com", color: "hover:text-primary" },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative min-h-[60vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          {/* Big heading */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance">
            {"LET'S"} <span className="text-primary">CREATE</span>
          </h2>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 text-accent">SOMETHING</h2>

          {/* Contact text */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Got a project in mind? Whether {"it's"} web development or music production, {"let's"} make it happen.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 border-2 border-border rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:border-current`}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Joonas Koskinen. Built with Next.js & passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
