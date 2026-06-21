import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/artist", label: "S.O.A.K." },
  { href: "/martel-engine", label: "MartelEngine" },
  { href: "/music", label: "Music" },
  { href: "/apps", label: "Apps" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.85]);
  const blurPx = useTransform(scrollY, [0, 100], [0, 16]);
  const bgColor = useMotionTemplate`rgba(5, 8, 16, ${bgOpacity})`;
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
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-5">
        <Link href="/" className="group" data-testid="nav-logo">
          <span className="font-display text-2xl tracking-widest uppercase text-white group-hover:text-primary transition-colors duration-500">
            StraightUp <span className="text-primary group-hover:text-accent transition-colors duration-500">Production</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                location === link.href ? "text-primary" : "text-white/60 hover:text-white"
              }`}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\./g, "")}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="nav-mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-display tracking-widest uppercase transition-colors ${
                    location === link.href ? "text-primary" : "text-white/60"
                  }`}
                  data-testid={`nav-mobile-${link.label.toLowerCase().replace(/\./g, "")}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
