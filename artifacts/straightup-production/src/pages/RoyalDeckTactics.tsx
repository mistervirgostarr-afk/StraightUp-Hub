import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Crown, Sword, Shield, Zap, Users, Volume2, BookOpen, ChevronLeft } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const modes = [
  { icon: Sword, name: "Quick Battle", desc: "Jump straight in. Face the AI with your default deck and prove your tactics on the board.", color: "hsl(280 80% 65%)" },
  { icon: Crown, name: "Pathway of Kings", desc: "A structured campaign of escalating battles. Each victory unlocks the next challenge.", color: "hsl(44 90% 56%)" },
  { icon: BookOpen, name: "Deck Builder", desc: "Build your perfect deck from 48 unique cards. Mix archetypes, balance mana costs, and create your strategy.", color: "hsl(185 100% 60%)" },
  { icon: Zap, name: "Draft Mode", desc: "Pick cards on the fly and battle with what you draft. Every run is different.", color: "hsl(120 60% 50%)" },
  { icon: Shield, name: "Card Database", desc: "48 fully illustrated cards. Browse every unit, read abilities, and study the archetypes.", color: "hsl(220 80% 60%)" },
  { icon: Users, name: "2-Player VS", desc: "Coming soon — go head-to-head with a friend on the same board.", color: "hsl(0 60% 55%)", soon: true },
  { icon: Volume2, name: "Sound Engine", desc: "Coming soon — full audio powered by StraightUp Production. Every card will have its sound.", color: "hsl(44 90% 56%)", soon: true },
];

const features = [
  "48 fully illustrated battle cards",
  "Chess-based movement on a tactical grid",
  "Mana system — every play costs resources",
  "Archetype abilities (DEF, ELI, and more)",
  "AI opponent with adaptive strategy",
  "Deck Builder + Draft Mode",
  "Pathway of Kings campaign",
  "Card Chart & Archetypes reference",
  "Chess Combinations guide built in",
  "No subscription. One price. Yours forever.",
];

const screenshots = [
  { src: "/assets/rdt-menu.jpg", label: "Main Menu" },
  { src: "/assets/rdt-gameplay.jpg", label: "Live Gameplay" },
  { src: "/assets/rdt-card.jpg", label: "Card Detail View" },
  { src: "/assets/rdt-cards-grid.jpg", label: "48-Card Roster" },
];

