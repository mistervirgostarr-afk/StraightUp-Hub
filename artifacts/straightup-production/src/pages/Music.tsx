import { motion } from "framer-motion";
import { Play, Music2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
};

const tracks = [
  {
    num: "01",
    title: "Look Up",
    status: "live",
    credit: "Engineered by Grammy Award winner J. Hoover",
    color: "primary",
    youtube: "https://www.youtube.com/@StraightUpProductionOfficial",
    spotify: "https://open.spotify.com/album/6YYP3gf5m4RXuvujs1O5EZ",
    apple: "https://music.apple.com/album/1744722397",
    iheart: "http://www.iheart.co/artist/soak-43057501/albums/look-up-268226259",
  },
  {
    num: "02",
    title: "When Time Expires",
    status: "soon",
    credit: "In house · Pending registration",
    color: "accent",
  },
  {
    num: "03",
    title: "Wonder",
    status: "soon",
    credit: "In house · Single",
    color: "primary",
  },
  {
    num: "04",
    title: "Never Part",
    status: "soon",
    credit: "In house · Single",
    color: "accent",
  },
  {
    num: "05",
    title: "On Top",
    status: "soon",
    credit: "In house · Single",
    color: "primary",
  },
  {
    num: "06",
    title: "Please You",
    status: "soon",
    credit: "In house · Single",
    color: "accent",
  },
  {
    num: "07",
    title: "Outro — Harvest Time",
    status: "soon",
    credit: "In house · Single",
    color: "primary",
  },
];

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.997 6.124a.752.752 0 0 0-.752-.753H18.86l-1.362-4.083A.749.749 0 0 0 16.786.75H7.213a.75.75 0 0 0-.712.538L5.14 5.371H.755A.752.752 0 0 0 0 6.124v.002c0 .21.085.4.223.538l8.292 8.293a.748.748 0 0 0 1.06 0l2.424-2.424 2.424 2.424a.748.748 0 0 0 1.06 0l8.292-8.293a.75.75 0 0 0 .222-.538zM12 17.25l-9-9h18z"/>
  </svg>
);

const IHeartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.593c-.425-.38-8.968-7.93-8.968-12.453C3.032 5.67 5.204 3.5 8.5 3.5c1.746 0 3.348.87 4.5 2.25C14.152 4.37 15.754 3.5 17.5 3.5c3.296 0 5.468 2.17 5.468 5.64 0 4.523-8.543 12.073-8.968 12.453z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Music() {
  const liveTrack = tracks[0];
  const comingSoon = tracks.slice(1);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-background pt-24"
    >
      {/* ── Page Header ── */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at top left, hsl(44 56% 54% / 0.08), transparent 60%)" }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-primary tracking-[0.4em] text-lg mb-4 uppercase">S.O.A.K.</p>
            <h1 className="font-display text-7xl md:text-[8rem] text-white leading-none mb-6">
              Music
            </h1>
            <p className="text-white/50 text-xl font-light max-w-xl">
              Every track is testimony. Produced, written, and engineered by Maurice Martel — solo, in-house, and built to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Live Now: Look Up ── */}
      <section className="pb-20 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display tracking-[0.4em] text-sm uppercase text-white/30 mb-8"
          >
            Now Streaming
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="glass-panel overflow-hidden"
          >
            <div className="grid md:grid-cols-5">
              {/* Art placeholder */}
              <div className="md:col-span-2 aspect-square md:aspect-auto relative flex items-center justify-center overflow-hidden"
                style={{ background: "radial-gradient(circle at 40% 50%, hsl(44 90% 56% / 0.18), hsl(0 0% 2%) 70%)" }}
              >
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, hsl(44 56% 54% / 0.4) 0, hsl(44 56% 54% / 0.4) 1px, transparent 0, transparent 50%)",
                    backgroundSize: "20px 20px"
                  }}
                />
                <div className="relative z-10 text-center px-10">
                  <p className="font-display text-[8rem] leading-none text-white/5 select-none">01</p>
                  <Music2 className="w-16 h-16 text-primary/40 mx-auto -mt-8" />
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-3 p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 font-display tracking-[0.3em] text-xs uppercase text-black"
                    style={{ background: "hsl(44 90% 56%)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    Live Now
                  </motion.span>
                  <span className="text-white/30 text-sm font-display tracking-widest">Single</span>
                </div>

                <h2 className="font-display text-6xl md:text-7xl text-white leading-none mb-4">
                  Look Up
                </h2>
                <p className="font-display text-xl text-primary mb-2">S.O.A.K.</p>
                <p className="text-white/40 text-sm font-light mb-8">
                  {liveTrack.credit}
                </p>

                {/* Streaming links */}
                <div className="flex flex-wrap gap-3">
                  <a href={liveTrack.youtube} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="font-display tracking-[0.25em] text-sm px-6 py-5 rounded-none flex items-center gap-2 text-white"
                      style={{ background: "#FF0000", boxShadow: "0 0 30px rgba(255,0,0,0.25)" }}
                    >
                      <YoutubeIcon />
                      YouTube
                    </Button>
                  </a>
                  <a href={liveTrack.spotify} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="font-display tracking-[0.25em] text-sm px-6 py-5 rounded-none flex items-center gap-2 text-white"
                      style={{ background: "#1DB954", boxShadow: "0 0 30px rgba(29,185,84,0.2)" }}
                    >
                      <SpotifyIcon />
                      Spotify
                    </Button>
                  </a>
                  <a href={liveTrack.apple} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="font-display tracking-[0.25em] text-sm px-6 py-5 rounded-none flex items-center gap-2 text-white"
                      style={{ background: "linear-gradient(135deg, #fc3c44, #ff2d55)", boxShadow: "0 0 30px rgba(252,60,68,0.2)" }}
                    >
                      <AppleIcon />
                      Apple Music
                    </Button>
                  </a>
                  <a href={liveTrack.iheart} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="font-display tracking-[0.25em] text-sm px-6 py-5 rounded-none flex items-center gap-2 text-white"
                      style={{ background: "#C6002B", boxShadow: "0 0 30px rgba(198,0,43,0.2)" }}
                    >
                      <IHeartIcon />
                      iHeart
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display tracking-[0.4em] text-sm uppercase text-white/30 mb-10"
          >
            Coming Soon
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col divide-y divide-white/5"
          >
            {comingSoon.map((track) => (
              <motion.div
                key={track.title}
                variants={itemVariant}
                className="group flex items-center gap-4 md:gap-10 py-6 px-2 hover:bg-white/[0.02] transition-colors duration-300 cursor-default"
              >
                {/* Track number — compact on mobile */}
                <span
                  className="font-display text-2xl md:text-4xl w-9 md:w-14 shrink-0 text-right"
                  style={{ color: track.color === "primary" ? "hsl(44 90% 56% / 0.15)" : "hsl(225 100% 65% / 0.15)" }}
                >
                  {track.num}
                </span>

                {/* Icon — hidden on small screens to save space */}
                <div
                  className="hidden sm:flex w-10 h-10 md:w-12 md:h-12 shrink-0 items-center justify-center"
                  style={{
                    background: track.color === "primary"
                      ? "radial-gradient(circle, hsl(44 90% 56% / 0.08), transparent)"
                      : "radial-gradient(circle, hsl(225 100% 65% / 0.08), transparent)"
                  }}
                >
                  <Music2
                    className="w-4 h-4 md:w-5 md:h-5"
                    style={{ color: track.color === "primary" ? "hsl(44 90% 56% / 0.3)" : "hsl(225 100% 65% / 0.3)" }}
                  />
                </div>

                {/* Title + credit — takes remaining space */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl md:text-3xl text-white/70 group-hover:text-white transition-colors duration-300 leading-tight">
                    {track.title}
                  </h3>
                  <p className="text-white/25 text-xs md:text-sm font-light mt-1">{track.credit}</p>
                </div>

                {/* Badge — abbreviated on mobile */}
                <span className="shrink-0 font-display tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs uppercase px-2 md:px-3 py-1 border border-white/10 text-white/25 whitespace-nowrap">
                  <span className="hidden sm:inline">Coming Soon</span>
                  <span className="sm:hidden">Soon</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Production Note ── */}
      <section className="py-20 border-t border-white/5 bg-card/20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Solo. In-House. No Compromise.
            </h2>
            <p className="text-white/50 text-xl font-light leading-relaxed">
              Maurice Martel writes, produces, engineers, and releases every track under StraightUp Production.
              One man. One mission. The MartelEngine makes it possible.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
