import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music2, Smartphone, Zap, Crown } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE }
  })
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
};

const releases = [
  { title: "Crowned", type: "Single", year: "2024" },
  { title: "Still Waters", type: "EP", year: "2023" },
  { title: "Kingdom Come", type: "Album", year: "2022" },
];

const freeApps = [
  { name: "Daily Word", tagline: "A scripture for every morning" },
  { name: "Kingdom Beats", tagline: "Instrumental gospel for your flow" },
  { name: "Grateful", tagline: "A faith-based gratitude journal" },
];

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/25 via-background to-background" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(220 100% 56% / 0.5), transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-10 blur-2xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(44 56% 54% / 0.6), transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(220 100% 56%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 100% 56%) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
          <motion.p
            className="font-display text-primary tracking-[0.5em] text-sm uppercase mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Christian Production Label
          </motion.p>

          <motion.h1
            className="font-display text-7xl md:text-[10rem] text-white uppercase tracking-tighter leading-none mb-4"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            data-testid="hero-title"
          >
            StraightUp
          </motion.h1>
          <motion.h1
            className="font-display text-7xl md:text-[10rem] uppercase tracking-tighter leading-none mb-10"
            style={{
              WebkitTextStroke: "1.5px hsl(44 56% 54% / 0.6)",
              color: "transparent",
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.35 }}
          >
            Production
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-white/50 max-w-2xl font-light tracking-wide mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            A sovereign, spirit-led creative empire. One man, one vision, one God.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link href="/artist">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background font-display text-lg tracking-[0.3em] px-10 py-6 rounded-none w-full sm:w-auto"
                data-testid="btn-discover-soak"
              >
                Discover S.O.A.K.
              </Button>
            </Link>
            <Link href="/martel-engine">
              <Button
                size="lg"
                variant="outline"
                className="border-accent/40 text-accent hover:bg-accent/10 font-display text-lg tracking-[0.3em] px-10 py-6 rounded-none w-full sm:w-auto"
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

      {/* ── Intro ── */}
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
                <span className="text-primary">Consecrated by Spirit.</span>
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
                StraightUp Production is not just a label; it's a cathedral of creation where every beat, every app, and every word is engineered with divine intention.
              </p>
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 text-primary font-display tracking-widest text-sm uppercase group"
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
      <section className="py-24 border-t border-white/5 bg-card/20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="glass-panel aspect-square flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(circle at 50% 40%, hsl(44 56% 54% / 0.12), transparent 70%)" }}
              />
              <Crown className="w-20 h-20 text-primary/30 mb-4" />
              <p className="font-display text-6xl text-white/10 tracking-widest">S.O.A.K.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="font-display text-primary tracking-[0.4em] text-sm uppercase mb-4">The Artist</p>
              <h2 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
                S.O.A.K.<br />
                <span className="text-white/40 text-3xl md:text-4xl tracking-widest">Son Of A King</span>
              </h2>
              <p className="text-white/50 font-light leading-relaxed text-lg mb-8">
                Maurice Martel steps into the booth not as a performer, but as a son — carrying the testimony of grace, war, and divine faithfulness into every track. Gospel rap built in the studio he owns, engineered by his own hands.
              </p>
              <Link href="/artist">
                <Button
                  className="bg-primary hover:bg-primary/90 text-background font-display tracking-[0.3em] rounded-none px-8"
                  data-testid="btn-home-artist"
                >
                  Meet S.O.A.K.
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MartelEngine Teaser ── */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, hsl(220 100% 56% / 0.06), transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(220 100% 56%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 100% 56%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
          >
            <p className="font-display text-accent tracking-[0.5em] text-sm uppercase mb-6">Introducing</p>
            <h2 className="font-display text-7xl md:text-[9rem] text-white leading-none mb-2">The Martel</h2>
            <h2
              className="font-display text-7xl md:text-[9rem] leading-none mb-10"
              style={{ WebkitTextStroke: "1px hsl(220 100% 56% / 0.5)", color: "transparent" }}
            >
              Engine
            </h2>
            <p className="text-xl text-white/40 font-light max-w-2xl mx-auto mb-4">
              Invented and Founded by Maurice Martel. A machine unlike any that preceded it.
              Not software. Not a preset. An engine of sound, built for a new era.
            </p>
            <p className="text-white/25 font-light italic mb-12">Details protected. Reveal coming.</p>
            <Link href="/martel-engine">
              <Button
                className="bg-accent hover:bg-accent/90 text-white font-display tracking-[0.3em] text-lg px-12 py-6 rounded-none"
                data-testid="btn-home-engine"
              >
                See The Engine
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Music Strip ── */}
      <section className="py-24 border-t border-white/5 bg-card/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-display text-primary tracking-[0.4em] text-sm uppercase mb-2">Latest</p>
              <h2 className="font-display text-5xl md:text-6xl text-white">Music</h2>
            </motion.div>
            <Link href="/music">
              <button
                className="flex items-center gap-2 text-white/40 hover:text-white font-display tracking-widest text-xs uppercase group transition-colors"
                data-testid="btn-home-see-all-music"
              >
                See All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {releases.map((r) => (
              <motion.div
                key={r.title}
                variants={itemAnim}
                className="glass-panel group hover:border-primary/20 transition-all duration-500 overflow-hidden cursor-pointer"
                data-testid={`home-release-${r.title.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                  <Music2 className="w-14 h-14 text-primary/30 group-hover:text-primary/60 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-accent font-display tracking-widest uppercase">{r.type}</span>
                    <span className="text-xs text-white/30">{r.year}</span>
                  </div>
                  <h3 className="font-display text-2xl text-white">{r.title}</h3>
                  <p className="text-white/40 text-sm mt-1">S.O.A.K.</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Apps Strip ── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-display text-accent tracking-[0.4em] text-sm uppercase mb-2">Free & Premium</p>
              <h2 className="font-display text-5xl md:text-6xl text-white">Apps</h2>
            </motion.div>
            <Link href="/apps">
              <button
                className="flex items-center gap-2 text-white/40 hover:text-white font-display tracking-widest text-xs uppercase group transition-colors"
                data-testid="btn-home-see-all-apps"
              >
                See All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {freeApps.map((app) => (
              <motion.div
                key={app.name}
                variants={itemAnim}
                className="glass-panel p-8 group hover:border-accent/20 transition-all duration-500 flex items-center gap-5"
                data-testid={`home-app-${app.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <Smartphone className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">{app.name}</h3>
                  <p className="text-white/40 text-sm font-light mt-1">{app.tagline}</p>
                  <span className="text-xs text-primary font-display tracking-widest uppercase mt-2 block">Free</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, hsl(44 56% 54% / 0.05), transparent 70%)" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Zap className="w-10 h-10 text-primary mx-auto mb-8 opacity-60" />
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6 max-w-3xl mx-auto leading-tight">
              To God Be The Glory
            </h2>
            <p className="text-white/40 text-xl font-light mb-12 max-w-xl mx-auto">
              Everything here is consecrated. The music, the apps, the invention. All of it — for the Kingdom.
            </p>
            <Link href="/contact">
              <Button
                className="bg-primary hover:bg-primary/90 text-background font-display tracking-[0.3em] text-lg px-12 py-6 rounded-none"
                data-testid="btn-home-contact"
              >
                Join The Movement
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
