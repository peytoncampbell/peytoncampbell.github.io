const cases = [
  {
    title: "AI-Powered Job Application System",
    desc: "Fully autonomous pipeline that navigates ATS platforms — Workday, Greenhouse, Lever, Avature, Taleo, iCIMS — tailors resumes with AI, and submits applications at scale with human-level accuracy.",
    metrics: ["6 ATS platforms", "AI resume tailoring", "Fully autonomous"],
  },
  {
    title: "BTC Trading Bot",
    desc: "ML-powered trading engine running RandomForest and XGBoost models across 15+ strategies. Ingests real-time multi-source market data and executes trades autonomously 24/7.",
    metrics: ["28,000+ trades", "15+ strategies", "ML-powered"],
  },
  {
    title: "AI Personal Assistant",
    desc: "Multi-platform agent deployed across Telegram, Discord, and Signal with persistent memory, cron scheduling, proactive monitoring, and full browser automation for complex tasks.",
    metrics: ["3 platforms", "Persistent memory", "Browser automation"],
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
