import { motion } from "framer-motion";
import { Download, ShoppingBag, Star, Smartphone, Heart, Zap, BookOpen, Music2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
};

const freeApps = [
  {
    name: "Daily Word",
    tagline: "A scripture for every morning",
    desc: "Start each day anchored. Daily Word delivers a curated verse, a brief reflection, and a prayer prompt — all crafted by Maurice Martel himself.",
    icon: BookOpen,
    color: "primary",
    rating: 4.9,
    tag: "Devotional",
  },
  {
    name: "Kingdom Beats",
    tagline: "Christian beats for your workflow",
    desc: "A curated library of instrumental tracks from the StraightUp Production catalog. Study, pray, create — with sound that doesn't distract from the sacred.",
    icon: Music2,
    color: "accent",
    rating: 4.8,
    tag: "Music",
  },
  {
    name: "Grateful",
    tagline: "A gratitude journal, consecrated",
    desc: "Faith-based gratitude journaling with daily prompts, reflection streaks, and Scripture anchoring. Simple, beautiful, and built for real growth.",
    icon: Heart,
    color: "primary",
    rating: 4.7,
    tag: "Wellness",
  },
];

const paidApps = [
  {
    name: "Studio Sync",
    tagline: "Collaboration for Kingdom creators",
    desc: "A production collaboration hub for Christian musicians. Share stems, comment on tracks, manage sessions, and co-create — all in a faith-positive space.",
    icon: Layers,
    color: "accent",
    price: "$9.99/mo",
    tag: "Pro Tool",
    highlight: true,
  },
  {
    name: "SoundPath Pro",
    tagline: "Music production learning, unlocked",
    desc: "Learn production directly from Maurice Martel's methods. Video lessons, project templates, beat breakdowns, and live Q&A sessions.",
    icon: Zap,
    color: "primary",
    price: "$14.99/mo",
    tag: "Education",
    highlight: false,
  },
  {
    name: "Worship Pack",
    tagline: "Premium loops, samples & presets",
    desc: "An ever-growing library of exclusive StraightUp Production samples, loops, MIDI presets, and drum kits built for modern worship and gospel production.",
    icon: Smartphone,
    color: "accent",
    price: "$4.99/mo",
    tag: "Sound Library",
    highlight: false,
  },
];

export default function Apps() {
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
          style={{ background: "radial-gradient(ellipse at top right, hsl(220 100% 56% / 0.08), transparent 60%)" }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-display text-accent tracking-[0.4em] text-lg mb-4 uppercase">The Ecosystem</p>
            <h1 className="font-display text-7xl md:text-[8rem] text-white leading-none mb-6" data-testid="apps-title">Apps</h1>
            <p className="text-white/50 text-xl font-light max-w-xl">
              Tools built with the same precision and intention as our music. Some given freely — as a thank-you from this label to you. Some premium — for the builders who want to go deeper.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Free Apps */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Download className="w-4 h-4 text-primary" />
                </div>
                <span className="font-display text-primary tracking-widest text-sm uppercase">Free Apps</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-white">
                A Gift From<br />The Label
              </h2>
            </div>
            <p className="hidden md:block text-white/40 font-light max-w-xs text-right">
              No catch. No subscription. Just tools built with love for the community.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {freeApps.map((app) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={app.name}
                  variants={itemVariant}
                  className="glass-panel group hover:border-primary/25 transition-all duration-500 overflow-hidden flex flex-col"
                  data-testid={`free-app-${app.name.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <div className="p-8 flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${app.color === "primary" ? "bg-primary/15" : "bg-accent/15"}`}>
                        <Icon className={`w-7 h-7 ${app.color === "primary" ? "text-primary" : "text-accent"}`} />
                      </div>
                      <span className="text-xs font-display tracking-widest text-white/30 uppercase border border-white/10 px-2 py-1">{app.tag}</span>
                    </div>
                    <h3 className="font-display text-2xl text-white mb-1">{app.name}</h3>
                    <p className={`text-sm font-light mb-4 ${app.color === "primary" ? "text-primary" : "text-accent"}`}>{app.tagline}</p>
                    <p className="text-white/50 font-light leading-relaxed text-sm">{app.desc}</p>
                    <div className="flex items-center gap-1 mt-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(app.rating) ? "text-primary fill-primary" : "text-white/20"}`} />
                      ))}
                      <span className="text-white/40 text-xs ml-2">{app.rating}</span>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 font-display tracking-widest rounded-none flex items-center gap-2" data-testid={`btn-download-${app.name.toLowerCase().replace(/\s/g, "-")}`}>
                      <Download className="w-4 h-4" />
                      Download Free
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Premium Apps */}
      <section className="py-24 border-t border-white/5 bg-card/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-accent" />
                </div>
                <span className="font-display text-accent tracking-widest text-sm uppercase">Premium Apps</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-white">
                For The Builders<br />Going Deeper
              </h2>
            </div>
            <p className="hidden md:block text-white/40 font-light max-w-xs text-right">
              Professional-grade tools for Christian creatives who are serious about their craft.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {paidApps.map((app) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={app.name}
                  variants={itemVariant}
                  className={`glass-panel flex flex-col overflow-hidden transition-all duration-500 ${app.highlight ? "border-accent/40 hover:border-accent/60" : "hover:border-white/20"}`}
                  data-testid={`paid-app-${app.name.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {app.highlight && (
                    <div className="bg-accent/10 border-b border-accent/20 px-6 py-2 text-center">
                      <span className="font-display tracking-widest text-accent text-xs uppercase">Most Popular</span>
                    </div>
                  )}
                  <div className="p-8 flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${app.color === "primary" ? "bg-primary/15" : "bg-accent/15"}`}>
                        <Icon className={`w-7 h-7 ${app.color === "primary" ? "text-primary" : "text-accent"}`} />
                      </div>
                      <span className="text-xs font-display tracking-widest text-white/30 uppercase border border-white/10 px-2 py-1">{app.tag}</span>
                    </div>
                    <h3 className="font-display text-2xl text-white mb-1">{app.name}</h3>
                    <p className={`text-sm font-light mb-4 ${app.color === "primary" ? "text-primary" : "text-accent"}`}>{app.tagline}</p>
                    <p className="text-white/50 font-light leading-relaxed text-sm">{app.desc}</p>
                    <p className="font-display text-3xl text-white mt-6">{app.price}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <Button className={`w-full font-display tracking-widest rounded-none flex items-center gap-2 ${app.highlight ? "bg-accent hover:bg-accent/90 text-white" : "bg-white/10 hover:bg-white/15 text-white"}`} data-testid={`btn-get-${app.name.toLowerCase().replace(/\s/g, "-")}`}>
                      <ShoppingBag className="w-4 h-4" />
                      Get App
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
