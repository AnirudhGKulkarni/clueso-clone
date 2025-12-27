import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const openings = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
];

const values = [
  {
    title: "Move Fast",
    description: "We ship quickly and iterate based on feedback. Speed is our competitive advantage.",
  },
  {
    title: "Customer Obsessed",
    description: "Every decision starts with the question: how does this help our customers?",
  },
  {
    title: "Think Big",
    description: "We're building the future of video creation. No idea is too ambitious.",
  },
  {
    title: "Stay Humble",
    description: "We learn from everyone and admit when we're wrong. Growth comes from humility.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Join the Clueso Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Help us transform how the world creates video content. We're looking for exceptional people to join our mission.
          </p>
          <Button size="lg" asChild>
            <a href="#openings">
              View Open Positions
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </section>

        {/* Values */}
        <section className="bg-secondary/30 py-24 mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <Link
                key={job.id}
                to={`/careers/${job.id}`}
                className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for talented people.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">Send Us Your Resume</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}