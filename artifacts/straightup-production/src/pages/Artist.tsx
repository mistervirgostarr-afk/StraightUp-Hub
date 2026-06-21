import { motion } from "framer-motion";
import { Link } from "wouter";
import { Music2, Mic2, Heart, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } }
};

const releases = [
  { title: "Crowned", type: "Single", year: "2024", desc: "A declaration of identity — son, heir, crowned in grace." },
  { title: "Still Waters", type: "EP", year: "2023", desc: "Five tracks of cinematic gospel rap, layered with orchestral production." },
  { title: "Kingdom Come", type: "Album", year: "2022", desc: "The debut — sixteen tracks of testimony, war, and worship." },
  { title: "Righteous Fire", type: "Single", year: "2022", desc: "Hard-hitting proclamation with brass and 808s." },
  { title: "The Valley", type: "Single", year: "2021", desc: "An honest walk through doubt and divine faithfulness." },
  { title: "Emmanuel", type: "Single", year: "2021", desc: "God with us — a melodic meditation at midnight." },
];

const pillars = [
  { icon: Crown, label: "Sonship", desc: "Identity rooted not in achievement but in whose you are. The King's son walks different." },
  { icon: Mic2, label: "Truth in Sound", desc: "Every bar is accountable. Every beat carries weight. No filler, no compromise." },
  { icon: Heart, label: "Faith in Motion", desc: "Art is not separate from worship — it is worship in motion, form, and frequency." },
  { icon: Music2, label: "Excellence", desc: "The God of all creation deserves the very best craft we can offer." },
];

export default function Artist() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-background pt-24"
    >
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/30 via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{ background: "radial-gradient(circle at 70% 30%, hsl(44 56% 54% / 0.4), transparent 60%)" }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-primary tracking-[0.4em] text-lg mb-4 uppercase" data-testid="artist-label">
              The Artist
            </p>
            <h1 className="font-display text-8xl md:text-[11rem] text-white leading-none tracking-tight mb-4" data-testid="artist-name">
              S.O.A.K.
            </h1>
            <p className="text-2xl md:text-3xl text-white/50 font-light tracking-widest mb-8 uppercase">
              Son Of A King
            </p>
            <p className="text-lg text-white/60 max-w-xl font-light leading-relaxed">
              Maurice Martel — the voice, the vision, the vessel. 
              Gospel rap forged in fire, carried by the Spirit, and released for the Kingdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-[3/4] glass-panel flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(circle at 50% 30%, hsl(44 56% 54% / 0.15), transparent 70%)" }}
              />
              <div className="text-center relative z-10">
                <div className="font-display text-8xl text-primary/20 mb-4">S.O.A.K.</div>
                <Crown className="w-16 h-16 text-primary/40 mx-auto" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-display text-5xl md:text-6xl text-white">
              A Name Chosen,<br />
              <span className="text-primary">Not Assumed</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed text-lg">
              Maurice Martel didn't stumble into this calling. Every role he carries — CEO, composer, 
              engineer, producer — is an extension of one identity: son of the Most High King. 
              S.O.A.K. is the art name that carries the testimony.
            </p>
            <p className="text-white/60 font-light leading-relaxed text-lg">
              His sound sits at the intersection of cinematic orchestration and hard-hitting gospel rap. 
              Beats built in the studio he runs, bars written from the pages of his own walk with God. 
              Nothing borrowed, nothing borrowed — this is first-person faith in sound.
            </p>
            <p className="text-white/60 font-light leading-relaxed text-lg">
              As founder of StraightUp Production and inventor of the MartelEngine, 
              Maurice brings not just artistry but innovation to Christian music — engineering the 
              next era of worship-driven culture.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/music">
                <Button className="bg-primary hover:bg-primary/90 text-background font-display tracking-widest rounded-none px-8" data-testid="btn-artist-music">
                  Hear The Music
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-display tracking-widest rounded-none px-8" data-testid="btn-artist-contact">
                  Connect
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars of Faith */}
      <section className="py-24 border-t border-white/5 bg-card/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-4">The Philosophy</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto font-light">
              Four pillars that hold up everything S.O.A.K. creates.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.label} variants={item} className="glass-panel p-8 group hover:border-primary/30 transition-colors duration-500" data-testid={`pillar-${pillar.label.toLowerCase().replace(/\s/g, "-")}`}>
                  <Icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-display text-2xl mb-3 text-white">{pillar.label}</h3>
                  <p className="text-white/50 font-light leading-relaxed text-sm">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Discography */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-4">Discography</h2>
            <p className="text-white/50 font-light">Every release is a chapter of the journey.</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {releases.map((release) => (
              <motion.div
                key={release.title}
                variants={item}
                className="glass-panel group hover:border-primary/20 transition-all duration-500 overflow-hidden"
                data-testid={`release-${release.title.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle, hsl(44 56% 54% / 0.1), transparent 70%)" }}
                  />
                  <Music2 className="w-16 h-16 text-primary/30 group-hover:text-primary/60 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-display tracking-widest text-accent uppercase">{release.type}</span>
                    <span className="text-xs text-white/40">{release.year}</span>
                  </div>
                  <h3 className="font-display text-2xl mb-2 text-white">{release.title}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">{release.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
