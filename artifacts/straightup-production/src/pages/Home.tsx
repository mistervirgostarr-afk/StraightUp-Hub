import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay, ease: EASE }
  })
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-background"
    >
      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Pure black base */}
        <div className="absolute inset-0 bg-black" />

        {/* MartelEngine VOLUME orb — blurred, centered behind text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/assets/martel-volume.png"
            alt=""
            className="w-[500px] md:w-[700px] opacity-30 blur-sm select-none"
            aria-hidden="true"
          />
        </div>

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/60 to-black pointer-events-none" />

        {/* Hero text */}
        <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
          <motion.p
            className="font-display tracking-[0.6em] text-sm uppercase mb-8"
            style={{ color: "hsl(var(--engine-gold))" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Christian Production Label
          </motion.p>

          <motion.h1
            className="font-display text-7xl md:text-[10rem] text-white uppercase tracking-tighter leading-none mb-4"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            data-testid="hero-title"
          >
            StraightUp
          </motion.h1>
          <motion.h1
            className="font-display text-7xl md:text-[10rem] uppercase tracking-tighter leading-none mb-10"
            style={{ WebkitTextStroke: "1.5px hsl(44 90% 56% / 0.5)", color: "transparent" }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.45 }}
          >
            Production
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-white/40 max-w-2xl font-light tracking-wide mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            A spirit-led creative empire. One man, one vision, one God.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link href="/artist">
              <Button
                size="lg"
                className="text-black font-display text-lg tracking-[0.3em] px-10 py-6 rounded-none w-full sm:w-auto"
                style={{ background: "hsl(var(--engine-gold))", boxShadow: "0 0 40px hsl(44 90% 56% / 0.3)" }}
                data-testid="btn-discover-soak"
              >
                Discover S.O.A.K.
              </Button>
            </Link>
            <Link href="/martel-engine">
              <Button
                size="lg"
                variant="outline"
                className="font-display text-lg tracking-[0.3em] px-10 py-6 rounded-none w-full sm:w-auto"
                style={{ borderColor: "hsl(var(--engine-blue) / 0.4)", color: "hsl(var(--engine-blue))" }}
                data-testid="btn-martel-engine"
              >
                The MartelEngine
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-white/20 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20 animate-pulse" />
          <span className="font-display tracking-[0.4em] text-xs uppercase">Scroll</span>
        </div>
      </section>

      {/* ── Label Intro ── */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-display text-5xl md:text-7xl leading-none text-white mb-6">
                Built for Sound.<br />
                <span style={{ color: "hsl(var(--engine-gold))" }}>Consecrated by Spirit.</span>
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={0.15}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-xl text-white/50 leading-relaxed font-light mb-6">
                Founded by Maurice Martel — CEO, Artist, Composer, Writer, Producer, Engineer, and Inventor.
                StraightUp Production is not just a label; it's a cathedral of creation where every beat, every app,
                and every word is engineered with divine intention.
              </p>
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 font-display tracking-widest text-sm uppercase group"
                  style={{ color: "hsl(var(--engine-gold))" }}
                  data-testid="btn-intro-connect"
                >
                  Connect With The Label
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Artist Teaser ── */}
      <section className="py-24 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Album art */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden"
            >
              <img
                src="/assets/album-when-time-expires.jpg"
                alt="When Time Expires — S.O.A.K."
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="font-display tracking-[0.4em] text-sm uppercase mb-4"
                style={{ color: "hsl(var(--engine-gold))" }}>
                The Artist
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
                S.O.A.K.<br />
                <span className="text-white/40 text-3xl md:text-4xl tracking-widest">Son Of A King</span>
              </h2>
              <p className="text-white/50 font-light leading-relaxed text-lg mb-4">
                Maurice Martel steps into the booth not as a performer, but as a son — carrying the testimony
                of grace, war, and divine faithfulness into every track.
              </p>
              <p className="text-white/40 font-light leading-relaxed mb-8">
                Latest release: <span className="text-white/70">When Time Expires</span> — an epic crossroads between
                the Hard Truth and the Easy Lie.
              </p>
              <div className="flex gap-4">
                <Link href="/artist">
                  <Button
                    className="text-black font-display tracking-[0.3em] rounded-none px-8"
                    style={{ background: "hsl(var(--engine-gold))" }}
                    data-testid="btn-home-artist"
                  >
                    Meet S.O.A.K.
                  </Button>
                </Link>
                <Link href="/music">
                  <Button
                    variant="ghost"
                    className="font-display tracking-widest text-white/50 hover:text-white rounded-none px-8 flex items-center gap-2"
                    data-testid="btn-home-music"
                  >
                    <Play className="w-4 h-4" /> Music
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MartelEngine Teaser ── */}
      <section className="py-0 border-t border-white/5 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Full-bleed LIGHT image as background */}
        <div className="absolute inset-0">
          <img
            src="/assets/martel-light.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
            >
              <p className="font-display tracking-[0.5em] text-sm uppercase mb-6"
                style={{ color: "hsl(var(--engine-cyan))" }}>
                World Premiere Technology
              </p>
              <h2 className="font-display text-6xl md:text-8xl text-white leading-none mb-6">
                THE<br />
                <span style={{ color: "hsl(var(--engine-blue))", WebkitTextStroke: "0px" }}>
                  MARTEL
                </span>
                <br />ENGINE
              </h2>
              <p className="text-white/50 text-xl font-light leading-relaxed mb-10 max-w-lg">
                A patent-pending invention by Maurice Martel. What you see in the music — the light,
                the energy, the rings — is the MartelEngine at work. Details are protected.
                Revelations have their season.
              </p>
              <Link href="/martel-engine">
                <Button
                  className="font-display tracking-[0.3em] text-lg px-12 py-6 rounded-none text-black"
                  style={{ background: "hsl(var(--engine-cyan))", boxShadow: "0 0 50px hsl(185 100% 60% / 0.35)" }}
                  data-testid="btn-engine-teaser"
                >
                  Enter The Engine
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MartelEngine Visual Strip ── */}
      <section className="grid grid-cols-3 border-t border-white/5">
        {[
          { src: "/assets/martel-spiral.png", label: "Martel4D Spiral" },
          { src: "/assets/martel-fire.png", label: "Martel4D Fire" },
          { src: "/assets/martel-cells.png", label: "Martel4D Cells" },
        ].map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="relative overflow-hidden aspect-square group"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-display text-xs tracking-widest text-white/60 uppercase">{img.label}</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/assets/martel-volume.png"
            alt=""
            aria-hidden="true"
            className="w-[600px] opacity-10 blur-md"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display tracking-[0.5em] text-sm text-white/30 uppercase mb-6">To God Be The Glory</p>
            <h2 className="font-display text-6xl md:text-8xl text-white mb-6 leading-tight">
              One Man.<br />
              <span style={{ color: "hsl(var(--engine-gold))" }}>One Mission.</span>
            </h2>
            <p className="text-white/40 text-xl font-light max-w-lg mx-auto mb-10">
              Every project. Every track. Every invention. All consecrated.
            </p>
            <Link href="/contact">
              <Button
                className="font-display tracking-[0.3em] text-lg px-14 py-7 rounded-none text-black"
                style={{ background: "hsl(var(--engine-gold))", boxShadow: "0 0 40px hsl(44 90% 56% / 0.25)" }}
                data-testid="btn-cta-contact"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
