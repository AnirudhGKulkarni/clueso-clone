import { Globe } from "lucide-react";

const languages = [
  { name: "English", flag: "🇺🇸" },
  { name: "Spanish", flag: "🇪🇸" },
  { name: "German", flag: "🇩🇪" },
  { name: "Japanese", flag: "🇯🇵" },
  { name: "Hindi", flag: "🇮🇳" },
  { name: "Arabic", flag: "🇸🇦" },
];

export function TranslationSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Translate
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hola. Hallo. こんにちは. नमस्ते.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Make the world your audience. Translate your voiceover, captions, and documentation in one click.
            </p>

            {/* Language flags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/30 transition-colors"
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-sm font-medium text-foreground">{lang.name}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-primary font-medium flex items-center gap-2">
              <Globe className="w-4 h-4" />
              +31 More Languages
            </p>
          </div>

          {/* Right side - Video preview */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
                {/* Animated language bubbles */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 px-3 py-1 bg-primary/20 rounded-full text-sm animate-float">
                    Hola
                  </div>
                  <div className="absolute top-1/3 right-1/4 px-3 py-1 bg-primary/20 rounded-full text-sm animate-float" style={{ animationDelay: "1s" }}>
                    Bonjour
                  </div>
                  <div className="absolute bottom-1/3 left-1/3 px-3 py-1 bg-primary/20 rounded-full text-sm animate-float" style={{ animationDelay: "2s" }}>
                    こんにちは
                  </div>
                  <div className="absolute bottom-1/4 right-1/3 px-3 py-1 bg-primary/20 rounded-full text-sm animate-float" style={{ animationDelay: "0.5s" }}>
                    مرحبا
                  </div>
                </div>

                <div className="relative z-10 text-center">
                  <Globe className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Global reach, one click</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}