import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "./animated-background"

const experiences = [
  {
    company: "Strata AI",
    logo: "SA",
    role: "Software Development Intern",
    location: "Ann Arbor, MI",
    period: "May 2025 - Aug 2025",
    highlights: [
      "Implemented 5+ microservices for an Electron-based CRM analytics platform to increase small business customer retention; attained <50 ms API latency with 99.99% uptime by leveraging Apache Kafka and Amazon EventBridge",
      "Accomplished real-time customer segmentation and churn prediction with up to a 20% increase in retention, utilizing ONNX Runtime in Python for mixed-precision inference and containerized auto scaling with AWS Fargate",
      "Ensured user privacy with 100% end-to-end encryption by implementing TLS 1.3 and server-side AES-256",
    ],
  },
  {
    company: "SLV Realty",
    logo: "SR",
    role: "Software Engineering Intern",
    location: "Greenville, SC",
    period: "May 2024 - Aug 2024",
    highlights: [
      "Developed a personalized home-listing notification pipeline used by 200+ buyers with over 50% 2-week retention, implementing custom filters including price, location, and school-zone, utilizing Flask and AWS Lambda",
      "Built a buyer-agent matching system, identifying the optimal agent for each listing by scoring agents on listing alignment and buyer preference with a LambdaMART model, and automatically connecting parties after a match",
      "Automated the import of 1,200+ listings into an internal dashboard by deploying a Python ETL tool",
    ],
  },
  {
    company: "Clemson University",
    logo: "CU",
    role: "Research Assistant",
    location: "Clemson, SC",
    period: "Jun 2023 – Aug 2023",
    highlights: [
      "Increased the relevant response rate of Parkinson's disease caregiver questions by 17% through developing a SVM-based query classification and contextualization pipeline based on 2000+ samples",
      "Achieved a 0.83 macro-F1 score by implementing a Bayesian hyperparameter search with Optuna TPESampler",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-20">
      <AnimatedBackground />
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-[#222228] border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-900/50"
            >
              <CardHeader>
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-lg bg-[#2a2a30] border border-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-gray-400">{exp.logo}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <CardTitle className="text-3xl text-white">{exp.company}</CardTitle>
                      <span className="text-base text-gray-400">{exp.period}</span>
                    </div>
                    <CardDescription className="text-lg text-gray-300">
                      {exp.role} · {exp.location}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-base text-gray-400 leading-relaxed flex gap-3">
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
