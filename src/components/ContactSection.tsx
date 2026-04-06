import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <div
            className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="tel:0640878027"
                className="flex items-center gap-4 glass-card rounded-xl p-4 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-foreground text-sm">0640878027</p>
                </div>
              </a>

              <a
                href="mailto:kwandamchunu59@gmail.com"
                className="flex items-center gap-4 glass-card rounded-xl p-4 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-foreground text-sm">kwandamchunu59@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
            />
            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none text-sm"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_30px_hsl(270_95%_65%/0.4)] transition-all duration-300"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
