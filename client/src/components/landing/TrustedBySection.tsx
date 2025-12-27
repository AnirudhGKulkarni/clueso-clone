import { Star } from "lucide-react";

const companies = [
  "Phenom",
  "Personio",
  "Duda",
  "Keyfactor",
  "Darwinbox",
  "Global Partners",
];

export function TrustedBySection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Backed by */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Backed by</span>
            <div className="px-4 py-2 bg-card rounded-lg border border-border">
              <span className="font-semibold text-foreground">Y Combinator</span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-border" />

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-foreground">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <span className="text-sm text-muted-foreground">on G2.com</span>
          </div>
        </div>

        {/* Company logos */}
        <div className="mt-12">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company) => (
              <div
                key={company}
                className="px-6 py-3 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <span className="font-semibold text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
