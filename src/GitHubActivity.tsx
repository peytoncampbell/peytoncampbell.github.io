import { ExternalLink } from 'lucide-react';

export default function GitHubActivity() {
  return (
    <section className="site-section github-section" id="github">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-eyebrow">GitHub</p>
          <h2 className="section-title">
            Shipping <span className="gradient-text">signal.</span>
          </h2>
          <p className="section-copy">
            A quick read on how consistently I ship across automation, product, and infrastructure work.
          </p>
        </div>

        <article className="github-card">
          <div>
            <h3>Contribution Graph</h3>
            <p>Public activity snapshot for recent product and systems work.</p>
          </div>
          <a href="https://github.com/peytoncampbell" target="_blank" rel="noopener noreferrer" className="button-secondary">
            <ExternalLink size={16} />
            View profile
          </a>
          <div className="github-graph">
            <img
              src="https://ghchart.rshah.org/3b82f6/peytoncampbell"
              alt="GitHub Contribution Graph"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
