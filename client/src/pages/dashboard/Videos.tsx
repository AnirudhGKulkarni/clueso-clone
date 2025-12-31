import React from "react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const videos = [
  { id: 1, title: "Product Demo - Q4 Features", duration: "3:24", date: "2 hours ago" },
  { id: 2, title: "Onboarding Tutorial", duration: "5:12", date: "Yesterday" },
  { id: 3, title: "Customer Success Webinar", duration: "12:45", date: "3 days ago" },
];

export default function VideosPage() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground mb-4">All Videos</h2>
      <div className="bg-card border border-border rounded-xl divide-y divide-border">
        {videos.map((v) => (
          <div key={v.id} className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">{v.title}</p>
              <p className="text-sm text-muted-foreground">{v.duration} • {v.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
