import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Code, Shield, Cloud } from "lucide-react";

const timelineEvents = [
  {
    year: "2022",
    icon: GraduationCap,
    title: "High School Diploma",
    description:
      "Kwanda completed his High School Diploma, where he studied Mathematics, Physical Sciences, and English — laying the analytical foundation for his tech career.",
  },
  {
    year: "2023",
    icon: Code,
    title: "WeThinkCode",
    description:
      "Joining WeThinkCode introduced Kwanda to real-world programming concepts. He developed strong skills in GitHub collaboration and Linux systems through immersive practical projects.",
  },
  {
    year: "2024",
    icon: Shield,
    title: "Computer Engineering & Certifications",
    description:
      "At Believers Care Society, he studied Computer Engineering with a focus on security, software, hardware, and networking. He earned Cisco Packet Tracer, Microsoft Graph, and Python Essentials 1 badges through Cisco Networking Academy, and completed a Computer Science course via edX.",
  },
  {
    year: "2025",
    icon: Code,
    title: "Full Stack Development & Beyond",
    description:
      "Kwanda earned his Full Stack Development Certificate from FNB App Academy, gaining hands-on experience in HTML, CSS, JavaScript, Python, and GitHub. He then returned to WeThinkCode for a Software Engineering learnership, deepening his problem-solving skills and Python knowledge using the Embark system.",
  },
  {
    year: "Now",
    icon: Cloud,
    title: "Cloud Engineering",
    description:
      "Currently expanding his expertise by studying Cloud Engineering through Aviatrix Academy — preparing for the future of scalable, cloud-native solutions.",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">My Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {timelineEvents.map((event, i) => {
              const Icon = event.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isVisible ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_hsl(270_95%_65%/0.6)] z-10 mt-1" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      isLeft ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="glass-card rounded-xl p-6 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <span className="font-mono text-primary text-sm font-semibold">{event.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
