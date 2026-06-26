import { useState } from "react";
import { devotionals, months, Devotional } from "@/lib/devotional-data";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarPickerProps {
  onSelectDay: (devotional: Devotional) => void;
  onClose: () => void;
  currentDay: number;
}

export function CalendarPicker({ onSelectDay, onClose, currentDay }: CalendarPickerProps) {
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const current = devotionals.find(d => d.day === currentDay);
    return current ? months.indexOf(current.month) : 0;
  });

  const currentMonthDevotionals = devotionals.filter(d => d.month === months[selectedMonth]);

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">
              Select a Day
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedMonth(prev => (prev === 0 ? 11 : prev - 1))}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <h3 className="text-xl md:text-2xl font-serif text-primary min-w-[150px] text-center">
              {months[selectedMonth]}
            </h3>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedMonth(prev => (prev === 11 ? 0 : prev + 1))}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {months.map((month, index) => (
              <Button
                key={month}
                variant={selectedMonth === index ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedMonth(index)}
                className={`text-xs ${
                  selectedMonth === index
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {month.slice(0, 3)}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 gap-2">
            {currentMonthDevotionals.map((devotional) => (
              <button
                key={devotional.day}
                onClick={() => onSelectDay(devotional)}
                className={`
                  aspect-square flex flex-col items-center justify-center
                  rounded-lg border transition-all duration-200
                  ${devotional.day === currentDay
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 text-foreground"
                  }
                `}
              >
                <span className="text-lg font-serif">{devotional.date}</span>
                <span className="text-[10px] text-muted-foreground mt-0.5">
                  Day {devotional.day}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic font-serif">
              Click any day to read the scripture and devotional
            </p>
          </div>

          <div className="mt-12 text-center border-t border-border/30 pt-8">
            <p className="text-sm text-muted-foreground font-serif">Morning with my Master</p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              365 Days with the Words of the Lord Jesus Christ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
