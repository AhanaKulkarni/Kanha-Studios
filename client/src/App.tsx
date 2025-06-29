import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Navigation />
        <FloatingElements />
        <Toaster />
        <Router />
        
        {/* Footer */}
        <footer className="bg-midnight-blue text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="text-9xl absolute top-4 right-4">🕉️</div>
            <div className="text-6xl absolute bottom-4 left-4">🪷</div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-peacock-green">🕉️</span>
                <span className="font-['Playfair_Display'] font-bold text-2xl">Kanha Studio</span>
              </div>
              <p className="sanskrit-quote text-vrindavan-beige/80 text-lg italic mb-6">
                "Design is devotion. Every pixel, a prayer."
              </p>
              <p className="text-vrindavan-beige/60 mb-8">
                Crafting divine designs that touch hearts and transform businesses.
              </p>
              <div className="border-t border-white/20 pt-6">
                <p className="text-sm text-vrindavan-beige/50">
                  © 2024 Kanha Studio. All rights reserved. Made with divine love in Vrindavan.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
