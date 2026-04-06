import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "HTML & CSS", level: 90, icon: "🌐" },
  { name: "JavaScript", level: 85, icon: "⚡" },
  { name: "Python", level: 85, icon: "🐍" },
  { name: "GitHub & Version Control", level: 88, icon: "🔀" },
  { name: "Linux Systems", level: 75, icon: "🐧" },
  { name: "Networking & Security", level: 70, icon: "🔒" },
  { name: "Problem Solving", level: 90, icon: "🧩" },
  { name: "Cloud Engineering", level: 40, icon: "☁️" },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">What I Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass-card rounded-xl p-5 transition-all duration-500 group ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-medium text-foreground text-sm">{skill.name}</span>
                </div>
                <span className="text-primary font-mono text-xs">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 0.1 + 0.3}s`,
                    boxShadow: "0 0 10px hsl(270 95% 65% / 0.5)",
                  }}
                />
              </div>

              {skill.name === "Cloud Engineering" && (
                <span className="mt-2 inline-block text-xs text-primary/70 font-mono">In Progress</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
