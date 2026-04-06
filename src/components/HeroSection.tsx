import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Mail, Phone, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const typingText = useTypingEffect([
    "Full Stack Developer",
    "Software Engineering Learner",
    "Cloud Engineering Enthusiast",
  ]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `particle-float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 10 + "s",
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="section-container relative z-10 text-center">
        {/* Name */}
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono">
          👋 Welcome to my portfolio
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-foreground">Kwanda</span>{" "}
          <span className="gradient-text">Malibongwe</span>
          <br />
          <span className="text-foreground">Mchunu</span>
        </h1>

        {/* Typing effect */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-lg sm:text-xl md:text-2xl font-mono text-primary">
            {typingText}
          </span>
          <span className="ml-1 w-0.5 h-6 bg-primary inline-block" style={{ animation: "typing-cursor 1s infinite" }} />
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          "Building innovative digital solutions through code, creativity, and continuous learning."
        </p>

        {/* Contact pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="tel:0640878027"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm text-foreground hover:text-primary transition-colors"
          >
            <Phone size={16} />
            0640878027
          </a>
          <a
            href="mailto:kwandamchunu59@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm text-foreground hover:text-primary transition-colors"
          >
            <Mail size={16} />
            kwandamchunu59@gmail.com
          </a>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="inline-block animate-float">
          <ChevronDown size={28} className="text-primary/50" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
