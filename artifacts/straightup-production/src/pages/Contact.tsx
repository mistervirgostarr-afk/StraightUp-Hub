import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Crown, Mic2, Music2, Cpu, Wrench, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const roles = [
  { icon: Briefcase, title: "CEO", desc: "StraightUp Production" },
  { icon: Mic2, title: "Artist", desc: "S.O.A.K. — Son of a King" },
  { icon: Music2, title: "Composer & Writer", desc: "Full original compositions" },
  { icon: Wrench, title: "Producer & Engineer", desc: "End-to-end studio craft" },
  { icon: Cpu, title: "Inventor", desc: "Founder, The MartelEngine" },
  { icon: Crown, title: "Visionary", desc: "Kingdom-driven creative empire" },
];

const types = [
  { value: "fan", label: "Fan / Listener" },
  { value: "artist", label: "Prospective Artist" },
  { value: "business", label: "Business Inquiry" },
  { value: "media", label: "Media / Press" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-background pt-24"
    >
      {/* Header */}
      <section className="py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at bottom left, hsl(44 56% 54% / 0.06), transparent 60%)" }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-display text-primary tracking-[0.4em] text-lg mb-4 uppercase">Reach Out</p>
            <h1 className="font-display text-7xl md:text-[8rem] text-white leading-none mb-6" data-testid="contact-title">Contact</h1>
            <p className="text-white/50 text-xl font-light max-w-xl">
              Whether you're a fan, a future artist looking to sign, or a business bringing a serious proposition — this door is open.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Maurice's Roles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Maurice Martel</h2>
            <p className="text-primary font-display tracking-widest text-lg mb-10">The Man Behind It All</p>
            <p className="text-white/50 font-light leading-relaxed mb-12">
              One person. Multiple callings. Every role carried with intention, precision, and faith.
              If your message is for any of these capacities, we want to hear it.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {roles.map((role, i) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex items-center gap-4 p-4 glass-panel group hover:border-primary/20 transition-colors duration-300"
                    data-testid={`role-${role.title.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-display text-white text-lg tracking-wide">{role.title}</p>
                      <p className="text-white/40 text-sm font-light">{role.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel p-12 text-center"
                data-testid="contact-success"
              >
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="font-display text-4xl text-white mb-4">Message Received</h3>
                <p className="text-white/50 font-light leading-relaxed">
                  Thank you for reaching out. Maurice or someone from the StraightUp Production team will be in touch.
                  To God be the glory.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel p-10 flex flex-col gap-6" data-testid="contact-form">
                <h2 className="font-display text-3xl text-white mb-2">Send a Message</h2>
                <div className="w-16 h-0.5 bg-primary mb-4" />

                <div className="flex flex-col gap-2">
                  <label className="font-display tracking-widest text-xs text-white/40 uppercase">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 font-light focus:outline-none focus:border-primary/50 transition-colors rounded-none"
                    data-testid="input-name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-display tracking-widest text-xs text-white/40 uppercase">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 font-light focus:outline-none focus:border-primary/50 transition-colors rounded-none"
                    data-testid="input-email"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-display tracking-widest text-xs text-white/40 uppercase">Reason for Contact</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 text-white px-4 py-3 font-light focus:outline-none focus:border-primary/50 transition-colors rounded-none appearance-none"
                    data-testid="select-contact-type"
                  >
                    <option value="" className="bg-background">Select a reason...</option>
                    {types.map((t) => (
                      <option key={t.value} value={t.value} className="bg-background">{t.label}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-display tracking-widest text-xs text-white/40 uppercase">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Say what's on your heart..."
                    className="bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 font-light focus:outline-none focus:border-primary/50 transition-colors rounded-none resize-none"
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-background font-display tracking-[0.3em] text-lg py-6 rounded-none flex items-center gap-3"
                  data-testid="btn-submit-contact"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>

                <p className="text-white/30 text-xs font-light text-center">
                  For artist submissions, please include links to your work. We listen to everything.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
