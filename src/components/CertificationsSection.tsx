import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award } from "lucide-react";

const certs = [
  { title: "Full Stack Development", issuer: "FNB App Academy", year: "2025" },
  { title: "Cisco Packet Tracer Badge", issuer: "Cisco Networking Academy", year: "2024" },
  { title: "Microsoft Graph Badge", issuer: "Cisco Networking Academy", year: "2024" },
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", year: "2024" },
  { title: "Computer Science Course", issuer: "edX", year: "2024" },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Recognition</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className={`glass-card rounded-xl p-6 text-center transition-all duration-500 group hover:scale-105 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-neon">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              <span className="text-primary font-mono text-xs mt-2 inline-block">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
