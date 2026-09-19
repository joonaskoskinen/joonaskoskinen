"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, ChevronDown, Command, Download, Mail, MapPin, Menu, X } from "lucide-react"

const skills = ["Business Central", "Azure", "Microsoft 365", "Active Directory", "TypeScript", "Next.js", "SQL", "ITIL", "Log monitoring", "Cybersecurity"]
const projects = [
  { number: "01", name: "Plushimo", type: "E-commerce platform", url: "plushimo.com", text: "Performance-led commerce experience with a strong focus on discoverability and search.", tags: ["Next.js", "TypeScript", "SEO"] },
  { number: "02", name: "Summari", type: "Web solution", url: "summari.fi", text: "A flexible Finnish platform with custom subscriptions, payments and a production-ready foundation.", tags: ["Next.js", "PostgreSQL", "Stripe"] },
  { number: "03", name: "joonaskoskinen.com", type: "Personal system", url: "joonaskoskinen.com", text: "A living interface for the work, systems and ideas that shape my practice.", tags: ["React", "Design", "Engineering"] },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll) }, [])
  const close = () => setMenuOpen(false)
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
        <a className="wordmark" href="#top" onClick={close}><span>JK</span><b>JOONAS KOSKINEN</b></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a>
          <a className="nav-status" href="#contact"><i /> Available for conversations</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <div className="mobile-menu"><a href="#about" onClick={close}>About <ArrowUpRight /></a><a href="#work" onClick={close}>Selected work <ArrowUpRight /></a><a href="#contact" onClick={close}>Contact <ArrowUpRight /></a></div>}

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-copy"><p className="eyebrow"><span>01</span> IT ENGINEER / SOFTWARE PROFESSIONAL</p><h1>Building clarity<br /><em>into complexity.</em></h1><p className="hero-intro">I&apos;m Joonas — an IT engineer from Kuopio, Finland. I work where business software, cloud infrastructure and thoughtful digital experiences meet.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a><a className="text-link" href="mailto:hello@joonaskoskinen.com">Get in touch <span>↗</span></a></div></div>
          <div className="hero-console" aria-label="System profile"><div className="console-top"><span><i /><i /><i /></span><small><Command size={12} /> profile.sys</small><span className="console-live">LIVE</span></div><div className="console-body"><p className="console-comment">// current system state</p><p><strong>identity</strong> <span>Joonas Koskinen</span></p><p><strong>location</strong> <span>Kuopio, Finland</span></p><p><strong>focus</strong> <span>software + infrastructure</span></p><p><strong>status</strong> <span className="green">open_to_work(true)</span></p><div className="signal"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div></div><div className="console-footer"><span>SYS / 2026</span><span>41.4486° N, 2.1734° E</span></div></div><div className="hero-index">/01 <span>scroll to explore</span><ChevronDown /></div>
        </section>

        <section id="about" className="about section-frame section-space"><div className="section-label"><span>02</span> About the person</div><div className="about-grid"><div><h2>Technical thinking.<br /><em>Human perspective.</em></h2></div><div className="about-text"><p className="large-copy">I help teams make their systems work better — and make the work around them feel simpler.</p><p>My background spans enterprise software, service operations, cloud infrastructure and web development. I enjoy understanding the whole picture, then finding the precise point where a small, considered improvement creates a lasting difference.</p><div className="meta-row"><div><span>Based in</span><strong>Kuopio, FI</strong></div><div><span>Currently</span><strong>Software Advisor</strong></div><div><span>Studying</span><strong>ICT Engineering</strong></div></div></div></div></section>

        <section className="skills section-frame section-space"><div className="section-label"><span>03</span> The toolkit</div><div className="skills-layout"><h2>A system of<br /><em>curiosity.</em></h2><div className="skills-orbit">{skills.map((skill, i) => <div className={`skill-node node-${i}`} key={skill}><span>{String(i + 1).padStart(2, "0")}</span>{skill}</div>)}</div></div></section>

        <section id="work" className="work section-frame section-space"><div className="section-label"><span>04</span> Selected work</div><div className="work-heading"><h2>Things I&apos;ve<br /><em>helped shape.</em></h2><p>Digital products and systems built with equal parts practical thinking and care.</p></div><div className="project-list">{projects.map(project => <a className="project-card" href={`https://${project.url}`} target="_blank" rel="noreferrer" key={project.name}><div className="project-number">{project.number}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name} <ArrowUpRight /></h3><p>{project.text}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-url">{project.url}</div></a>)}</div></section>

        <section className="experience section-frame section-space"><div className="section-label"><span>05</span> Experience</div><div className="timeline"><article><span>NOW</span><div><h3>Software Advisor</h3><p>Azets Insight Oy</p><small>Business Central · Azure · User management · System diagnostics</small></div></article><article><span>PAST</span><div><h3>Service Desk Specialist</h3><p>Istekki Oy</p><small>Microsoft 365 · Active Directory · ITIL · Incident management</small></div></article><article><span>EDU</span><div><h3>ICT Engineering</h3><p>LAB University of Applied Sciences</p><small>Building a deeper understanding of technology, people and systems.</small></div></article></div></section>

        <section id="contact" className="contact section-frame"><div className="section-label"><span>06</span> Open channel</div><h2>Let&apos;s make<br /><em>something useful.</em></h2><a className="contact-email" href="mailto:hello@joonaskoskinen.com">hello@joonaskoskinen.com <ArrowUpRight /></a><div className="contact-footer"><span><MapPin size={15} /> Kuopio, Finland</span><span><Mail size={15} /> Available for the right conversation</span></div></section>
      </main>
      <footer className="footer section-frame"><span>© {new Date().getFullYear()} Joonas Koskinen</span><span className="footer-mark">Designed + engineered with intent.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
