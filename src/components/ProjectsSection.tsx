import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Gubhela Holdings",
    description: "A professional business website showcasing corporate services, built with modern web technologies and responsive design.",
    url: "https://gubhelaholdings.com",
  },
  {
    title: "Vumbl",
    description: "An innovative digital platform designed to connect users with seamless experiences through a clean, intuitive interface.",
    url: "https://vumbl.com",
  },
  {
    title: "The Hustle",
    description: "A dynamic web application focused on entrepreneurship and productivity, featuring engaging content and modern aesthetics.",
    url: "https://thehustle.com",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">My Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Gradient header */}
              <div className="h-40 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(270_95%_65%/0.1),transparent_70%)]" />
                <span className="text-4xl font-bold gradient-text opacity-30 group-hover:opacity-60 transition-opacity">
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Visit Website
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
