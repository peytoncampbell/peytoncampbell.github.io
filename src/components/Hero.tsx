export default function Hero() {
  return (
    <section className="hero-grid hero-glow relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="animate-fade-in-up text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Campbell
          <span className="text-accent"> Solutions</span>
        </h1>
        <p className="animate-fade-in-up delay-100 mt-6 text-xl text-muted sm:text-2xl">
          AI automation that actually works.
        </p>
        <p className="animate-fade-in-up delay-200 mx-auto mt-4 max-w-2xl text-base text-muted/70 sm:text-lg">
          We turn manual processes into intelligent systems — custom-built AI
          that saves you time, money, and headaches.
        </p>
        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Book a Consultation
          </a>
          <a
            href="#work"
            className="rounded-lg border border-card-border px-8 py-3 text-base font-semibold text-muted transition-colors hover:border-muted hover:text-foreground"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
