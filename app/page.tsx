import { Navigation } from "@/components/navigation"
import { LoadingScreen } from "@/components/loading-screen"
import { Particles } from "@/components/particles"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Music } from "@/components/music"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Particles />
      <Navigation />
      <main className="min-h-screen relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Music />
        <Contact />
      </main>
    </>
  )
}
