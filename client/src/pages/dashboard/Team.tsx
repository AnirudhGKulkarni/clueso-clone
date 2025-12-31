import React from "react";

const members = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

export default function TeamPage() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Team</h2>
      <div className="bg-card border border-border rounded-xl p-4">
        {members.map((m) => (
          <div key={m.id} className="py-2 border-b last:border-b-0">
            <p className="font-medium">{m.name}</p>
            <p className="text-sm text-muted-foreground">Member role & permissions</p>
          </div>
        ))}
      </div>
    </div>
  );
}
