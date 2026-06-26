import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, BookOpen } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const comingSoon = [
  { name: "RadioReady", tagline: "Broadcast-quality audio prep tool", type: "Premium", color: "hsl(120 60% 50%)" },
  { name: "Ref Mentor", tagline: "Study and reference tool", type: "Free", color: "hsl(185 100% 60%)" },
  { name: "Codex Sacra", tagline: "Sacred text reader & study guide", type: "Free", color: "hsl(44 90% 56%)" },
  { name: "BibleTherapy", tagline: "Scripture-based emotional wellness", type: "Free", color: "hsl(280 80% 65%)" },
  { name: "Annoying Freq", tagline: "Frequency-based audio utility", type: "Premium", color: "hsl(0 80% 60%)" },
  { name: "CoCreater", tagline: "Collaborative creative workspace", type: "Premium", color: "hsl(44 90% 56%)" },
];

export default function Apps() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-black pt-24"
    >
      {/* Header */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at top right, hsl(280 60% 20%), transparent 60%)" }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display tracking-[0.4em] text-sm uppercase mb-4" style={{ color: "hsl(44 90% 56%)" }}>
              The Store
            </p>
            <h1 className="font-display text-7xl md:text-[8rem] text-white leading-none mb-6" data-testid="apps-title">
              Apps
            </h1>
            <p className="text-white/45 text-xl font-light max-w-xl">
              No app stores. No middlemen. Built by Maurice Martel, sold directly to you.
              Own what you buy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Free: Morning with the Master ── */}
      <section className="border-b border-white/5">
        <Link href="/apps/morning-with-the-master">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden cursor-pointer group"
            data-testid="featured-app-mwtm"
          >
            <div className="absolute inset-0">
              <img
                src="/assets/mwtm-home.jpg"
                alt="Morning with the Master"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 md:py-28">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-display tracking-[0.3em] text-xs uppercase px-3 py-1 border flex items-center gap-2"
                    style={{ borderColor: "hsl(44 90% 56% / 0.5)", color: "hsl(44 90% 56%)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    Live Now — Free PWA
                  </span>
                </div>
                <h2 className="font-display text-5xl md:text-7xl text-white leading-none tracking-tight mb-4">
                  Morning with<br />
                  <span style={{ color: "hsl(44 80% 62%)" }}>the Master</span>
                </h2>
                <p className="text-white/50 text-lg font-light leading-relaxed mb-8 max-w-md">
                  365 days of scripture and devotional reflection — the words of the Lord Jesus Christ.
                  A new word every morning. Free, forever. Install it to your home screen.
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-white/30 font-display tracking-widest text-xs uppercase mb-1">Price</p>
                    <p className="font-display text-3xl text-white">Free</p>
                  </div>
                  <Button
                    className="font-display tracking-[0.25em] text-base px-8 py-4 rounded-none text-black flex items-center gap-2"
                    style={{ background: "hsl(44 90% 56%)", boxShadow: "0 0 30px hsl(44 90% 56% / 0.35)" }}
                  >
                    <BookOpen className="w-4 h-4" /> Open App
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </section>

      {/* ── Featured: Royal Deck Tactics ── */}
      <section className="border-b border-white/5">
        <Link href="/apps/royal-deck-tactics">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden cursor-pointer group"
            data-testid="featured-app-rdt"
          >
            <div className="absolute inset-0">
              <img
                src="/assets/rdt-gameplay.jpg"
                alt="Royal Deck Tactics"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 md:py-36">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="font-display tracking-[0.3em] text-xs uppercase px-3 py-1 border"
                    style={{ borderColor: "hsl(44 90% 56% / 0.5)", color: "hsl(44 90% 56%)" }}
                  >
                    Available Now
                  </span>
                  <span className="font-display tracking-widest text-xs text-white/30 uppercase">
                    Strategy · Card Battle · Chess
                  </span>
                </div>

                <h2 className="font-display text-6xl md:text-8xl text-white leading-none tracking-tighter mb-4">
                  Royal Deck<br />
                  <span style={{ color: "hsl(44 90% 56%)" }}>Tactics</span>
                </h2>

                <p className="text-white/50 text-lg font-light leading-relaxed mb-8 max-w-lg">
                  Chess-based card battle game. 48 unique cards, multiple game modes,
                  AI opponent. Mana-driven tactical gameplay built from scratch by
                  Maurice Martel.
                </p>

                <div className="flex gap-3 mb-10">
                  {["/assets/rdt-menu.jpg", "/assets/rdt-card.jpg", "/assets/rdt-cards-grid.jpg"].map((src, i) => (
                    <div
                      key={i}
                      className="w-20 md:w-28 overflow-hidden border border-white/10 shrink-0"
                      style={{ aspectRatio: "9/16" }}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-white/30 font-display tracking-widest text-xs uppercase mb-1">Flat Fee</p>
                    <p className="font-display text-4xl" style={{ color: "hsl(44 90% 56%)" }}>$14.99</p>
                  </div>
                  <Button
                    className="font-display tracking-[0.25em] text-base px-10 py-5 rounded-none text-black flex items-center gap-2"
                    style={{ background: "hsl(44 90% 56%)", boxShadow: "0 0 40px hsl(44 90% 56% / 0.35)" }}
                    data-testid="btn-rdt-cta"
                  >
                    View Game <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </section>

      {/* ── Coming Soon ── */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="font-display tracking-[0.4em] text-xs uppercase text-white/25 mb-3">Pipeline</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">Coming to the Store</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {comingSoon.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel p-8 relative"
                data-testid={`coming-soon-${i}`}
              >
                <div
                  className="absolute top-4 right-4 font-display text-[9px] tracking-widest uppercase px-2 py-0.5 border"
                  style={{ borderColor: `${app.color}40`, color: app.color }}
                >
                  {app.type}
                </div>
                <Crown className="w-5 h-5 mb-6" style={{ color: app.color }} />
                <h3 className="font-display text-xl text-white mb-2">{app.name}</h3>
                <p className="text-white/40 font-light text-sm">{app.tagline}</p>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-white/20 font-display text-xs tracking-widest uppercase">Coming Soon</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Direct Sales Promise ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display tracking-[0.5em] text-xs text-white/20 uppercase mb-8">The Promise</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              No App Store.<br />
              <span style={{ color: "hsl(44 90% 56%)" }}>No Gatekeeper.</span><br />
              No Subscription.
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Every app from StraightUp Production is sold directly — one price, one transaction, yours forever.
              The empire doesn't need permission to distribute.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
