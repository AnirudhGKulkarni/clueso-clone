import { MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeedbackList = () => {
  return (
    <Card className="shadow-card border-border/50 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          Feedback List
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <MessageSquare className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-base font-medium text-foreground mb-1">No feedback yet</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Start collecting feedback from your users. Click "Add Feedback" to get started.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackList;
