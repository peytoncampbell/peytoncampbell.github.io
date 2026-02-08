export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Photo placeholder */}
        <div className="flex items-center justify-center">
          <div className="flex h-80 w-80 items-center justify-center rounded-2xl border border-card-border bg-card text-muted">
            <span className="text-sm">Photo</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Meet Peyton
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            I&apos;m a full-stack developer and AI engineer based in Canada.
            I studied Computer Science at Western University and earned an
            AI &amp; Machine Learning certification from Fanshawe College.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            As a former varsity athlete, I bring the same discipline,
            competitiveness, and relentless work ethic to engineering. I
            don&apos;t ship half-baked solutions — I build systems that
            work, scale, and deliver real results.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Campbell Solutions is where that all comes together: deep
            technical skill applied to real business problems, with AI at
            the core.
          </p>
        </div>
      </div>
    </section>
  );
}
