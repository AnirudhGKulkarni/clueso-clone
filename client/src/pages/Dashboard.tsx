import { MessageSquare, Users, TrendingUp, Clock } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import FeedbackList from "@/components/dashboard/FeedbackList";
import AIInsightsCard from "@/components/dashboard/AIInsightsCard";

const stats = [
  { title: "Total Feedback", value: "1,284", change: "+12% this month", changeType: "positive" as const, icon: MessageSquare },
  { title: "Active Users", value: "892", change: "+8% this week", changeType: "positive" as const, icon: Users },
  { title: "Satisfaction Score", value: "85%", change: "+3% improvement", changeType: "positive" as const, icon: TrendingUp },
  { title: "Avg Response Time", value: "2.4h", change: "-15% faster", changeType: "positive" as const, icon: Clock },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="max-w-6xl">
          {/* Header */}
          <DashboardHeader />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.title}
                {...stat}
                delay={`${index * 0.05}s`}
              />
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FeedbackList />
            <AIInsightsCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
