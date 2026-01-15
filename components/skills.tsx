 

const skillCategories = [
  {
    category: "Languages",
    skills: [
      "Python",
      "C++",
      "Java",
      "C#",
      "Swift",
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "Flutter",
      "Dart",
      "SQL",
      "MATLAB",
    ],
  },
  {
    category: "Frameworks",
    skills: [
      "Flask",
      "Django",
      "React Native",
      "Electron",
      "Node.js",
      "SwiftUI",
      "CoreML",
      "ARKit",
      "Spring",
      "Svelte",
      "Qt",
      "Crow",
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      "Git",
      "Docker",
      "VS Code",
      "Power BI",
      "Xcode",
      "Heroku",
      "Jenkins",
      "Kubernetes",
      "AWS",
      "Jupyter Notebook",
      "Eclipse",
    ],
  },
  {
    category: "Libraries",
    skills: [
      "TensorFlow",
      "Pandas",
      "Tkinter",
      "Scikit",
      "NumPy",
      "Matplotlib",
      "Beautiful Soup",
      "Pygame",
      "PyTest",
      "Jinja2",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-20">
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-5">
              <h3 className="text-2xl font-medium text-white">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-md bg-[#222228] border border-gray-800 text-gray-300 text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
