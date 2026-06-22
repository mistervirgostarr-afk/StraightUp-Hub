import { motion } from "framer-motion";
import { Play, Music2, Disc3 } from "lucide-react";
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

const featured = {
  title: "Kingdom Come",
  artist: "S.O.A.K.",
  type: "Album",
  year: "2022",
  tracks: 16,
  desc: "The debut album — sixteen tracks of testimony, war cry, and worship. Produced, written, and engineered entirely by Maurice Martel. A cathedral in sound form.",
  gradient: "from-yellow-900/40 to-blue-900/20",
};

const catalog = [
  { title: "Still Waters", type: "EP", year: "2023", tracks: 5, genre: "Gospel Rap", color: "accent" },
  { title: "Crowned", type: "Single", year: "2024", tracks: 1, genre: "Christian Hip-Hop", color: "primary" },
  { title: "Righteous Fire", type: "Single", year: "2022", tracks: 1, genre: "Gospel Rap", color: "accent" },
  { title: "The Valley", type: "Single", year: "2021", tracks: 1, genre: "Worship Rap", color: "primary" },
  { title: "Emmanuel", type: "Single", year: "2021", tracks: 1, genre: "Melodic Gospel", color: "accent" },
  { title: "In His Name", type: "Single", year: "2020", tracks: 1, genre: "Christian Hip-Hop", color: "primary" },
];

const genres = ["All", "Gospel Rap", "Christian Hip-Hop", "Worship Rap", "Melodic Gospel"];

export default function Music() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-background pt-24"
    >
      {/* ── Upcoming: Get Back to Work ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <img
            src="/assets/album-get-back-to-work.png"
            alt="Get Back to Work — upcoming album"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 font-display tracking-[0.35em] text-xs uppercase"
              style={{ background: "hsl(44 90% 56%)", color: "hsl(0 0% 2%)" }}>
              Upcoming Album
            </div>
            <h2 className="font-display text-6xl md:text-[7rem] text-white leading-none tracking-tight mb-4">
              Get Back<br />
              <span style={{ color: "hsl(44 80% 60%)" }}>to Work</span>
            </h2>
            <p className="text-white/50 text-xl font-light max-w-md mb-8 leading-relaxed">
              S.O.A.K. · StraightUp Production
            </p>
            <p className="text-white/35 text-sm font-light max-w-sm leading-relaxed">
              The next chapter is coming. Cinematic, driven, relentless.
              A Kingdom call to rise and build — no excuses, just execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at top left, hsl(44 56% 54% / 0.08), transparent 60%)" }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-primary tracking-[0.4em] text-lg mb-4 uppercase">The Catalog</p>
            <h1 className="font-display text-7xl md:text-[8rem] text-white leading-none mb-6" data-testid="music-title">
              Music
            </h1>
            <p className="text-white/50 text-xl font-light max-w-xl">
              Every track is a page of testimony. Every beat is a prayer answered in frequency. Produced, written, and engineered by Maurice Martel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Release */}
      <section className="pb-16 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className={`glass-panel overflow-hidden`}
            data-testid="featured-release"
          >
            <div className="grid md:grid-cols-2">
              <div className={`aspect-square bg-gradient-to-br ${featured.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, hsl(44 56% 54% / 0.3) 0, hsl(44 56% 54% / 0.3) 1px, transparent 0, transparent 50%)",
                    backgroundSize: "20px 20px"
                  }}
                />
                <div className="relative z-10 text-center">
                  <Disc3 className="w-24 h-24 text-primary/60 mx-auto mb-4" />
                  <p className="font-display text-4xl text-white/20 tracking-widest">{featured.title}</p>
                </div>
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-display tracking-widest text-accent text-sm uppercase border border-accent/30 px-3 py-1">Featured Release</span>
                  <span className="text-white/30 text-sm">{featured.type} — {featured.year}</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl text-white mb-4">{featured.title}</h2>
                <p className="font-display text-xl text-primary mb-6">{featured.artist}</p>
                <p className="text-white/50 font-light leading-relaxed text-lg mb-8">{featured.desc}</p>
                <div className="flex items-center gap-6 mb-8 text-sm text-white/40 font-display tracking-widest">
                  <span>{featured.tracks} Tracks</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{featured.year}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>Full Production</span>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-background font-display tracking-widest rounded-none px-8 py-5 self-start flex items-center gap-3" data-testid="btn-play-featured">
                  <Play className="w-5 h-5 fill-current" />
                  Listen Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Genre Filter */}
      <section className="py-12 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-3" data-testid="genre-filters">
            {genres.map((genre) => (
              <button
                key={genre}
                className={`font-display tracking-widest text-sm uppercase px-5 py-2 border transition-all duration-300 ${
                  genre === "All"
                    ? "border-primary text-primary bg-primary/10"
                    : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/70"
                }`}
                data-testid={`filter-${genre.toLowerCase().replace(/\s/g, "-")}`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {catalog.map((release) => (
              <motion.div
                key={release.title}
                variants={itemVariant}
                className="glass-panel group hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
                data-testid={`track-${release.title.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="aspect-square relative overflow-hidden flex items-center justify-center"
                  style={{
                    background: release.color === "primary"
                      ? "radial-gradient(circle, hsl(44 56% 54% / 0.15), hsl(224 53% 4%) 70%)"
                      : "radial-gradient(circle, hsl(220 100% 56% / 0.15), hsl(224 53% 4%) 70%)"
                  }}
                >
                  <Music2 className={`w-16 h-16 ${release.color === "primary" ? "text-primary/30" : "text-accent/30"} group-hover:scale-110 transition-transform duration-500`} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-display tracking-widest uppercase ${release.color === "primary" ? "text-primary" : "text-accent"}`}>
                      {release.type}
                    </span>
                    <span className="text-xs text-white/30">{release.year}</span>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-1">{release.title}</h3>
                  <p className="text-white/40 text-sm font-light">S.O.A.K.</p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                    <span className="text-xs text-white/30 font-display tracking-wider">{release.genre}</span>
                    <span className="text-white/20 text-xs">•</span>
                    <span className="text-xs text-white/30">{release.tracks} track{release.tracks > 1 ? "s" : ""}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Production Note */}
      <section className="py-20 border-t border-white/5 bg-card/20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              100% In-House Production
            </h2>
            <p className="text-white/50 text-xl font-light leading-relaxed">
              Every beat, every arrangement, every mix, and every master that comes out of StraightUp Production
              is crafted by Maurice Martel himself. No outsourcing. No compromise. The MartelEngine is only the beginning.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
