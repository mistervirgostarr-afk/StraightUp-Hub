import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    const dismissed = localStorage.getItem("installPromptDismissed");

    if (!isStandalone && !dismissed) {
      if (isIOSDevice) {
        setTimeout(() => setShowPrompt(true), 3000);
      }
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      if (!localStorage.getItem("installPromptDismissed")) {
        setShowPrompt(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const handleInstall = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
    } else if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") setShowPrompt(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setShowIOSInstructions(false);
    localStorage.setItem("installPromptDismissed", "true");
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-40 animate-fade-in-up">
      <div className="bg-card border border-border/50 rounded-lg p-4 shadow-lg backdrop-blur-sm">
        {showIOSInstructions ? (
          <>
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-foreground">Add to Home Screen</h3>
              <Button variant="ghost" size="icon" onClick={handleDismiss} className="h-6 w-6 text-muted-foreground hover:text-foreground -mt-1 -mr-1">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <ol className="text-sm text-muted-foreground space-y-2 mb-3 font-serif">
              <li>1. Tap the Share button in Safari</li>
              <li>2. Scroll down and tap "Add to Home Screen"</li>
              <li>3. Tap "Add" to install</li>
            </ol>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-serif text-foreground">Morning with my Master</h3>
                <p className="text-sm text-muted-foreground mt-1">Add to your home screen for quick access</p>
              </div>
              <Button variant="ghost" size="icon" onClick={handleDismiss} className="h-6 w-6 text-muted-foreground hover:text-foreground -mt-1 -mr-1">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <Button onClick={handleInstall} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add to Home Screen
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
