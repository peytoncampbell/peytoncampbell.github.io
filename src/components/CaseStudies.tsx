const cases = [
  {
    title: "Automated Job Application System",
    desc: "End-to-end automation that navigates ATS platforms, tailors resumes per role, and submits applications at scale.",
    metrics: ["50+ applications/week", "ATS navigation", "Resume tailoring"],
  },
  {
    title: "Prediction Market Trading Bot",
    desc: "Real-time market analysis engine that identifies opportunities, calculates edge, and manages positions autonomously.",
    metrics: ["Real-time analysis", "60%+ accuracy", "Automated trading"],
  },
  {
    title: "Intelligent Personal Assistant",
    desc: "Multi-platform AI agent with persistent memory, calendar management, proactive monitoring, and cross-app orchestration.",
    metrics: ["Multi-platform", "Persistent memory", "Proactive alerts"],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          What We&apos;ve Built
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Real systems solving real problems.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-xl border border-card-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {c.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
