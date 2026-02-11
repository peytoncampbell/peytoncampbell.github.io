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
            Full Stack Developer at OES (Ontario Educational Services) in
            London, ON. Computer Science degree from Western University,
            AI &amp; Machine Learning certification from Fanshawe College.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Former varsity basketball player — I bring the same intensity,
            discipline, and competitive drive to every system I build.
            I don&apos;t do half-measures. If it ships, it works.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            I&apos;m pivoting into tech consulting because I&apos;ve seen
            firsthand how much value AI automation creates. Campbell
            Solutions is where deep technical skill meets real business
            problems — no fluff, just results.
          </p>
        </div>
      </div>
    </section>
  );
}
