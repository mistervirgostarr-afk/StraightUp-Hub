import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bell, BellOff, X, Check } from "lucide-react";

interface NotificationSettingsProps {
  onClose: () => void;
}

export function NotificationSettings({ onClose }: NotificationSettingsProps) {
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const [selectedTime, setSelectedTime] = useState("06:00");
  const [isEnabled, setIsEnabled] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
    const savedTime = localStorage.getItem("devotional-notification-time");
    const savedEnabled = localStorage.getItem("devotional-notification-enabled");
    if (savedTime) setSelectedTime(savedTime);
    if (savedEnabled === "true") setIsEnabled(true);
  }, []);

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support notifications");
      return;
    }
    const result = await Notification.requestPermission();
    setPermission(result);
    if (result === "granted") setIsEnabled(true);
  };

  const scheduleNotification = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const now = new Date();
    const notificationTime = new Date();
    notificationTime.setHours(hours, minutes, 0, 0);
    if (notificationTime <= now) {
      notificationTime.setDate(notificationTime.getDate() + 1);
    }
    const timeUntilNotification = notificationTime.getTime() - now.getTime();
    const existingTimeout = localStorage.getItem("devotional-notification-timeout");
    if (existingTimeout) clearTimeout(Number(existingTimeout));
    const timeoutId = setTimeout(() => {
      if (permission === "granted") {
        new Notification("Morning with my Master", {
          body: "Start your day with the words of Jesus. Your daily devotional is waiting.",
          icon: "/morning/icon-192.png",
          badge: "/morning/icon-192.png",
          tag: "daily-devotional",
        });
      }
      scheduleNotification(time);
    }, timeUntilNotification);
    localStorage.setItem("devotional-notification-timeout", timeoutId.toString());
  };

  const saveSettings = () => {
    localStorage.setItem("devotional-notification-time", selectedTime);
    localStorage.setItem("devotional-notification-enabled", isEnabled.toString());
    if (isEnabled && permission === "granted") {
      scheduleNotification(selectedTime);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const testNotification = () => {
    if (permission === "granted") {
      new Notification("Morning with my Master", {
        body: "Your daily reminder is set! Start each day with the words of Jesus.",
        icon: "/morning/icon-192.png",
        badge: "/morning/icon-192.png",
        tag: "test-notification",
      });
    }
  };

  const toggleEnabled = () => {
    if (!isEnabled && permission !== "granted") {
      requestPermission();
    } else {
      setIsEnabled(!isEnabled);
    }
  };

  const timeOptions = [
    { value: "05:00", label: "5:00 AM" },
    { value: "05:30", label: "5:30 AM" },
    { value: "06:00", label: "6:00 AM" },
    { value: "06:30", label: "6:30 AM" },
    { value: "07:00", label: "7:00 AM" },
    { value: "07:30", label: "7:30 AM" },
    { value: "08:00", label: "8:00 AM" },
    { value: "08:30", label: "8:30 AM" },
    { value: "09:00", label: "9:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "18:00", label: "6:00 PM" },
    { value: "21:00", label: "9:00 PM" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-card border border-border/50 rounded-lg p-6 max-w-md w-full shadow-xl animate-fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-serif text-foreground">Daily Reminder</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {permission === "denied" && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
            <p className="text-sm text-destructive">
              Notifications are blocked. Please enable them in your browser settings.
            </p>
          </div>
        )}

        <div className="flex items-center justify-between mb-6 p-4 bg-card/50 border border-border/30 rounded-lg">
          <div>
            <p className="font-medium text-foreground">Enable Daily Reminder</p>
            <p className="text-sm text-muted-foreground">Get notified to read your daily devotional</p>
          </div>
          <Button
            variant={isEnabled ? "default" : "outline"}
            size="sm"
            onClick={toggleEnabled}
            disabled={permission === "denied"}
            className={isEnabled ? "bg-primary" : ""}
          >
            {isEnabled ? (
              <><Bell className="w-4 h-4 mr-1" />On</>
            ) : (
              <><BellOff className="w-4 h-4 mr-1" />Off</>
            )}
          </Button>
        </div>

        <div className={`mb-6 ${!isEnabled ? "opacity-50 pointer-events-none" : ""}`}>
          <label className="block text-sm font-medium text-foreground mb-3">Reminder Time</label>
          <div className="grid grid-cols-3 gap-2">
            {timeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedTime(option.value)}
                className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                  selectedTime === option.value
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/50 border-border/50 text-foreground hover:bg-card"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={testNotification}
            disabled={permission !== "granted" || !isEnabled}
            className="flex-1 border-border/50"
          >
            Test
          </Button>
          <Button
            onClick={saveSettings}
            disabled={!isEnabled}
            className="flex-1 bg-primary"
          >
            {saved ? (
              <><Check className="w-4 h-4 mr-2" />Saved!</>
            ) : (
              "Save Settings"
            )}
          </Button>
        </div>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          Note: Keep the app open or installed for notifications to work reliably.
        </p>
      </div>
    </div>
  );
}
