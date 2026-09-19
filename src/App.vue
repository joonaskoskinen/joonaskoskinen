<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpRight, Menu, X, MapPin, Mail, ChevronDown } from 'lucide-vue-next'

const menuOpen = ref(false)
const scrolled = ref(false)
const skills = ['Business Central', 'Azure', 'Microsoft 365', 'Active Directory', 'TypeScript', 'Vue 3', 'SQL', 'ITIL', 'Log monitoring', 'Cybersecurity']
const projects = [
  { number: '01', name: 'Plushimo', type: 'E-commerce platform', url: 'plushimo.com', text: 'A practical commerce platform with emphasis on discoverability, performance and a clear buying flow.', tags: ['Next.js', 'TypeScript', 'SEO'] },
  { number: '02', name: 'Summari', type: 'Web solution', url: 'summari.fi', text: 'A Finnish web service with custom subscriptions, payments and a production-ready foundation.', tags: ['Next.js', 'PostgreSQL', 'Stripe'] },
  { number: '03', name: 'Rootit', type: 'Digital service', url: 'rootit.fi', text: 'A focused digital product for presenting services, content and useful tools in a simple interface.', tags: ['Vue', 'UX', 'Web development'] },
  { number: '04', name: 'joonaskoskinen.com', type: 'Personal site', url: 'joonaskoskinen.com', text: 'A small personal site for work, experiments and selected projects.', tags: ['Vue 3', 'Vite', 'UI'] },
]
const updateScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', updateScroll))
onUnmounted(() => window.removeEventListener('scroll', updateScroll))
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <div class="site-shell">
    <header class="site-nav" :class="{ 'site-nav-scrolled': scrolled }">
      <a class="wordmark" href="#top" @click="closeMenu"><span>JK</span><b>JOONAS KOSKINEN</b></a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a>
        <a class="nav-status" href="mailto:koskinenjoonas@yahoo.com"><i /> koskinenjoonas@yahoo.com</a>
      </nav>
      <button class="menu-button" :aria-label="menuOpen ? 'Close menu' : 'Open menu'" @click="menuOpen = !menuOpen"><X v-if="menuOpen" /><Menu v-else /></button>
    </header>
    <div v-if="menuOpen" class="mobile-menu">
      <a href="#about" @click="closeMenu">About <ArrowUpRight /></a><a href="#work" @click="closeMenu">Work <ArrowUpRight /></a><a href="#contact" @click="closeMenu">Contact <ArrowUpRight /></a>
    </div>

    <main id="top">
      <section class="hero section-frame">
        <div class="hero-copy"><p class="eyebrow"><span>01</span> IT ENGINEER / SOFTWARE PROFESSIONAL</p><h1>Joonas<br /><em>Koskinen.</em></h1><p class="hero-intro">IT engineer from Kuopio, Finland. I work with business software, cloud services and digital products.</p><div class="hero-actions"><a class="button button-primary" href="#work">View projects <ArrowUpRight /></a><a class="text-link" href="mailto:koskinenjoonas@yahoo.com">koskinenjoonas@yahoo.com <span>↗</span></a></div></div>
        <div class="hero-console" aria-label="Profile details"><div class="console-top"><span><i /><i /><i /></span><small>profile.txt</small><span class="console-live">OPEN</span></div><div class="console-body"><p class="console-comment">// profile</p><p><strong>name</strong> <span>Joonas Koskinen</span></p><p><strong>location</strong> <span>Kuopio, Finland</span></p><p><strong>work</strong> <span>software advisor</span></p><p><strong>stack</strong> <span class="green">cloud + web + support</span></p><div class="signal"><span v-for="n in 12" :key="n" /></div></div><div class="console-footer"><span>UI / UX / CODE</span><span>FINLAND</span></div></div><div class="hero-index">/01 <span>scroll to explore</span><ChevronDown /></div>
      </section>

      <section id="about" class="about section-frame section-space"><div class="section-label"><span>02</span> About</div><div class="about-grid"><div><h2>Useful software.<br /><em>Clear interfaces.</em></h2></div><div class="about-text"><p class="large-copy">I like interfaces that are easy to understand and systems that are easy to maintain.</p><p>My background spans enterprise software, service operations, cloud infrastructure and web development. I focus on solving the actual problem, removing friction and keeping the result understandable.</p><div class="meta-row"><div><span>Based in</span><strong>Kuopio, FI</strong></div><div><span>Currently</span><strong>Software Advisor</strong></div><div><span>Studying</span><strong>ICT Engineering</strong></div></div></div></div></section>

      <section class="skills section-frame section-space"><div class="section-label"><span>03</span> Skills</div><div class="skills-layout"><h2>Tools I<br /><em>use.</em></h2><div class="skills-orbit"><div v-for="(skill, i) in skills" :key="skill" :class="`skill-node node-${i}`"><span>{{ String(i + 1).padStart(2, '0') }}</span>{{ skill }}</div></div></div></section>

      <section id="work" class="work section-frame section-space"><div class="section-label"><span>04</span> Projects</div><div class="work-heading"><h2>Selected<br /><em>projects.</em></h2><p>Websites and software projects I have worked on.</p></div><div class="project-list"><a v-for="project in projects" :key="project.name" class="project-card" :href="`https://${project.url}`" target="_blank" rel="noreferrer"><div class="project-number">{{ project.number }}</div><div class="project-main"><p class="project-type">{{ project.type }}</p><h3>{{ project.name }} <ArrowUpRight /></h3><p>{{ project.text }}</p><div class="tags"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div></div><div class="project-url">{{ project.url }}</div></a></div></section>

      <section class="experience section-frame section-space"><div class="section-label"><span>05</span> Experience</div><div class="timeline"><article><span>NOW</span><div><h3>Software Advisor</h3><p>Azets Insight Oy</p><small>Business Central · Azure · User management · System diagnostics</small></div></article><article><span>PAST</span><div><h3>Service Desk Specialist</h3><p>Istekki Oy</p><small>Microsoft 365 · Active Directory · ITIL · Incident management</small></div></article><article><span>EDU</span><div><h3>ICT Engineering</h3><p>LAB University of Applied Sciences</p><small>Software, systems and user-focused technology.</small></div></article></div></section>

      <section id="contact" class="contact section-frame"><div class="section-label"><span>06</span> Contact</div><h2>Have a project<br /><em>in mind?</em></h2><a class="contact-email" href="mailto:koskinenjoonas@yahoo.com">koskinenjoonas@yahoo.com <ArrowUpRight /></a><div class="contact-footer"><span><MapPin :size="15" /> Kuopio, Finland</span><span><Mail :size="15" /> Email me</span></div></section>
    </main>
    <footer class="footer section-frame"><span>© {{ new Date().getFullYear() }} Joonas Koskinen</span><span>Vue 3 + Vite</span><a href="#top">Back to top ↑</a></footer>
  </div>
</template>
