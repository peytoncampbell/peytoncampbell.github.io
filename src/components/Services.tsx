const services = [
  {
    icon: "⚡",
    title: "AI Workflow Automation",
    desc: "Automate repetitive business processes with intelligent systems that learn, adapt, and execute — so your team can focus on what matters.",
  },
  {
    icon: "🤖",
    title: "Custom AI Agents",
    desc: "Purpose-built AI assistants tailored to your business. From customer support to internal ops, we build agents that get the job done.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    desc: "Prediction models, real-time dashboards, and actionable insights. Turn your data into decisions.",
  },
  {
    icon: "🧠",
    title: "Tech Consulting",
    desc: "Strategy, architecture, and implementation. We help you navigate the AI landscape and build the right thing the right way.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          What We Do
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          End-to-end AI solutions — from strategy to deployment.
        </p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-card-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
