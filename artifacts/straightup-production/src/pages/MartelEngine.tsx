import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

const facts = [
  { label: "Invented By", value: "Maurice Martel" },
  { label: "Classification", value: "Proprietary Technology" },
  { label: "Status", value: "Founder & Patent Pending" },
  { label: "Domain", value: "Sound Engineering" },
];

const attrs = [
  { title: "Revolutionary Architecture", desc: "A machine born from years of hands-on studio work, engineering instinct, and a conviction that sound deserved a better engine." },
  { title: "Consecrated Innovation", desc: "Not built for the industry. Built for the Kingdom. Every component of the MartelEngine is designed with divine intention behind it." },
  { title: "Inventor-Owned", desc: "Maurice Martel stands as sole founder and inventor. This is not a collaboration — this is a calling answered in mechanical form." },
];

export default function MartelEngine() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-background"
    >
      {/* Full-screen Hero */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        {/* Layered glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(220 100% 56% / 0.4), transparent 70%)" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-15 blur-xl"
          style={{ background: "radial-gradient(circle, hsl(44 56% 54% / 0.5), transparent 70%)" }}
        />

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(hsl(220 100% 56%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 100% 56%) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-panel px-4 py-2 mb-12 border-accent/30"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="font-display tracking-[0.3em] text-accent text-sm uppercase">World Premiere</span>
            <Lock className="w-3 h-3 text-white/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[4.5rem] md:text-[9rem] lg:text-[12rem] leading-none tracking-tighter text-white mb-0" data-testid="engine-title">
              MARTEL
            </h1>
            <h1 className="font-display text-[4.5rem] md:text-[9rem] lg:text-[12rem] leading-none tracking-tighter text-transparent mb-0"
              style={{
                WebkitTextStroke: "1px hsl(220 100% 56% / 0.6)",
              }}
            >
              ENGINE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="text-xl md:text-2xl text-white/40 font-light tracking-widest mt-10 max-w-xl"
          >
            Invented and Founded by <span className="text-white/80">Maurice Martel</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-14"
          >
            <Link href="/contact">
              <Button
                className="bg-accent hover:bg-accent/90 text-white font-display tracking-[0.3em] text-lg px-12 py-6 rounded-none"
                data-testid="btn-engine-cta"
              >
                Stay Tuned
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="font-display tracking-widest text-xs uppercase">Discover More</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* What Is It */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-10 text-white">
              An Engine of Sound,<br />
              <span className="text-accent">Unlike Any Before It</span>
            </h2>
            <p className="text-xl text-white/50 leading-relaxed font-light mb-8">
              The MartelEngine is not software. It is not a plugin. It is not a remix of what already exists.
              It is a machine — conceived in the creative silence of one man's studio, born from conviction that the architecture of sound was overdue for reinvention.
            </p>
            <p className="text-xl text-white/50 leading-relaxed font-light">
              We will not describe its mechanism here. Patents take time. Revelations have their season. 
              What we can tell you is this: when the MartelEngine is fully unveiled, the way you hear production will shift.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats / Patent Info */}
      <section className="py-20 border-t border-white/5 bg-card/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background/80 px-8 py-10 text-center"
                data-testid={`engine-fact-${i}`}
              >
                <p className="text-xs font-display tracking-[0.3em] text-white/30 uppercase mb-3">{fact.label}</p>
                <p className="font-display text-xl text-white">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attributes */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {attrs.map((attr, i) => (
              <motion.div
                key={attr.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="glass-panel p-10 group hover:border-accent/30 transition-colors duration-500"
                data-testid={`attr-${i}`}
              >
                <div className="w-12 h-1 bg-accent mb-8 group-hover:w-20 transition-all duration-500" />
                <h3 className="font-display text-2xl md:text-3xl text-white mb-4">{attr.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{attr.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, hsl(220 100% 56% / 0.08), transparent 70%)" }}
        />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
              Be First To Know
            </h2>
            <p className="text-white/50 text-xl font-light mb-10 max-w-lg mx-auto">
              The MartelEngine launch is coming. Get in position. Reach out to stay in the loop.
            </p>
            <Link href="/contact">
              <Button
                className="bg-primary hover:bg-primary/90 text-background font-display tracking-[0.3em] text-lg px-12 py-6 rounded-none"
                data-testid="btn-engine-contact"
              >
                Contact The Lab
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
