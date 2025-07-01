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
        <footer className="bg-gray-800 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="text-9xl absolute top-4 right-4">🕉️</div>
            <div className="text-6xl absolute bottom-4 left-4">🪷</div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <img 
                  src="/assets/logo.png" 
                  alt="Kanha Studios Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white text-lg italic mb-6">
                "Design is excellence. Every pixel, perfected."
              </p>
              <p className="text-white/80 mb-8">
                Crafting thoughtful designs that elevate brands and transform businesses.
              </p>
              <div className="border-t border-white/20 pt-6">
                <p className="text-sm text-white/60">
                  © 2025 Kanha Studio. All rights reserved. Made with care in Mumbai. 
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
