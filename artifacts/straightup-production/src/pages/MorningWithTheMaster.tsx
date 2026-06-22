import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Youtube, Bell, BookOpen, Share2, Calendar } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const features = [
  { icon: BookOpen, label: "Daily Scripture", desc: "A new verse every morning, drawn from the Words of the Lord Jesus Christ and the full canon of Scripture." },
  { icon: BookOpen, label: "Today's Reflection", desc: "A short devotional thought to carry with you — written to meet you where you are." },
  { icon: Bell, label: "Remind Me", desc: "Set a daily reminder so you never miss your morning word." },
  { icon: Calendar, label: "All Days", desc: "Browse every day of the year. Go back. Look ahead. The Word is always there." },
  { icon: Share2, label: "Share Scripture", desc: "Send the verse or the full devotional to someone who needs it today." },
];

export default function MorningWithTheMaster() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ background: "hsl(20 30% 4%)" }}
    >
      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden">
        {/* Library background — the app's own aesthetic */}
        <div className="absolute inset-0">
          <img
            src="/assets/mwtm-home.jpg"
            alt="Morning with the Master"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        </div>

        {/* Back */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <Link href="/apps">
            <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors font-display tracking-widest text-xs uppercase">
              <ChevronLeft className="w-4 h-4" /> Apps
            </button>
          </Link>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            {/* Free badge */}
            <div className="inline-flex items-center gap-2 mb-6 border px-4 py-2"
              style={{ borderColor: "hsl(44 90% 56% / 0.4)", background: "hsl(44 90% 56% / 0.08)" }}>
              <Youtube className="w-4 h-4" style={{ color: "hsl(44 90% 56%)" }} />
              <span className="font-display tracking-[0.3em] text-xs uppercase" style={{ color: "hsl(44 90% 56%)" }}>
                Free for YouTube Subscribers
              </span>
            </div>

            <h1
              className="font-display text-5xl md:text-7xl lg:text-[8rem] text-white leading-none tracking-tight mb-4"
              data-testid="mwtm-title"
            >
              Morning with<br />
              <span style={{ color: "hsl(44 80% 62%)" }}>the Master</span>
            </h1>

            <p className="text-white/50 text-xl font-light max-w-lg mb-10 leading-relaxed">
              A daily devotional app. Wake up to a scripture verse and a reflection
              crafted to start your day grounded in the Word.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div>
                <p className="text-white/25 font-display tracking-widest text-xs uppercase mb-1">Price</p>
                <p className="font-display text-4xl text-white">
                  Free <span className="text-2xl text-white/40">— with subscription</span>
                </p>
              </div>
              <a
                href="https://www.youtube.com/@StraightUpProductionOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="font-display tracking-[0.25em] text-base px-10 py-5 rounded-none flex items-center gap-3"
                  style={{ background: "#FF0000", boxShadow: "0 0 40px rgba(255,0,0,0.3)" }}
                  data-testid="btn-subscribe-yt"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe on YouTube
                </Button>
              </a>
            </div>
            <p className="mt-4 text-white/25 text-sm font-light">
              Subscribe → come back here → get the app. No account needed beyond your YouTube subscription.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Screenshot pair ── */}
      <section className="border-t border-white/5 grid md:grid-cols-2">
        {[
          { src: "/assets/mwtm-home.jpg", label: "Daily Scripture View" },
          { src: "/assets/mwtm-devotional.jpg", label: "Today's Reflection" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="relative overflow-hidden group"
            style={{ aspectRatio: "9/16" }}
          >
            <img
              src={s.src}
              alt={s.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute bottom-4 left-4">
              <span className="font-display text-xs tracking-widest text-white/50 uppercase">{s.label}</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── What's inside ── */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p className="font-display tracking-[0.4em] text-sm uppercase mb-6"
                style={{ color: "hsl(44 80% 60%)" }}>
                What It Is
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-white leading-tight mb-8">
                Start every day<br />
                <span style={{ color: "hsl(44 80% 60%)" }}>in the Word.</span>
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-6">
                Morning with the Master opens with the scripture for that day — displayed clean,
                full-screen, set against a warm library backdrop. No clutter. No distractions.
                Just the Word.
              </p>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-6">
                Tap through to read the day's devotional reflection — a focused thought
                to carry with you. Share it. Be reminded by it. Come back tomorrow.
              </p>
              <p className="text-white/30 text-base font-light leading-relaxed">
                Built by Maurice Martel at StraightUp Production. Given freely
                to those who are part of the Kingdom community.
              </p>
            </motion.div>

            {/* Feature list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="flex flex-col gap-6"
            >
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex gap-5 p-6 glass-panel"
                    data-testid={`feature-${i}`}
                  >
                    <div className="shrink-0 mt-1">
                      <Icon className="w-5 h-5" style={{ color: "hsl(44 80% 60%)" }} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-white mb-1">{f.label}</h3>
                      <p className="text-white/40 font-light text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── The verse ── */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/mwtm-devotional.jpg" alt="" aria-hidden="true"
            className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-white/25 font-display tracking-[0.4em] text-xs uppercase mb-10">Today's Word</p>
            <blockquote className="text-2xl md:text-3xl text-white/80 font-light italic leading-relaxed mb-8">
              "What things soever ye desire, when ye pray, believe that ye receive them,
              and ye shall have them."
            </blockquote>
            <p className="font-display tracking-widest text-sm mb-2" style={{ color: "hsl(44 80% 60%)" }}>
              — Mark 11:24
            </p>
            <p className="text-white/25 text-sm font-light">The Words of the Lord Jesus Christ</p>
          </motion.div>
        </div>
      </section>

      {/* ── How to get it ── */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">How to Get It</h2>
            <p className="text-white/40 text-lg font-light">Three steps. No cost.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: "hsl(220 20% 10%)" }}>
            {[
              {
                step: "01",
                title: "Subscribe",
                desc: "Head to YouTube and subscribe to @StraightUpProductionOfficial.",
                color: "#FF0000",
              },
              {
                step: "02",
                title: "Come Back",
                desc: "Return to this page. Click the button below to claim your free app.",
                color: "hsl(44 90% 56%)",
              },
              {
                step: "03",
                title: "Start Your Morning",
                desc: "Open Morning with the Master every day. The Word will be waiting.",
                color: "hsl(185 100% 60%)",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="p-10 text-center"
                style={{ background: "hsl(0 0% 2%)" }}
                data-testid={`step-${i}`}
              >
                <p className="font-display text-5xl mb-4" style={{ color: s.color, opacity: 0.25 }}>{s.step}</p>
                <h3 className="font-display text-2xl text-white mb-3">{s.title}</h3>
                <p className="text-white/40 font-light text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-14"
          >
            <a
              href="https://www.youtube.com/@StraightUpProductionOfficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="font-display tracking-[0.3em] text-lg px-14 py-7 rounded-none flex items-center gap-3 mx-auto"
                style={{ background: "#FF0000", boxShadow: "0 0 50px rgba(255,0,0,0.3)" }}
                data-testid="btn-subscribe-bottom"
              >
                <Youtube className="w-6 h-6" />
                Subscribe & Get the App Free
              </Button>
            </a>
            <p className="mt-5 text-white/20 text-sm font-light">
              Powered by StraightUp Production · Built by Maurice Martel
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
