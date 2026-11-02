<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const menu = ref(false)
const mode = ref('Design')
const accent = ref('lime')
const setAccent = (color) => { accent.value = color }
const progress = ref(0)
const email = 'koskinenjoonas@yahoo.com'
const colorCode = `const accent = ref('lime')
const setAccent = (color) => {
  accent.value = color
}`
const projects = [
 { id:'01', name:'Rootit', category:'SERVICE WEBSITE', mark:'rootit.', theme:'rootit', url:'https://rootit.vercel.app', repo:'rootit', text:'A website for presenting IT and web services. This project reflects my interest in service page layouts and contact interfaces.', focus:'Project type: service website', tags:['TypeScript','Web development','UI / UX'] },
 { id:'02', name:'Plushimo', category:'COMMERCE WEBSITE', mark:'plushimo', theme:'plushimo', url:'https://plushimo.vercel.app', repo:'plushimo', text:'A commerce-focused website project. Open the website to view the interface, or browse the implementation on GitHub.', focus:'Project type: commerce website', tags:['TypeScript','Commerce','Web development'] },
 { id:'03', name:'This portfolio', category:'PERSONAL WEBSITE', mark:'JK', theme:'portfolio', url:'#top', repo:'joonaskoskinen', text:'My portfolio, built with Vue 3 and Vite. It includes responsive layouts, a mobile menu and a demo with switchable views and accent colours.', focus:'Implementation: Vue components, reactive state and CSS', tags:['Vue 3','Vite','CSS'] }
]
const skills = ['Business Central','Azure','Microsoft 365','Active Directory','TypeScript','Vue 3','SQL','ITIL','Log monitoring','Cybersecurity']
const update = () => { const height = document.documentElement.scrollHeight - window.innerHeight; progress.value = height > 0 ? window.scrollY / height * 100 : 0 }
const close = () => { menu.value = false }
const escape = (event) => { if (event.key === 'Escape') close() }
onMounted(() => { update(); window.addEventListener('scroll',update,{passive:true}); window.addEventListener('resize',update); window.addEventListener('keydown',escape) })
onUnmounted(() => { window.removeEventListener('scroll',update); window.removeEventListener('resize',update); window.removeEventListener('keydown',escape) })
</script>

