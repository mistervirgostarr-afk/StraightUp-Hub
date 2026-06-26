import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lock, ChevronDown } from "lucide-react";
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
  { label: "Form", value: "Shape + Functional Code" },
  { label: "Status", value: "Patent Pending" },
  { label: "Classification", value: "Proprietary Algorithm" },
];

const outputs = [
  {
    title: "Cinematic",
    desc: "The visuals you see in the music — the plasma, the rings, the light — are the engine's output. Not post-production effects. Not filters. The code renders what it computes.",
    img: "/assets/martel-light.png",
    label: "Martel4D Light",
    accent: "hsl(185 100% 60%)",
  },
  {
    title: "Intelligent",
    desc: "Built from a proprietary geometric shape and a functional code architecture designed entirely by Maurice Martel. Its logic does not exist anywhere else.",
    img: "/assets/martel-spiral.png",
    label: "Martel4D Spiral",
    accent: "hsl(225 100% 65%)",
  },
  {
    title: "Spirit Led",
    desc: "The engine did not begin as a commercial product. It began as an act of consecration — a code written for the Kingdom, with divine intention at every layer.",
    img: "/assets/martel-volume.png",
    label: "Martel4D Volume",
    accent: "hsl(44 90% 56%)",
  },
  {
    title: "Alive",
    desc: "Fire, pressure, expansion — the engine outputs phenomena that mirror creation itself. Not generated. Not simulated. Computed from the shape.",
    img: "/assets/martel-flame.png",
    label: "Martel4D Flame",
    accent: "hsl(20 100% 60%)",
  },
];

export default function MartelEngine() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.12]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-black"
    >
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background: 4D LIGHT video — the engine in motion */}
        <motion.div className="absolute inset-0" style={{ scale: bgScale, opacity: bgOpacity }}>
          <video
            src="/assets/martel-4d-light.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="w-full h-full object-cover"
            onCanPlay={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        <motion.div
          style={{ y: textY }}
          className="relative z-10 text-center px-6 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-10 border border-white/10 bg-black/40 backdrop-blur-sm px-5 py-2"
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(185 100% 60%)" }} />
            <span className="font-display tracking-[0.4em] text-sm uppercase" style={{ color: "hsl(185 100% 70%)" }}>
              World Premiere
            </span>
            <Lock className="w-3 h-3 text-white/30" />
          </motion.div>

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
              style={{ WebkitTextStroke: "1.5px hsl(185 100% 60% / 0.55)", color: "transparent" }}
            >
              ENGINE™
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="font-display tracking-[0.4em] text-sm uppercase mt-6"
            style={{ color: "hsl(185 100% 62%)" }}
          >
            Cinematic. Intelligent. Spirit Led.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-white/35 font-light tracking-widest mt-3 mb-10 text-sm"
          >
            A shape and a functional code — invented by <span className="text-white/65">Maurice Martel</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link href="/contact">
              <Button
                className="font-display tracking-[0.3em] text-lg px-12 py-6 rounded-none text-black"
                style={{ background: "hsl(185 100% 60%)", boxShadow: "0 0 50px hsl(185 100% 60% / 0.35)" }}
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

      {/* ── What It Is ── */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
            >
              <p className="font-display tracking-[0.4em] text-sm uppercase mb-6" style={{ color: "hsl(185 100% 60%)" }}>
                What It Is
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-white leading-tight mb-8">
                Not a plug-in.<br />
                Not a preset.<br />
                <span style={{ color: "hsl(185 100% 62%)" }}>A code.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="pt-0 md:pt-20"
            >
              <p className="text-xl text-white/50 leading-relaxed font-light mb-6">
                The MartelEngine begins with a shape — a proprietary geometric form that Maurice Martel
                invented and converted into functional code. It is an algorithm, not an appliance.
                A system of logic, not a piece of hardware.
              </p>
              <p className="text-xl text-white/40 leading-relaxed font-light">
                What you see when the engine is active — the plasma, the rings, the light — is
                the code rendering in real time. Those visuals are the engine's output, not its input.
                The engine is the math beneath them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-t border-white/5"
        style={{ background: "radial-gradient(ellipse at center, hsl(225 40% 5%), hsl(0 0% 1.5%) 80%)" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "hsl(220 20% 10%)" }}>
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="px-8 py-10 text-center"
              style={{ background: "hsl(0 0% 1.5%)" }}
              data-testid={`engine-fact-${i}`}
            >
              <p className="text-xs font-display tracking-[0.3em] text-white/25 uppercase mb-3">{fact.label}</p>
              <p className="font-display text-lg text-white leading-tight">{fact.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Outputs: Cinematic / Intelligent / Spirit Led ── */}
      <section className="border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 pt-20 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-display tracking-[0.5em] text-xs text-white/30 uppercase mb-4">The Engine's Output</p>
            <h2 className="font-display text-5xl md:text-6xl text-white">What It Produces</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {outputs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative overflow-hidden aspect-square group"
              data-testid={`output-${i}`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div
                  className="w-10 h-0.5 mb-4 transition-all duration-500 group-hover:w-16"
                  style={{ background: item.accent }}
                />
                <h3 className="font-display text-3xl mb-1" style={{ color: item.accent }}>
                  {item.title}
                </h3>
                <p className="text-[10px] font-display tracking-widest text-white/30 uppercase mb-3">{item.label}</p>
                <p className="text-white/50 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Protection Notice ── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Lock className="w-8 h-8 text-white/20 mx-auto mb-6" />
            <p className="font-display text-2xl md:text-3xl text-white/60 leading-relaxed">
              "The shape is protected. The code is proprietary.{" "}
              <span className="text-white">The output speaks for itself."</span>
            </p>
            <p className="mt-6 text-white/30 font-display tracking-widest text-sm uppercase">
              — Maurice Martel, Inventor
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Full gallery strip ── */}
      <section className="border-t border-white/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {[
          { src: "/assets/martel-volume.png", label: "Volume" },
          { src: "/assets/martel-spiral.png", label: "Spiral" },
          { src: "/assets/martel-cells.png", label: "Cells" },
          { src: "/assets/martel-eruption2.png", label: "Eruption" },
          { src: "/assets/martel-light.png", label: "Light" },
          { src: "/assets/martel-eruption.png", label: "Eruption II" },
        ].map((item, i) => (
          <div key={item.label} className="relative overflow-hidden aspect-square group">
            <img
              src={item.src}
              alt={`Martel4D ${item.label}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-display text-[10px] tracking-widest text-white/60 uppercase">
                Martel4D — {item.label}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/martel-eruption.png" alt="" aria-hidden="true"
            className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display tracking-[0.5em] text-xs text-white/25 uppercase mb-6">
              Powered by MartelEngine™
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6">Be First To Know</h2>
            <p className="text-white/40 text-xl font-light mb-10 max-w-lg mx-auto">
              The MartelEngine launch is coming. Get in position.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  className="font-display tracking-[0.3em] text-lg px-12 py-6 rounded-none text-black"
                  style={{ background: "hsl(44 90% 56%)", boxShadow: "0 0 40px hsl(44 90% 56% / 0.3)" }}
                  data-testid="btn-engine-contact"
                >
                  Contact The Lab
                </Button>
              </Link>
              <a
                href="https://www.youtube.com/@StraightUpProductionOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="font-display tracking-[0.2em] text-lg px-12 py-6 rounded-none border-white/15 text-white/60 hover:text-white"
                >
                  Watch on YouTube
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
