import { Sparkles, Mic, ZoomIn, Captions, FileText, Palette } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Perfect Video Scripts",
    description: "AI removes filler words and rewrites your script clearly and concisely, perfectly matching your brand voice.",
  },
  {
    icon: Mic,
    title: "Lifelike AI Voiceovers",
    description: "Your recorded audio is swapped with AI voiceovers that sound impressively professional and realistic.",
  },
  {
    icon: ZoomIn,
    title: "Smart Auto-Zooms",
    description: "AI automatically zooms into key actions, highlighting exactly what viewers need to see.",
  },
  {
    icon: Captions,
    title: "Beautiful Captions",
    description: "Instantly engage your viewers with eye-catching, AI-generated captions.",
  },
  {
    icon: FileText,
    title: "Auto-Generated SOPs & How-Tos",
    description: "Clear, step-by-step documentation magically created from your videos.",
  },
  {
    icon: Palette,
    title: "Branded Video Templates",
    description: "Keep your videos consistently on brand with themed intros, outros, and backgrounds.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            CRAFTED WITH AI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Major video edits, automated.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI does the heavy-lifting. The final touches are all yours – everything is customizable.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
