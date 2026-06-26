import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Artist from "@/pages/Artist";
import MartelEngine from "@/pages/MartelEngine";
import Music from "@/pages/Music";
import Apps from "@/pages/Apps";
import RoyalDeckTactics from "@/pages/RoyalDeckTactics";
import MorningWithTheMaster from "@/pages/MorningWithTheMaster";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/artist" component={Artist} />
        <Route path="/martel-engine" component={MartelEngine} />
        <Route path="/music" component={Music} />
        <Route path="/apps" component={Apps} />
        <Route path="/apps/royal-deck-tactics" component={RoyalDeckTactics} />
        <Route path="/apps/morning-with-the-master" component={MorningWithTheMaster} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-[100dvh] flex flex-col dark bg-background text-foreground">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
