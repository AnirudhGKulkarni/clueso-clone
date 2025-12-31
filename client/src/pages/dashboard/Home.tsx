import React from "react";
import { Button } from "@/components/ui/button";
import { Video, Upload, Sparkles, Star, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const recentVideos = [
  { id: 1, title: "Product Demo - Q4 Features", duration: "3:24", status: "completed", date: "2 hours ago" },
  { id: 2, title: "Onboarding Tutorial", duration: "5:12", status: "processing", date: "Yesterday" },
  { id: 3, title: "Customer Success Webinar", duration: "12:45", status: "completed", date: "3 days ago" },
];

const quickStats = [
  { label: "Total Videos", value: "24" },
  { label: "Total Articles", value: "156" },
  { label: "Watch Time", value: "4.2h" },
  { label: "Team Members", value: "8" },
];

export default function DashboardHome() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Quick overview of your workspace.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickStats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-5">
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <button className="bg-card border border-border rounded-xl p-6 text-left">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">Upload Video</h3>
          <p className="text-sm text-muted-foreground">Upload a screen recording to transform</p>
        </button>
        <button className="bg-card border border-border rounded-xl p-6 text-left">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Video className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">Record New</h3>
          <p className="text-sm text-muted-foreground">Start a new screen recording</p>
        </button>
        <button className="bg-card border border-border rounded-xl p-6 text-left">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">AI Templates</h3>
          <p className="text-sm text-muted-foreground">Start with a pre-built template</p>
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Recent Videos</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard/videos">View all</Link>
          </Button>
        </div>
        <div className="divide-y divide-border">
          {recentVideos.map((video) => (
            <div key={video.id} className="flex items-center gap-4 p-4">
              <div className="w-32 h-20 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <Video className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground truncate">{video.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-sm text-muted-foreground">{video.duration}</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{video.date}</div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon">
                  <Star className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
