export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Redux", "Next.js", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "Express", "REST APIs", "GraphQL", "Microservices", "PostgreSQL", "MongoDB"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform", "Jenkins"] },
    { category: "Tools & Practices", items: ["Git", "Agile/Scrum", "Test-Driven Development", "Code Review", "System Design", "Performance Optimization"] },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gold-glow">
          Skills & Expertise
        </h1>
        <p className="text-xl text-gray-400">
          Tools and technologies I use to build exceptional digital experiences
        </p>
      </div>

      {/* Skills Categories */}
      <div className="space-y-12">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="card-geometric p-8 animate-on-scroll">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-jazinski-gold to-jazinski-gold-light flex items-center justify-center">
                <span className="text-2xl">
                  {skillGroup.category === "Frontend" && "🎨"}
                  {skillGroup.category === "Backend" && "⚙️"}
                  {skillGroup.category === "Cloud & DevOps" && "☁️"}
                  {skillGroup.category === "Tools & Practices" && "🛠️"}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                {skillGroup.category}
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border-2 border-jazinski-gold text-jazinski-gold rounded-lg transition-all duration-300 hover:bg-jazinski-gold hover:text-gray-900 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
