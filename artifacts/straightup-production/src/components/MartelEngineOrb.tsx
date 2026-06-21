import { motion } from "framer-motion";

interface MartelEngineOrbProps {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
}

const sizes = {
  sm: { outer: 200, mid: 140, inner: 80, core: 36 },
  md: { outer: 340, mid: 240, inner: 140, core: 60 },
  lg: { outer: 520, mid: 370, inner: 220, core: 90 },
  hero: { outer: 700, mid: 500, inner: 300, core: 110 },
};

export default function MartelEngineOrb({ size = "hero", className = "" }: MartelEngineOrbProps) {
  const s = sizes[size];

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: s.outer, height: s.outer }}
      data-testid="martel-engine-orb"
    >
      {/* Ambient background glow */}
      <div
        className="absolute rounded-full animate-pulse"
        style={{
          width: s.outer * 1.4,
          height: s.outer * 1.4,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, hsla(280, 65%, 35%, 0.18), hsla(25, 90%, 30%, 0.12), transparent 70%)`,
          animationDuration: "4s",
        }}
      />

      {/* Outer amber/orange ray burst */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: s.outer,
          height: s.outer,
          background: `conic-gradient(
            from 0deg,
            hsla(25, 90%, 50%, 0.0) 0deg,
            hsla(25, 90%, 50%, 0.35) 8deg,
            hsla(25, 90%, 50%, 0.0) 16deg,
            hsla(25, 90%, 50%, 0.0) 32deg,
            hsla(25, 90%, 50%, 0.28) 40deg,
            hsla(25, 90%, 50%, 0.0) 48deg,
            hsla(25, 90%, 50%, 0.0) 64deg,
            hsla(25, 90%, 50%, 0.32) 72deg,
            hsla(25, 90%, 50%, 0.0) 80deg,
            hsla(25, 90%, 50%, 0.0) 96deg,
            hsla(25, 90%, 50%, 0.25) 104deg,
            hsla(25, 90%, 50%, 0.0) 112deg,
            hsla(25, 90%, 50%, 0.0) 128deg,
            hsla(25, 90%, 50%, 0.38) 136deg,
            hsla(25, 90%, 50%, 0.0) 144deg,
            hsla(25, 90%, 50%, 0.0) 160deg,
            hsla(25, 90%, 50%, 0.3) 168deg,
            hsla(25, 90%, 50%, 0.0) 176deg,
            hsla(25, 90%, 50%, 0.0) 192deg,
            hsla(25, 90%, 50%, 0.35) 200deg,
            hsla(25, 90%, 50%, 0.0) 208deg,
            hsla(25, 90%, 50%, 0.0) 224deg,
            hsla(25, 90%, 50%, 0.28) 232deg,
            hsla(25, 90%, 50%, 0.0) 240deg,
            hsla(25, 90%, 50%, 0.0) 256deg,
            hsla(25, 90%, 50%, 0.33) 264deg,
            hsla(25, 90%, 50%, 0.0) 272deg,
            hsla(25, 90%, 50%, 0.0) 288deg,
            hsla(25, 90%, 50%, 0.3) 296deg,
            hsla(25, 90%, 50%, 0.0) 304deg,
            hsla(25, 90%, 50%, 0.0) 320deg,
            hsla(25, 90%, 50%, 0.35) 328deg,
            hsla(25, 90%, 50%, 0.0) 336deg,
            hsla(25, 90%, 50%, 0.0) 352deg,
            hsla(25, 90%, 50%, 0.0) 360deg
          )`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Outer purple ring */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: s.outer * 0.95,
          height: s.outer * 0.95,
          borderColor: `hsla(280, 65%, 55%, 0.25)`,
          boxShadow: `0 0 ${s.outer * 0.04}px hsla(280, 65%, 55%, 0.3), inset 0 0 ${s.outer * 0.04}px hsla(280, 65%, 55%, 0.15)`,
          background: `radial-gradient(circle, transparent 40%, hsla(280, 65%, 45%, 0.08) 100%)`,
        }}
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Second purple ring */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: s.outer * 0.78,
          height: s.outer * 0.78,
          borderColor: `hsla(275, 70%, 58%, 0.35)`,
          boxShadow: `0 0 ${s.outer * 0.05}px hsla(275, 70%, 58%, 0.4), inset 0 0 ${s.outer * 0.05}px hsla(275, 70%, 58%, 0.2)`,
        }}
        animate={{ scale: [1, 1.02, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Third purple ring */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: s.outer * 0.62,
          height: s.outer * 0.62,
          borderColor: `hsla(270, 75%, 62%, 0.45)`,
          boxShadow: `0 0 ${s.outer * 0.06}px hsla(270, 75%, 62%, 0.5), inset 0 0 ${s.outer * 0.06}px hsla(270, 75%, 62%, 0.25)`,
        }}
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Inner amber ring (transition from purple to cyan) */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: s.outer * 0.47,
          height: s.outer * 0.47,
          borderColor: `hsla(200, 90%, 58%, 0.5)`,
          boxShadow: `0 0 ${s.outer * 0.06}px hsla(200, 90%, 60%, 0.6), inset 0 0 ${s.outer * 0.06}px hsla(200, 90%, 60%, 0.3)`,
        }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {/* Cyan mid glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: s.mid,
          height: s.mid,
          background: `radial-gradient(circle, hsla(185, 100%, 65%, 0.25) 0%, hsla(185, 100%, 60%, 0.1) 50%, transparent 80%)`,
        }}
      />

      {/* Inner cyan core glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: s.inner,
          height: s.inner,
          background: `radial-gradient(circle, hsla(185, 100%, 80%, 0.9) 0%, hsla(185, 100%, 65%, 0.7) 30%, hsla(185, 100%, 55%, 0.4) 60%, transparent 85%)`,
          boxShadow: `0 0 ${s.inner * 0.4}px hsla(185, 100%, 65%, 0.8), 0 0 ${s.inner * 0.8}px hsla(185, 100%, 60%, 0.4)`,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Core — bright cyan orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: s.core,
          height: s.core,
          background: `radial-gradient(circle, #fff 0%, hsla(185, 100%, 85%, 1) 30%, hsla(185, 100%, 65%, 1) 70%, hsla(185, 100%, 55%, 0.8) 100%)`,
          boxShadow: `
            0 0 ${s.core * 0.5}px #fff,
            0 0 ${s.core * 1.5}px hsla(185, 100%, 70%, 0.9),
            0 0 ${s.core * 3}px hsla(185, 100%, 60%, 0.6),
            0 0 ${s.core * 5}px hsla(185, 100%, 55%, 0.3)
          `,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
