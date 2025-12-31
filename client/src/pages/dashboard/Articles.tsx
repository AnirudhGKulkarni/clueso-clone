import React from "react";

const articles = [
  { id: 1, title: "How to record better demos" },
  { id: 2, title: "Onboarding best practices" },
];

export default function ArticlesPage() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Articles</h2>
      <div className="bg-card border border-border rounded-xl p-4">
        {articles.map((a) => (
          <div key={a.id} className="py-2 border-b last:border-b-0">
            <p className="font-medium">{a.title}</p>
            <p className="text-sm text-muted-foreground">Short summary about the article...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
