import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  delay?: string;
}

const StatsCard = ({ title, value, change, changeType, icon: Icon, delay = "0s" }: StatsCardProps) => {
  const changeColors = {
    positive: "text-emerald-600 bg-emerald-500/10",
    negative: "text-red-600 bg-red-500/10",
    neutral: "text-muted-foreground bg-muted",
  };

  return (
    <Card className="shadow-card border-border/50 hover:shadow-card-hover transition-shadow animate-fade-in" style={{ animationDelay: delay }}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-2 ${changeColors[changeType]}`}>
              {change}
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
