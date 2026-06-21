import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import MartelEngineOrb from "@/components/MartelEngineOrb";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

const facts = [
  { label: "Invented By", value: "Maurice Martel" },
  { label: "Classification", value: "Proprietary Technology" },
  { label: "Status", value: "Patent Pending" },
  { label: "Domain", value: "Sound Engineering" },
];

const attrs = [
  {
    title: "Revolutionary Architecture",
    desc: "A machine born from years of hands-on studio work, engineering instinct, and a conviction that sound deserved a better engine.",
    color: "cyan",
  },
  {
    title: "Consecrated Innovation",
    desc: "Not built for the industry. Built for the Kingdom. Every component of the MartelEngine is designed with divine intention behind it.",
    color: "purple",
  },
  {
    title: "Inventor-Owned",
    desc: "Maurice Martel stands as sole founder and inventor. This is not a collaboration — this is a calling answered in mechanical form.",
    color: "amber",
  },
];

export default function MartelEngine() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const orbScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-background"
    >
      {/* ── Full-screen Hero ── */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        {/* Warm dark background — matches video */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, hsl(25 40% 6%), hsl(224 53% 3%) 70%)" }}
        />

        {/* The Orb — centered, large, alive */}
        <motion.div
          className="absolute"
          style={{ scale: orbScale, opacity: orbOpacity }}
        >
          <MartelEngineOrb size="hero" />
        </motion.div>

        {/* Text floats above the orb */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 text-center px-6 flex flex-col items-center pointer-events-none"
        >
          {/* World Premiere badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-[340px] border border-white/10 bg-black/30 backdrop-blur-sm px-4 py-2"
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(185 100% 60%)" }} />
            <span className="font-display tracking-[0.4em] text-sm uppercase" style={{ color: "hsl(185 100% 70%)" }}>
              World Premiere
            </span>
            <Lock className="w-3 h-3 text-white/30" />
          </motion.div>

          {/* Title below the orb */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
          >
            <h1
              className="font-display text-[4rem] md:text-[8rem] lg:text-[11rem] leading-none tracking-tighter text-white"
              data-testid="engine-title"
            >
              MARTEL
            </h1>
            <h1
              className="font-display text-[4rem] md:text-[8rem] lg:text-[11rem] leading-none tracking-tighter"
              style={{ WebkitTextStroke: "1.5px hsl(185 100% 60% / 0.5)", color: "transparent" }}
            >
              ENGINE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-xl md:text-2xl text-white/40 font-light tracking-widest mt-8"
          >
            Invented and Founded by <span className="text-white/80">Maurice Martel</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-10 pointer-events-auto"
          >
            <Link href="/contact">
              <Button
                className="font-display tracking-[0.3em] text-lg px-12 py-6 rounded-none text-black"
                style={{ background: "hsl(185 100% 60%)", boxShadow: "0 0 40px hsl(185 100% 60% / 0.4)" }}
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
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-white/25"
        >
          <span className="font-display tracking-widest text-xs uppercase">Discover</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* ── The Signal ── */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Smaller orb on the left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="flex justify-center"
            >
              <MartelEngineOrb size="md" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
            >
              <h2
                className="font-display text-5xl md:text-6xl text-white mb-8 leading-tight"
              >
                An Engine of Sound,{" "}
                <span style={{ color: "hsl(185 100% 65%)" }}>
                  Unlike Any Before It
                </span>
              </h2>
              <p className="text-xl text-white/50 leading-relaxed font-light mb-6">
                The MartelEngine is not software. It is not a plugin. It is not a remix of what already exists.
                It is a machine — conceived in the creative silence of one man's studio, born from a conviction
                that the architecture of sound was overdue for reinvention.
              </p>
              <p className="text-xl text-white/50 leading-relaxed font-light">
                What you see in the music is not a visual effect layered in post-production.
                That energy — the rings, the light, the pulse — is the MartelEngine working.
                Details are protected. Revelations have their season.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 border-t border-white/5"
        style={{ background: "radial-gradient(ellipse at center, hsl(280 40% 6%), hsl(224 53% 3%) 80%)" }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="px-8 py-10 text-center"
                style={{ background: "hsl(224 53% 3%)" }}
                data-testid={`engine-fact-${i}`}
              >
                <p className="text-xs font-display tracking-[0.3em] text-white/25 uppercase mb-3">{fact.label}</p>
                <p className="font-display text-xl text-white">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Attributes ── */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {attrs.map((attr, i) => {
              const barColor =
                attr.color === "cyan"
                  ? "hsl(185 100% 60%)"
                  : attr.color === "purple"
                  ? "hsl(280 65% 58%)"
                  : "hsl(25 90% 52%)";

              return (
                <motion.div
                  key={attr.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="glass-panel p-10 group transition-colors duration-500 hover:border-white/20"
                  data-testid={`attr-${i}`}
                >
                  <div
                    className="w-12 h-1 mb-8 group-hover:w-20 transition-all duration-500"
                    style={{ background: barColor }}
                  />
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-4">{attr.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">{attr.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(ellipse at center, hsl(25 60% 6%), hsl(224 53% 3%) 70%)" }}
        />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MartelEngineOrb size="sm" className="mx-auto mb-10" />
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6">Be First To Know</h2>
            <p className="text-white/50 text-xl font-light mb-10 max-w-lg mx-auto">
              The MartelEngine launch is coming. Get in position.
            </p>
            <Link href="/contact">
              <Button
                className="font-display tracking-[0.3em] text-lg px-12 py-6 rounded-none text-black"
                style={{ background: "hsl(44 56% 54%)", boxShadow: "0 0 40px hsl(44 56% 54% / 0.3)" }}
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
