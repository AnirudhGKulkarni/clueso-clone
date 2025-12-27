import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Clueso has empowered our product team to create high-quality videos and training content 20x faster.",
    author: "Sean O'Donnell",
    title: "Director of Product Management",
    company: "Phenom",
  },
  {
    quote: "Clueso's AI helps us quickly deliver clear, targeted training content. It has been a game-changer for supporting our frontline and office teams.",
    author: "Daniel Wood",
    title: "Director of Learning & Development",
    company: "Global Partners",
  },
  {
    quote: "With Clueso, we created and launched 8 training courses for Duda's new editor in just one quarter.",
    author: "Cyrus Dorosti",
    title: "VP of Customer Success",
    company: "Duda",
  },
  {
    quote: "Clueso cut our product education and support videos production time from two days to just two hours.",
    author: "Janice Weintraub",
    title: "Associate Director, Customer Education",
    company: "Keyfactor",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            You're in good company
          </h2>
          <p className="text-lg text-muted-foreground">
            From start-ups to enterprises, teams of all sizes trust Clueso.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
