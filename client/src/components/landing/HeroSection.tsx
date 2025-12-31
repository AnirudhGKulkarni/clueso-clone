import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-100/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            <span className="text-foreground">Product videos</span>
            <br />
            <span className="text-gradient">in minutes with AI</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transform raw screen recordings into stunning videos & documentation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/demo">
                <Play className="w-5 h-5 mr-2" />
                Book a Demo
              </Link>
            </Button>
          </div>

          {/* Video preview removed */}
        </div>
      </div>
    </section>
  );
}
