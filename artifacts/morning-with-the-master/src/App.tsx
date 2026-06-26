import { Switch, Route, Router as WouterRouter } from "wouter";
import { DevotionalApp } from "@/components/devotional-app";

function Router() {
  return (
    <Switch>
      <Route path="/" component={DevotionalApp} />
      <Route>
        <div className="flex min-h-screen items-center justify-center">
          <p className="font-serif text-foreground">Page not found</p>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