export default function RoyalDeckTactics() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-black"
    >
      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden">
        {/* Gameplay screenshot as full bg */}
        <div className="absolute inset-0">
          <img
            src="/assets/rdt-gameplay.jpg"
            alt="Royal Deck Tactics gameplay"
            className="w-full h-full object-cover object-top scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* Back link */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <Link href="/apps">
            <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors font-display tracking-widest text-xs uppercase">
              <ChevronLeft className="w-4 h-4" /> Apps
            </button>
          </Link>
        </div>

        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="font-display tracking-[0.3em] text-xs uppercase px-3 py-1 border"
                style={{ borderColor: "hsl(44 90% 56% / 0.4)", color: "hsl(44 90% 56%)" }}
              >
                StraightUp Production
              </span>
              <span className="font-display tracking-widest text-xs text-white/30 uppercase">Strategy · Card Battle · Chess</span>
            </div>

            <h1
              className="font-display text-6xl md:text-8xl lg:text-[9rem] text-white leading-none tracking-tighter mb-4"
              data-testid="rdt-title"
            >
              Royal Deck<br />
              <span style={{ color: "hsl(44 90% 56%)" }}>Tactics</span>
            </h1>

            <p className="text-white/50 text-xl font-light max-w-xl mb-10">
              A strategic chess-card battle game where every move costs mana and every card
              changes the board. 48 units. Infinite strategy.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div>
                <p className="text-white/30 font-display tracking-widest text-xs uppercase mb-1">One-Time Purchase</p>
                <p className="font-display text-5xl text-white" style={{ color: "hsl(44 90% 56%)" }}>
                  $14.99
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:ml-6">
                <Button
                  className="font-display tracking-[0.3em] text-lg px-12 py-6 rounded-none text-black"
                  style={{ background: "hsl(44 90% 56%)", boxShadow: "0 0 40px hsl(44 90% 56% / 0.4)" }}
                  data-testid="btn-buy-rdt"
                  onClick={() => alert("Payment coming soon — check back shortly!")}
                >
                  Buy Now — $14.99
                </Button>
                <p className="text-white/25 text-xs font-light">
                  No subscription. No microtransactions. Own it forever.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Screenshot Gallery ── */}
      <section className="border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {screenshots.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "9/16" }}
            >
              <img
                src={s.src}
                alt={s.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4">
                <span className="font-display text-xs tracking-widest text-white/50 uppercase">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── About the Game ── */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p className="font-display tracking-[0.4em] text-sm uppercase mb-6" style={{ color: "hsl(44 90% 56%)" }}>
                What Is It
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-white leading-tight mb-8">
                Chess meets cards.<br />
                <span style={{ color: "hsl(280 80% 65%)" }}>Strategy meets power.</span>
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-6">
                Royal Deck Tactics takes the logic of chess — positional thinking, piece movement,
                board control — and fuses it with a card game's depth. Every unit you deploy is
                a card from your hand. Every card costs mana. Every move is a decision.
              </p>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                Built entirely by Maurice Martel. Designed, coded, and illustrated in-house
                at StraightUp Production.
              </p>
            </motion.div>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="glass-panel p-10"
            >
              <p className="font-display tracking-[0.3em] text-xs uppercase text-white/30 mb-6">What's Included</p>
              <div className="flex flex-col gap-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: i === features.length - 1 ? "hsl(44 90% 56%)" : "hsl(280 80% 65%)" }}
                    />
                    <p className={`font-light ${i === features.length - 1 ? "text-white" : "text-white/60"} text-sm leading-relaxed`}>
                      {f}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Game Modes ── */}
      <section className="py-24 border-t border-white/5"
        style={{ background: "radial-gradient(ellipse at center, hsl(280 30% 5%), hsl(0 0% 1.5%) 80%)" }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-display tracking-[0.5em] text-xs text-white/25 uppercase mb-4">7 Modes</p>
            <h2 className="font-display text-5xl md:text-6xl text-white">How You Play</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modes.map((mode, i) => {
              const Icon = mode.icon;
              return (
                <motion.div
                  key={mode.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`glass-panel p-8 relative overflow-hidden ${mode.soon ? "opacity-60" : ""}`}
                  data-testid={`mode-${i}`}
                >
                  {mode.soon && (
                    <div
                      className="absolute top-4 right-4 font-display text-[10px] tracking-widest uppercase px-2 py-1 border"
                      style={{ borderColor: `${mode.color}40`, color: mode.color }}
                    >
                      Coming Soon
                    </div>
                  )}
                  <Icon className="w-6 h-6 mb-5" style={{ color: mode.color }} />
                  <h3 className="font-display text-2xl text-white mb-3">{mode.name}</h3>
                  <p className="text-white/45 font-light text-sm leading-relaxed">{mode.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 48 Cards ── */}
      <section className="py-0 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/rdt-cards-grid.jpg"
            alt="All 48 cards"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-xl"
          >
            <p className="font-display tracking-[0.5em] text-xs uppercase mb-6" style={{ color: "hsl(44 90% 56%)" }}>
              The Roster
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-none mb-8">
              48 Cards.<br />
              <span style={{ color: "hsl(280 80% 65%)" }}>Zero Repeats.</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-4">
              Every card is unique — a fully illustrated unit with its own ATK, HP, mana cost,
              archetype class, and special ability. Five color factions. Multiple archetypes.
              Endless deck combinations.
            </p>
            <p className="text-white/35 text-sm font-light">
              DEF · ELI · and more archetype classes — each with distinct abilities that
              change how the board plays out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/rdt-card.jpg"
              alt="Sentinel Knight"
              className="w-48 mx-auto mb-10 shadow-2xl"
              style={{ boxShadow: "0 0 60px hsl(280 80% 65% / 0.3)" }}
            />
            <h2 className="font-display text-5xl md:text-7xl text-white mb-4">Own The Board.</h2>
            <p className="font-display text-3xl md:text-4xl mb-10" style={{ color: "hsl(44 90% 56%)" }}>
              $14.99 — One Time. Forever.
            </p>
            <Button
              className="font-display tracking-[0.3em] text-xl px-16 py-7 rounded-none text-black"
              style={{ background: "hsl(44 90% 56%)", boxShadow: "0 0 60px hsl(44 90% 56% / 0.4)" }}
              data-testid="btn-buy-rdt-bottom"
              onClick={() => alert("Payment coming soon — check back shortly!")}
            >
              Buy Now — $14.99
            </Button>
            <p className="mt-6 text-white/25 text-sm font-light">
              Powered by StraightUp Production · Built by Maurice Martel
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
