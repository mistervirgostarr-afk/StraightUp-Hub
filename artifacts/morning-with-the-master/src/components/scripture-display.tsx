import { useState, useEffect } from "react";
import { Devotional } from "@/lib/devotional-data";

interface ScriptureDisplayProps {
  devotional: Devotional;
  onShowDevotional: () => void;
}

export function ScriptureDisplay({ devotional, onShowDevotional }: ScriptureDisplayProps) {
  const [phase, setPhase] = useState<"fade-in" | "visible" | "fade-out">("fade-in");
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    setPhase("fade-in");
    setShowPrompt(false);

    const promptTimer = setTimeout(() => {
      setShowPrompt(true);
    }, 2000);

    const fadeOutTimer = setTimeout(() => {
      setPhase("fade-out");
    }, 8000);

    const showDevotionalTimer = setTimeout(() => {
      onShowDevotional();
    }, 9000);

    return () => {
      clearTimeout(promptTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(showDevotionalTimer);
    };
  }, [devotional, onShowDevotional]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 cursor-pointer"
      onClick={onShowDevotional}
    >
      <div
        className={`max-w-4xl text-center transition-all duration-1000 ${
          phase === "fade-in" ? "animate-fade-in-up" :
          phase === "fade-out" ? "animate-fade-out" : ""
        }`}
      >
        <p className="text-lg md:text-xl text-primary/80 mb-6 tracking-widest uppercase font-light">
          {devotional.month} {devotional.date}
        </p>

        <blockquote className="relative">
          <span className="absolute -top-8 -left-4 text-6xl md:text-8xl text-primary/20 font-serif">"</span>
          <p className="text-2xl md:text-4xl lg:text-5xl leading-relaxed font-serif text-foreground animate-gentle-glow">
            {devotional.scripture}
          </p>
          <span className="absolute -bottom-12 -right-4 text-6xl md:text-8xl text-primary/20 font-serif">"</span>
        </blockquote>

        <p className="mt-12 text-xl md:text-2xl text-primary italic font-serif">
          — {devotional.reference}
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          The Words of the Lord Jesus Christ
        </p>
      </div>

      {showPrompt && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
          <p className="text-sm text-muted-foreground/70 tracking-wide">
            Click anywhere to read today's devotional
          </p>
        </div>
      )}
    </div>
  );
}
