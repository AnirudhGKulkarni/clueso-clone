import React from "react";

const projects = [
  { id: 1, name: "Website Redesign" },
  { id: 2, name: "Q1 Campaign" },
];

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Projects</h2>
      <div className="bg-card border border-border rounded-xl p-4">
        {projects.map((p) => (
          <div key={p.id} className="py-2 border-b last:border-b-0">
            <p className="font-medium">{p.name}</p>
            <p className="text-sm text-muted-foreground">Project details and progress.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
