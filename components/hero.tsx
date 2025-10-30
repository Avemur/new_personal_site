import { AnimatedBackground } from "./animated-background"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <AnimatedBackground />
      <div className="relative z-10 max-w-5xl w-full space-y-10">
        <h1 className="text-7xl md:text-9xl font-light tracking-tight text-balance text-white">Anirudh Vemuri</h1>
        <p className="text-3xl md:text-4xl text-gray-300 font-light">Computer Science Student & Software Engineer</p>

        <div className="space-y-5 text-xl md:text-2xl leading-relaxed text-gray-400 max-w-3xl">
          <p>
            I'm a Computer Science student at the University of Michigan with a passion for building high-performance
            systems and intelligent applications. My work spans from low-level systems programming to machine learning
            and full-stack development.
          </p>
          <p>
            Currently exploring the intersection of AI and systems engineering, with experience in microservices
            architecture, real-time data processing, and end-to-end encryption.
          </p>
        </div>
      </div>
    </section>
  )
}
