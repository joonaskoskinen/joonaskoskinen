<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const menu = ref(false)
const mode = ref('Design')
const accent = ref('lime')
const progress = ref(0)
const email = 'koskinenjoonas@yahoo.com'
const projects = [
 { id:'01', name:'Rootit', category:'DIGITAL SERVICES', mark:'rootit.', theme:'rootit', url:'https://rootit.vercel.app', repo:'rootit', text:'A service website that brings the offer, the interface and the next step together.', focus:'Service presentation / UI exploration', tags:['TypeScript','Web development','UI / UX'] },
 { id:'02', name:'Plushimo', category:'COMMERCE', mark:'plushimo', theme:'plushimo', url:'https://plushimo.vercel.app', repo:'plushimo', text:'A commerce-focused web project. A different visual language, built around products and discovery.', focus:'Product presentation / Web experience', tags:['TypeScript','Commerce','Interface design'] },
 { id:'03', name:'This portfolio', category:'INTERACTIVE WEB', mark:'JK®', theme:'portfolio', url:'#top', repo:'joonaskoskinen', text:'The site you are using. An editorial layout with a live interface playground and a lightweight Vue foundation.', focus:'Art direction / Interaction / Implementation', tags:['Vue 3','Vite','CSS'] }
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
   <a href="#top" class="brand" aria-label="Joonas Koskinen, home" @click="close">jk<span>®</span></a>
   <span class="nav-caption">SOFTWARE & INTERFACES<br>KUOPIO, FINLAND</span>
   <button class="menu-toggle" :aria-expanded="menu" aria-controls="navigation" @click="menu=!menu">{{ menu ? 'Close −' : 'Menu +' }}</button>
   <nav id="navigation" :class="{open:menu}" aria-label="Main navigation"><a href="#work" @click="close">Selected work <span>03</span></a><a href="#about" @click="close">About</a><a class="nav-contact" href="#contact" @click="close">Let’s talk ↗</a></nav>
  </header>
  <main id="main">
   <section id="top" class="hero wrap">
    <div class="hero-meta mono"><span><i class="dot"></i> JOONAS KOSKINEN</span><span>PORTFOLIO / {{ new Date().getFullYear() }}</span></div>
    <h1>Built with<br><span class="outline">intent.</span><span class="hero-asterisk" aria-hidden="true">✳</span></h1>
    <div class="hero-bottom"><p>I connect software,<br>people and <em>good interfaces.</em></p><div><p class="muted">Software advisor. Web builder.<br>Making the complex feel straightforward.</p><a class="pill primary" href="#work">Explore selected work <span>↘</span></a></div><span class="vertical-note mono">IDEA → INTERFACE → CODE</span></div>
    <div class="playground"><div class="playground-heading mono"><span>01 / INTERFACE PLAYGROUND</span><span>NOT A SCREENSHOT. TRY IT. ↙</span></div>
     <div class="lab-grid"><div class="lab-copy"><span class="mini-label">SMALL DETAILS. BIG DIFFERENCE.</span><h2>Good design<br>is a working<br><em>relationship.</em></h2><p>Change the perspective. Change the colour.<br>The interface responds.</p><div class="segmented" role="group" aria-label="Playground perspective"><button v-for="item in ['Design','Code','People']" :key="item" :aria-pressed="mode===item" @click="mode=item">{{ item }}</button></div></div>
     <div class="demo-stage"><div class="demo-window"><div class="window-bar"><span>● ● ●</span><span>intent / {{ mode.toLowerCase() }}</span><span>↗</span></div><div class="demo-body" aria-live="polite"><template v-if="mode==='Design'"><span class="mini-label">YOUR NEXT GOOD IDEA</span><div class="demo-orbit" aria-hidden="true"><span>✳</span><i></i><b>UI</b></div><h3>Less noise.<br>More purpose.</h3><div class="demo-stats"><span>01<br><small>Clear hierarchy</small></span><span>02<br><small>Useful interaction</small></span></div></template><template v-else-if="mode==='Code'"><span class="mini-label">UNDER THE SURFACE</span><pre><code><span>// a little clarity goes a long way</span>
const approach = {
  understand: 'the problem',
  design: 'the experience',
  build: 'with intent'
}

export default approach</code></pre><p class="code-note"><i class="dot"></i> Vue 3 · Vite · CSS</p></template><template v-else><span class="mini-label">START WITH THE PERSON</span><div class="people-icon" aria-hidden="true">↔</div><h3>Complex systems.<br>Human answers.</h3><p class="demo-description">The best interface starts with understanding what someone actually needs to do.</p></template></div><div class="window-footer"><span class="mono">MAKE IT YOURS</span><div class="swatches" role="group" aria-label="Accent colour"><button v-for="color in ['lime','lilac','peach']" :key="color" :class="color" :aria-label="color+' accent'" :aria-pressed="accent===color" @click="accent=color"></button></div></div></div><span class="stage-note mono">DESIGNED TO BE USED, NOT JUST SEEN.</span></div></div>
    </div>
   </section>
   <div class="ticker" aria-label="Focus areas"><span>SOFTWARE THINKING</span><i>✳</i><span>INTERFACE CRAFT</span><i>✳</i><span>HUMAN CONTEXT</span><i>✳</i></div>
   <section id="work" class="work wrap section"><div class="section-top mono"><span>02 / SELECTED WORK</span><span>A FEW THINGS I’VE BUILT</span></div><div class="section-title"><h2>Show, don’t<br><em>just tell.</em></h2><p class="muted">Different projects. One common thread:<br>turning an idea into something you can use.</p></div>
    <article v-for="project in projects" :key="project.id" class="project"><div class="project-art" :class="project.theme" aria-hidden="true"><div class="art-label mono">{{ project.category }} / {{ project.id }}</div><div class="art-browser"><div class="art-toolbar"><span>● ● ●</span><span>{{ project.name }}</span></div><div class="art-content"><span class="project-mark">{{ project.mark }}</span><span class="art-subtitle">{{ project.theme==='rootit' ? 'Technology. Made approachable.' : project.theme==='plushimo' ? 'A little more character.' : 'Built with intent.' }}</span><div class="art-shapes"><i></i><i></i><i></i></div><span class="art-cta">Explore the details ↗</span></div></div><span class="art-caption mono">STYLISED PROJECT STUDY — NOT A LIVE PREVIEW</span></div><div class="project-info"><span class="mono muted">{{ project.id }} / {{ project.category }}</span><h3>{{ project.name }}</h3><p>{{ project.text }}</p><p class="project-focus">{{ project.focus }}</p><ul class="tags" aria-label="Project topics"><li v-for="tag in project.tags" :key="tag">{{ tag }}</li></ul><div class="project-links"><a :href="project.url" :target="project.url.startsWith('https') ? '_blank' : undefined" rel="noopener noreferrer">{{ project.url.startsWith('https') ? 'Visit website ↗' : 'Back to the experience ↑' }}<span v-if="project.url.startsWith('https')" class="sr-only"> (opens in a new tab)</span></a><a :href="'https://github.com/joonaskoskinen/'+project.repo" target="_blank" rel="noopener noreferrer">Source ↗<span class="sr-only"> (opens in a new tab)</span></a></div></div></article>
   </section>
   <section id="about" class="about section"><div class="wrap"><div class="section-top mono"><span>03 / THE PERSON BEHIND THE PIXELS</span><span>KUOPIO, FI</span></div><div class="about-grid"><div><h2>Not just<br>the <em>front end.</em></h2><p class="about-lead">I like the space where technical problems meet human needs.</p><p class="muted">My background connects enterprise software, service operations and web development. I enjoy exploring UI/UX ideas — and making the result understandable, useful and real.</p><a class="text-link" href="https://github.com/joonaskoskinen" target="_blank" rel="noopener noreferrer">Explore my GitHub ↗<span class="sr-only"> (opens in a new tab)</span></a></div><div class="experience"><article><span class="mono">WORK / CURRENT</span><h3>Software Advisor</h3><p>Azets Insight Oy</p><small>Business Central · Azure · User management · System diagnostics</small></article><article><span class="mono">WORK / PREVIOUS</span><h3>Service Desk Specialist</h3><p>Istekki Oy</p><small>Microsoft 365 · Active Directory · ITIL · Incident management</small></article><article><span class="mono">EDUCATION</span><h3>ICT Engineering</h3><p>LAB University of Applied Sciences</p><small>Software, systems and user-focused technology</small></article></div></div><div class="toolbox"><span class="mono">IN MY TOOLBOX</span><ul class="tags"><li v-for="skill in skills" :key="skill">{{ skill }}</li></ul></div></div></section>
   <section id="contact" class="contact wrap section"><div class="section-top mono"><span>04 / NEXT CHAPTER</span><span>GOOD WORK STARTS WITH A CONVERSATION</span></div><h2>Something<br><em>click?</em><a :href="'mailto:'+email" aria-label="Email Joonas Koskinen">↗</a></h2><div class="contact-bottom"><p>Looking for someone who connects<br>technical thinking with an eye for interfaces?</p><a :href="'mailto:'+email">{{ email }} ↗</a></div></section>
  </main>
  <footer class="wrap footer mono"><span>© {{ new Date().getFullYear() }} JOONAS KOSKINEN</span><span>MADE WITH VUE. BUILT WITH INTENT.</span><a href="#top">BACK TO TOP ↑</a></footer>
 </div>
</template>
