import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
 

export function Education() {
  return (
    <section id="education" className="relative px-6 py-20">
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white">Education</h2>

        <Card className="bg-[#222228] border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-900/50">
          <CardHeader>
            <div className="flex items-start gap-5">
              <div className="w-20 h-20 rounded-lg bg-[#2a2a30] border border-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/michigan.jpeg" alt="University of Michigan" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <CardTitle className="text-3xl text-white">University of Michigan</CardTitle>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <span className="text-base text-gray-400">Expected May 2027</span>
                    <span className="text-base text-gray-400">Ann Arbor, MI</span>
                  </div>
                </div>
                <CardDescription className="text-lg text-gray-300">
                  B.S.E. in Computer Science, Minor in Mathematics
                </CardDescription>
                <p className="text-base text-gray-400 mt-2">
                  <span className="font-medium">GPA:</span> 3.87
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 text-lg text-white">Relevant Coursework</h4>
              <p className="text-base text-gray-400 leading-relaxed">
                Data Structures and Algorithms, Computer Organization, Object Oriented Programming, Discrete Math,
                Linear Algebra, Introduction to Probability Theory, Multivariable and Vector Calculus
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-lg text-white">Activities</h4>
              <p className="text-base text-gray-400 leading-relaxed">
                Honors Program, Michigan Hackers Advanced ML Team, Michigan Data Science Team
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
