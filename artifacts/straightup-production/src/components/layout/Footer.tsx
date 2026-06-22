import { Link } from "wouter";
import { Cross, Cpu, Crown, Youtube } from "lucide-react";

const pillars = [
  { icon: Cross, label: "Christ Centered" },
  { icon: Cpu, label: "Tech Powered" },
  { icon: Crown, label: "Purpose Driven" },
  { icon: Youtube, label: "Kingdom Content" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 pt-20 pb-8" style={{ background: "hsl(0 0% 1.5%)" }}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Faith statement */}
        <div className="text-center mb-16 border-b border-white/5 pb-16">
          <p className="font-display text-3xl md:text-4xl text-white tracking-wider mb-2">
            Faith Fuels The Engine.
          </p>
          <p className="font-display text-2xl md:text-3xl tracking-wider"
            style={{ color: "hsl(var(--engine-gold))" }}>
            The Kingdom Drives The Mission.
          </p>
        </div>

        {/* Four pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {pillars.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 text-center">
              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center">
                <Icon className="w-4 h-4 text-white/50" />
              </div>
              <span className="font-display text-xs tracking-[0.3em] text-white/40 uppercase">{label}</span>
            </div>
          ))}
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl tracking-widest mb-2 text-white">
              StraightUp <span style={{ color: "hsl(var(--engine-gold))" }}>Production</span>
            </h3>
            <p className="text-white/30 text-xs font-display tracking-[0.25em] uppercase mb-4">
              Christ Centered. Tech Powered. Purpose Driven.
            </p>
            <p className="text-white/45 max-w-sm font-light text-sm leading-relaxed">
              Building digital tools and cinematic content that glorify God and empower a generation.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-[0.25em] uppercase mb-5 text-white/60">Explore</h4>
            <div className="flex flex-col gap-3">
              <Link href="/artist" className="text-sm text-white/40 hover:text-white transition-colors">S.O.A.K. — Artist</Link>
              <Link href="/martel-engine" className="text-sm text-white/40 transition-colors hover:text-white"
                style={{ color: "hsl(var(--engine-blue) / 0.6)" }}>
                MartelEngine™
              </Link>
              <Link href="/music" className="text-sm text-white/40 hover:text-white transition-colors">Music</Link>
              <Link href="/apps" className="text-sm text-white/40 hover:text-white transition-colors">Apps</Link>
              <Link href="/contact" className="text-sm text-white/40 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-[0.25em] uppercase mb-5 text-white/60">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.youtube.com/@StraightUpProductionOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-red-400 transition-colors flex items-center gap-2"
              >
                <Youtube className="w-3.5 h-3.5" /> YouTube
              </a>
              <Link href="/contact" className="text-sm text-white/40 hover:text-white transition-colors">
                Business Inquiries
              </Link>
              <Link href="/contact" className="text-sm text-white/40 hover:text-white transition-colors">
                Artist Collabs
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">&copy; {new Date().getFullYear()} StraightUp Production. All rights reserved.</p>
          <p className="font-display tracking-[0.35em] text-xs text-white/20 uppercase">
            Powered by MartelEngine™
          </p>
          <p className="font-display text-sm tracking-[0.4em] text-white/30 uppercase">
            To God Be The Glory
          </p>
        </div>
      </div>
    </footer>
  );
}
