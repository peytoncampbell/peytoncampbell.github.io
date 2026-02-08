"use client";

import { type FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const message = fd.get("message") as string;
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:campbellpeyton042@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Let&apos;s Talk
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted">
          Ready to automate? Drop a message and I&apos;ll get back to you
          within 24 hours.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-xl border border-accent/30 bg-accent/10 p-8 text-center">
            <p className="text-lg font-medium text-accent">
              Thanks! Your email client should have opened. If not, email me
              directly at{" "}
              <a
                href="mailto:campbellpeyton042@gmail.com"
                className="underline"
              >
                campbellpeyton042@gmail.com
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Social links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <span className="text-card-border">•</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <span className="text-card-border">•</span>
          <a
            href="mailto:campbellpeyton042@gmail.com"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            campbellpeyton042@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
