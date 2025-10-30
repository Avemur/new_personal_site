import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "./animated-background"
import { Github, Globe } from "lucide-react"

const projects = [
  {
    name: "QuickDrop",
    tech: "C/C++, Crow, libsodium, ZSTD, TCP/UDP",
    period: "Mar 2025 – Jul 2025",
    website: "https://quickdrop.example.com",
    github: "https://github.com/avemur/quickdrop",
    highlights: [
      "Developed a cross-platform peer-to-peer file transfer system supporting 100+ concurrent peers with <5 ms latency through UDP-broadcast discovery, TCP handshake optimizations, and multi-threaded accept loops",
      "Optimized data transfer, achieving 150 MB/s throughput with 60% average ZSTD compression per I/O chunk",
      "Validated end-to-end encryption and authentication for 500k+ file chunks, maintaining <0.5 ms decryption latency with concurrent integrity checks, using Diffie-Hellman key exchange and ChaCha20-Poly encryption",
      "Enabled transfers to resume <100 ms after network interruptions by implementing per-chunk state persistence",
    ],
  },
  {
    name: "Optimize AI",
    tech: "Python, Flask, Next.js",
    period: "Feb 2025 – Mar 2025",
    website: "https://optimizeai.example.com",
    github: "https://github.com/avemur/optimize-ai",
    highlights: [
      "Reduced the compute cost of LLM calls by up to 30% through developing an algorithm to simplify complex queries with a multi-stage NLP-based query parser leveraging spaCy dependent parses and semantic role labeling",
      "Developed an energy-benchmarking dashboard to visualize lifetime and session-level savings in various units",
      "Implemented a token-based game module to reward calculated energy savings and incentivize user retention",
    ],
  },
  {
    name: "GestureMap",
    tech: "Python, MediaPipe, OpenCV, Tkinter",
    period: "Sep 2024 – Dec 2024",
    website: "https://gesturemap.example.com",
    github: "https://github.com/avemur/gesturemap",
    highlights: [
      "Enabled control of 20+ desktop actions with hand gestures with 95% accuracy through CV gesture classification",
      "Integrated ASL-based text input through utilizing MediaPipe Hands tracking for <50 ms frame translation latency",
      "Improved text input speed by 35% on average by integrating a seq2seq LSTM autocomplete module",
      "Minimized unknown sign errors for non-standard ASL words by implementing a k-NN–based semantic map",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-20">
      <AnimatedBackground />
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white">Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#222228] border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-900/50"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-3xl text-white">{project.name}</CardTitle>
                    <div className="flex gap-2">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#2a2a30] border border-gray-700 hover:border-gray-600 transition-colors"
                        aria-label="Visit website"
                      >
                        <Globe className="w-5 h-5 text-gray-400" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#2a2a30] border border-gray-700 hover:border-gray-600 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5 text-gray-400" />
                      </a>
                    </div>
                  </div>
                  <span className="text-base text-gray-400">{project.period}</span>
                </div>
                <CardDescription className="text-base font-mono text-gray-400">{project.tech}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-base text-gray-400 leading-relaxed flex gap-2">
                      <span className="text-gray-500 mt-1 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
