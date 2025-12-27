import { Upload, Sparkles, Settings, Share2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Record or Upload",
    description: "Record a new video with Clueso or upload an existing screen recording or slide deck.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Clueso does the magic",
    description: "Clueso's AI improves your script, adds a natural-sounding AI voiceover, and enhances visuals.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Customize to Your Liking",
    description: "Every video made by Clueso AI is fully customizable. Edit the voice, flow, or visuals directly from the video editor.",
  },
  {
    number: "04",
    icon: Share2,
    title: "Export & Share",
    description: "Download, embed, or share your creation as a link instantly.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stunning content in just four steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/10 mb-6 transition-all hover:bg-primary/20 hover:scale-105">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                
                {/* Step number */}
                <span className="block text-sm font-semibold text-primary mb-2">
                  {step.number}
                </span>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
