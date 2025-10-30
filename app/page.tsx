import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f]">
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </main>
  )
}