<template>
 <div :data-accent="accent">
  <a class="skip" href="#main">Skip to content</a>
  <div class="reading-progress" :style="{width:progress+'%'}" aria-hidden="true"></div>
  <header class="nav wrap">
   <a href="#top" class="brand" aria-label="Joonas Koskinen, home" @click="close">jk</a>
   <span class="nav-caption">UI/UX & WEB DEVELOPMENT<br>KUOPIO, FINLAND</span>
   <button class="menu-toggle" :aria-expanded="menu" aria-controls="navigation" @click="menu=!menu">{{ menu ? 'Close −' : 'Menu +' }}</button>
   <nav id="navigation" :class="{open:menu}" aria-label="Main navigation"><a href="#work" @click="close">Projects <span>03</span></a><a href="#about" @click="close">About me</a><a class="nav-contact" href="#contact" @click="close">Contact ↗</a></nav>
  </header>
  <main id="main">
   <section id="top" class="hero wrap">
    <div class="hero-meta mono"><span><i class="dot"></i> JOONAS KOSKINEN</span><span>PORTFOLIO / {{ new Date().getFullYear() }}</span></div>
    <h1>UI/UX design<br><span class="outline">& web development.</span></h1>
    <div class="hero-bottom"><p>I’m Joonas Koskinen,<br>a software advisor based<br>in Kuopio, Finland.</p><div><p class="muted">I love UI/UX design and web development. I enjoy designing layouts, exploring interactions and building websites.</p><div class="hero-actions"><a class="pill primary" href="#work">View my projects <span>↘</span></a><a class="text-link" href="#contact">Get in touch ↗</a></div></div></div>
    <div class="playground"><div class="playground-heading mono"><span>01 / INTERACTIVE UI DEMO</span><span>VUE 3 + CSS</span></div>
     <div class="lab-grid"><div class="lab-copy"><h2>Explore<br>the <em>interface.</em></h2><p>Switch between the interface and its colour-selection code. Use the colour buttons to change the accent across this page.</p><div class="segmented" role="group" aria-label="Demo view"><button v-for="item in ['Design','Code']" :key="item" :aria-pressed="mode===item" @click="mode=item">{{ item }}</button></div></div>
     <div class="demo-stage"><div class="demo-window"><div class="window-bar"><span aria-hidden="true">● ● ●</span><span>demo / {{ mode.toLowerCase() }}</span><span aria-hidden="true">↗</span></div><div class="demo-body" aria-live="polite"><template v-if="mode==='Design'"><span class="mini-label">COMPONENT PREVIEW</span><div class="demo-orbit" aria-hidden="true"><span>✳</span><i></i><b>UI</b></div><h3>Layout &<br>visual hierarchy</h3><div class="demo-stats"><span>01<br><small>Typography</small></span><span>02<br><small>Colour</small></span></div></template><template v-else><span class="mini-label">ACCENT COLOUR STATE</span><pre><code>{{ colorCode }}</code></pre><p class="demo-description">The colour buttons call setAccent(color). The page uses the selected value through its data-accent attribute and CSS variables.</p></template></div><div class="window-footer"><span class="mono">ACCENT COLOUR</span><div class="swatches" role="group" aria-label="Accent colour"><button v-for="color in ['lime','lilac','peach']" :key="color" :class="color" :aria-label="color+' accent'" :aria-pressed="accent===color" @click="setAccent(color)"></button></div></div></div></div></div>
    </div>
   </section>
   <div class="ticker" aria-label="Areas of interest and experience"><span>UI/UX DESIGN</span><i aria-hidden="true">✳</i><span>WEB DEVELOPMENT</span><i aria-hidden="true">✳</i><span>SOFTWARE SUPPORT</span><i aria-hidden="true">✳</i></div>
   <section id="work" class="work wrap section"><div class="section-top mono"><span>02 / PROJECTS</span></div><div class="section-title"><h2>Selected<br><em>projects.</em></h2><p class="muted">Websites and interface projects I’ve built.</p></div>
    <article v-for="project in projects" :key="project.id" class="project"><div class="project-art" :class="project.theme"><div class="art-label mono" aria-hidden="true">{{ project.category }} / {{ project.id }}</div><div class="art-browser" aria-hidden="true"><div class="art-toolbar"><span>● ● ●</span><span>{{ project.name }}</span></div><div class="art-content"><span class="project-mark">{{ project.mark }}</span><span class="art-subtitle">{{ project.category }}</span><div class="art-shapes"><i></i><i></i><i></i></div></div></div><span class="art-caption mono">PROJECT ILLUSTRATION — NOT A SCREENSHOT</span></div><div class="project-info"><span class="mono muted">{{ project.id }} / {{ project.category }}</span><h3>{{ project.name }}</h3><p>{{ project.text }}</p><p class="project-focus">{{ project.focus }}</p><ul class="tags" aria-label="Project topics"><li v-for="tag in project.tags" :key="tag">{{ tag }}</li></ul><div class="project-links"><a :href="project.url" :target="project.url.startsWith('https') ? '_blank' : undefined" rel="noopener noreferrer">{{ project.url.startsWith('https') ? 'Visit website ↗' : 'View this page ↑' }}<span v-if="project.url.startsWith('https')" class="sr-only"> (opens in a new tab)</span></a><a :href="'https://github.com/joonaskoskinen/'+project.repo" target="_blank" rel="noopener noreferrer">View source ↗<span class="sr-only"> (opens in a new tab)</span></a></div></div></article>
   </section>
   <section id="about" class="about section"><div class="wrap"><div class="section-top mono"><span>03 / ABOUT ME</span><span>KUOPIO, FI</span></div><div class="about-grid"><div><h2>About <em>me.</em></h2><p class="about-lead">I’m particularly interested in UI/UX design and building web interfaces.</p><p class="muted">I enjoy working on layouts, typography and interactions, then turning those ideas into websites. My work experience includes enterprise software support and service desk operations.</p><a class="text-link" href="https://github.com/joonaskoskinen" target="_blank" rel="noopener noreferrer">View my GitHub ↗<span class="sr-only"> (opens in a new tab)</span></a></div><div class="experience"><article><span class="mono">WORK / CURRENT</span><h3>Software Advisor</h3><p>Azets Insight Oy</p><small>Business Central · Azure · User management · System diagnostics</small></article><article><span class="mono">WORK / PREVIOUS</span><h3>Service Desk Specialist</h3><p>Istekki Oy</p><small>Microsoft 365 · Active Directory · ITIL · Incident management</small></article><article><span class="mono">EDUCATION</span><h3>ICT Engineering</h3><p>LAB University of Applied Sciences</p><small>Software and systems studies</small></article></div></div><div class="toolbox"><span class="mono">TECHNOLOGIES & SKILLS</span><ul class="tags"><li v-for="skill in skills" :key="skill">{{ skill }}</li></ul></div></div></section>
   <section id="contact" class="contact wrap section"><div class="section-top mono"><span>04 / CONTACT</span></div><h2>Contact<a :href="'mailto:'+email" aria-label="Email Joonas Koskinen">↗</a></h2><div class="contact-bottom"><p>For job opportunities or questions about my projects,<br>you can reach me by email.</p><a :href="'mailto:'+email">{{ email }} ↗</a></div></section>
  </main>
  <footer class="wrap footer mono"><span>© {{ new Date().getFullYear() }} JOONAS KOSKINEN</span><span>BUILT WITH VUE 3 AND VITE</span><a href="#top">BACK TO TOP ↑</a></footer>
 </div>
</template>

<style scoped>
.hero h1{font-size:clamp(48px,7.4vw,104px);line-height:1.04;letter-spacing:-.065em;overflow-wrap:normal}
.hero-bottom{grid-template-columns:1fr 1fr;align-items:start}.hero-bottom .muted{max-width:430px}.hero-actions{display:flex;align-items:center;gap:24px;flex-wrap:wrap}.hero-actions .text-link{margin-top:24px}.lab-copy>p{max-width:350px}.demo-stage{padding-bottom:24px}.contact h2{font-size:clamp(64px,10vw,140px);padding-right:160px}.swatches button{position:relative}.swatches button::after{content:'';position:absolute;inset:-11px}
@media(max-width:700px){.hero h1{font-size:clamp(36px,7.8vw,55px)}.hero-bottom{grid-template-columns:1fr}.contact h2{font-size:clamp(45px,11vw,75px);padding-right:78px}.hero-actions{gap:20px}.demo-stage{padding-bottom:10px}}
</style>
