import { Sparkles, TrendingUp, AlertCircle, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const insights = [
  {
    icon: TrendingUp,
    title: "Trending Topics",
    description: "Users are frequently mentioning 'mobile experience' and 'loading speed'",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: AlertCircle,
    title: "Areas for Improvement",
    description: "Consider improving the onboarding flow based on recent feedback patterns",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: ThumbsUp,
    title: "Positive Sentiment",
    description: "Overall satisfaction score is trending upward at 85%",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const AIInsightsCard = () => {
  return (
    <Card className="shadow-card border-border/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          AI Insights Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 rounded-lg bg-muted/50 border border-border/50"
          >
            <div className={`w-10 h-10 rounded-lg ${insight.bgColor} flex items-center justify-center flex-shrink-0`}>
              <insight.icon className={`w-5 h-5 ${insight.color}`} />
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-1">{insight.title}</h4>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AIInsightsCard;
