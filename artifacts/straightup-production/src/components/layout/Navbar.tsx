import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/artist", label: "S.O.A.K." },
  { href: "/martel-engine", label: "MartelEngine™" },
  { href: "/music", label: "Music" },
  { href: "/apps", label: "Apps" },
  { href: "/contact", label: "Contact" },
];

function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Roof / A-frame lines pointing up */}
      <line x1="30" y1="4" x2="6" y2="26" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="4" x2="54" y2="26" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="20" x2="48" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Vertical stem */}
      <line x1="30" y1="26" x2="30" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Circle at base */}
      <circle cx="30" cy="46" r="8" stroke="white" strokeWidth="2.5" />
    </svg>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.92]);
  const blurPx = useTransform(scrollY, [0, 80], [0, 20]);
  const bgColor = useMotionTemplate`rgba(4, 4, 6, ${bgOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{ backgroundColor: bgColor, backdropFilter }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" data-testid="nav-logo">
          <LogoMark size={36} />
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-[0.2em] uppercase text-white group-hover:text-white transition-colors duration-300">
              StraightUp
            </span>
            <span className="font-display text-[0.6rem] tracking-[0.35em] uppercase"
              style={{ color: "hsl(var(--engine-gold))" }}>
              Production
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-display tracking-[0.2em] uppercase transition-colors duration-300 ${
                location === link.href
                  ? "text-[hsl(var(--engine-gold))]"
                  : "text-white/55 hover:text-white"
              }`}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/[\s.™]/g, "")}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl border-t border-white/8"
            style={{ background: "rgba(4,4,6,0.97)" }}
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-display tracking-widest uppercase transition-colors ${
                    location === link.href
                      ? "text-[hsl(var(--engine-gold))]"
                      : "text-white/55"
                  }`}
                  data-testid={`nav-mobile-${link.label.toLowerCase().replace(/[\s.™]/g, "")}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/8">
                <p className="text-[10px] font-display tracking-[0.35em] text-white/25 uppercase">
                  Christ Centered · Tech Powered · Purpose Driven
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
