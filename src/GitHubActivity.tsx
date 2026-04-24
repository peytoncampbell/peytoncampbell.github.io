import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className={`text-4xl md:text-5xl font-bold mb-14 text-white section-heading-bar ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export default function GitHubActivity() {
  return (
    <section className="py-24 surface-band" id="github">
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeading>
          GitHub <span className="gradient-text">Signal</span>
        </SectionHeading>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-premium rounded-[24px] overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Contribution Graph</h3>
                  <p className="text-slate-400 text-sm">
                    A quick read on how consistently I ship code across automation, product, and infrastructure work.
                  </p>
                </div>
                <a
                  href="https://github.com/peytoncampbell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-bold rounded-full text-sm w-full sm:w-auto"
                >
                  <ExternalLink size={16} />
                  View Profile
                </a>
              </div>

              <div className="bg-slate-950/55 rounded-2xl p-4 md:p-6 border border-white/10 overflow-x-auto">
                <img
                  src="https://ghchart.rshah.org/3b82f6/peytoncampbell"
                  alt="GitHub Contribution Graph"
                  className="w-full max-w-none"
                  style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
