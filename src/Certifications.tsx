import { Award, Brain, GraduationCap } from 'lucide-react';

const CERTS = [
  {
    icon: GraduationCap,
    title: 'B.Sc. Computer Science',
    org: 'University of Western Ontario',
    year: '2025',
    highlights: ['Varsity Basketball', 'Bob Gage Athletic Leadership Award'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    org: 'Fanshawe College',
    year: '2025',
    highlights: ['Deep Learning', 'NLP', 'Computer Vision'],
  },
  {
    icon: Award,
    title: 'Bob Gage Athletic Leadership Award',
    org: 'Western Mustangs Athletics',
    year: '2024',
    highlights: ['Athletic excellence', 'Team leadership', 'Academic achievement'],
  },
];

export default function Certifications() {
  return (
    <section className="site-section credentials-section">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-eyebrow">Education</p>
          <h2 className="section-title">
            Education & <span className="gradient-text">credentials.</span>
          </h2>
        </div>

        <div className="credential-grid">
          {CERTS.map((cert) => (
            <article key={cert.title} className="credential-card">
              <cert.icon size={24} />
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.org}</p>
                <span>{cert.year}</span>
              </div>
              <ul>
                {cert.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
