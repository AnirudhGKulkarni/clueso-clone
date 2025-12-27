import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
          Experience it yourself
        </h2>
        <p className="text-xl text-background/70 mb-10 max-w-2xl mx-auto">
          Join thousands of teams creating professional videos in minutes, not hours.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="xl"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-pink"
            asChild
          >
            <Link to="/register">
              <Sparkles className="w-5 h-5 mr-2" />
              Make Your First Video
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-background/50">
          Free 7-day trial • No credit card required
        </p>
      </div>
    </section>
  );
}
