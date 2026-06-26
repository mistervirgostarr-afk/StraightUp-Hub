import { useState } from "react";
import { Devotional } from "@/lib/devotional-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, BookOpen, Send, Bell } from "lucide-react";
import { NotificationSettings } from "./notification-settings";

interface DevotionalViewProps {
  devotional: Devotional;
  onBack: () => void;
  onOpenCalendar: () => void;
}

export function DevotionalView({ devotional, onBack, onOpenCalendar }: DevotionalViewProps) {
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);

  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    alert(message);
  };

  const shareScripture = async () => {
    const text = `"${devotional.scripture}"\n\n— ${devotional.reference} (KJV)\n\nFrom Morning with my Master`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Scripture from Morning with my Master", text });
      } catch {
        copyToClipboard(text, "Scripture copied to clipboard!");
      }
    } else {
      copyToClipboard(text, "Scripture copied to clipboard!");
    }
  };

  const shareDevotional = async () => {
    const text = `Morning with my Master - ${devotional.month} ${devotional.date}\n\n"${devotional.scripture}"\n— ${devotional.reference} (KJV)\n\n${devotional.devotional}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `Morning with my Master - ${devotional.month} ${devotional.date}`, text });
      } catch {
        copyToClipboard(text, "Devotional copied to clipboard!");
      }
    } else {
      copyToClipboard(text, "Devotional copied to clipboard!");
    }
  };

  const shareApp = async () => {
    const text = `Morning with my Master - A 365 Day Devotional with the words of the Lord Jesus Christ.\n\nStart your day with the words of Jesus.`;
    const url = window.location.origin;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Morning with my Master", text, url });
      } catch {
        copyToClipboard(`${text}\n\n${url}`, "App link copied to clipboard!");
      }
    } else {
      copyToClipboard(`${text}\n\n${url}`, "App link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 md:px-8 animate-fade-in-up">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Scripture
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowNotificationSettings(true)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Bell className="w-4 h-4 mr-2" />
              Remind Me
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onOpenCalendar}
              className="text-muted-foreground hover:text-foreground"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              All Days
            </Button>
          </div>
        </div>

        {showNotificationSettings && (
          <NotificationSettings onClose={() => setShowNotificationSettings(false)} />
        )}

        <div className="text-center mb-8">
          <p className="text-sm tracking-widest uppercase text-primary/80 mb-2">
            Day {devotional.day}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground">
            {devotional.month} {devotional.date}
          </h1>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 md:p-8 mb-8">
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-4xl text-primary/30 font-serif">"</span>
            <p className="text-xl md:text-2xl leading-relaxed font-serif text-foreground pl-4">
              {devotional.scripture}
            </p>
            <span className="absolute -bottom-6 right-0 text-4xl text-primary/30 font-serif">"</span>
          </blockquote>

          <p className="mt-6 text-lg text-primary italic font-serif text-right">
            — {devotional.reference}
          </p>

          <div className="mt-6 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={shareScripture}
              className="text-muted-foreground hover:text-foreground border-border/50"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Scripture
            </Button>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg font-serif text-primary mb-4 tracking-wide">
            Today's Reflection
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-serif">
            {devotional.devotional}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            variant="outline"
            onClick={shareDevotional}
            className="border-border/50 hover:bg-card/50"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share Today's Devotional
          </Button>

          <Button
            variant="outline"
            onClick={shareApp}
            className="border-border/50 hover:bg-card/50"
          >
            <Send className="w-4 h-4 mr-2" />
            Share This App
          </Button>
        </div>

        <div className="text-center border-t border-border/30 pt-8">
          <p className="text-sm text-muted-foreground italic font-serif">
            Morning with my Master
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            365 Days with the Words of the Lord Jesus Christ
          </p>
        </div>
      </div>
    </div>
  );
}
