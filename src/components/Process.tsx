const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dig into your workflows, pain points, and goals. No generic questionnaires — real conversations about what's slowing you down.",
  },
  {
    num: "02",
    title: "Build",
    desc: "Custom solution, not off-the-shelf. We architect and develop the exact system your business needs, with you in the loop at every step.",
  },
  {
    num: "03",
    title: "Deploy & Iterate",
    desc: "Launch, monitor, and continuously improve. We don't disappear after delivery — we make sure it works in the real world.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Simple process. Serious results.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <span className="text-5xl font-bold text-accent/20">
                {s.num}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
