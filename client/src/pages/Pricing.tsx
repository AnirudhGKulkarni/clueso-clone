import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plans = [
  {
    name: "Free",
    description: "For exploring around and evaluating",
    price: "$0",
    period: "For 7 Days",
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
    features: [
      "2 users",
      "15 mins of total video exports",
      "15 article exports",
      "Export videos in up to 1080p",
    ],
  },
  {
    name: "Starter",
    description: "For teams starting out",
    price: "$120",
    period: "/month",
    billedYearly: true,
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
    features: [
      "2 users",
      "6 hours of video exports/year",
      "360 article exports/year",
      "Watermark-free exports",
      "Export videos in up to 2K",
      "In-app chat support",
    ],
  },
  {
    name: "Growth",
    description: "Perfect for growing teams",
    price: "$200",
    period: "/month",
    billedYearly: true,
    popular: true,
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
    features: [
      "4 users",
      "12 hours of video exports/year",
      "720 article exports/year",
      "Watermark-free exports",
      "Export videos in up to 4K",
      "In-app chat support",
    ],
  },
  {
    name: "Enterprise",
    description: "For orgs operating at scale",
    price: "Custom",
    period: "Talk to us",
    cta: "Book a Demo",
    ctaVariant: "secondary" as const,
    features: [
      "Custom number of users",
      "Custom export limits",
      "Watermark-free exports",
      "Power features",
      "Enterprise grade security",
      "Advanced Admin",
      "Priority everything",
    ],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"yearly" | "monthly">("yearly");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Pricing that Scales
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every plan includes Clueso's full creative power — upgrade only when your team or needs grow.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-secondary rounded-full p-1">
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  billingCycle === "yearly"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Bill Yearly
                <span className="ml-2 text-xs text-primary font-semibold">Save 20%</span>
              </button>
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  billingCycle === "monthly"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Bill Monthly
              </button>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-2xl border p-6 bg-card transition-all duration-300 hover:shadow-lg",
                  plan.popular
                    ? "border-primary shadow-pink"
                    : "border-border"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                  {plan.billedYearly && (
                    <p className="text-xs text-muted-foreground mt-1">Billed Yearly</p>
                  )}
                </div>

                <Button
                  variant={plan.ctaVariant}
                  className="w-full mb-6"
                  asChild
                >
                  <Link to={plan.name === "Enterprise" ? "/contact" : "/register"}>
                    {plan.cta}
                  </Link>
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}