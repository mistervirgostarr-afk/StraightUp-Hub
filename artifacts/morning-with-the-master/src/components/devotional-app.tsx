import { useState, useCallback } from "react";
import { getTodaysDevotional, Devotional } from "@/lib/devotional-data";
import { ScriptureDisplay } from "./scripture-display";
import { DevotionalView } from "./devotional-view";
import { CalendarPicker } from "./calendar-picker";
import { InstallPrompt } from "./install-prompt";
import { AudioPlayer } from "./audio-player";

type View = "scripture" | "devotional" | "calendar";

export function DevotionalApp() {
  const [currentDevotional, setCurrentDevotional] = useState<Devotional>(() => getTodaysDevotional());
  const [view, setView] = useState<View>("scripture");

  const handleShowDevotional = useCallback(() => {
    setView("devotional");
  }, []);

  const handleBackToScripture = useCallback(() => {
    setView("scripture");
  }, []);

  const handleOpenCalendar = useCallback(() => {
    setView("calendar");
  }, []);

  const handleSelectDay = useCallback((devotional: Devotional) => {
    setCurrentDevotional(devotional);
    setView("scripture");
  }, []);

  const handleCloseCalendar = useCallback(() => {
    setView(view === "calendar" ? "devotional" : view);
  }, [view]);

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/morning/library-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <AudioPlayer />

      <div className="relative z-10">
        {view === "scripture" && (
          <ScriptureDisplay
            devotional={currentDevotional}
            onShowDevotional={handleShowDevotional}
          />
        )}

        {view === "devotional" && (
          <DevotionalView
            devotional={currentDevotional}
            onBack={handleBackToScripture}
            onOpenCalendar={handleOpenCalendar}
          />
        )}

        {view === "calendar" && (
          <CalendarPicker
            currentDay={currentDevotional.day}
            onSelectDay={handleSelectDay}
            onClose={handleCloseCalendar}
          />
        )}
      </div>

      <InstallPrompt />
    </div>
  );
}
