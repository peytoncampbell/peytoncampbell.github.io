import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain } from 'lucide-react';

const CERTS = [
  {
    icon: GraduationCap,
    title: 'B.Sc. Computer Science',
    org: 'University of Western Ontario',
    year: '2025',
    gradient: 'from-purple-500 to-blue-500',
    bgColor: 'bg-purple-500/10 border-purple-500/20',
    highlights: ['Varsity Basketball', 'Bob Gage Athletic Leadership Award'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    org: 'Fanshawe College',
    year: '2025',
    gradient: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10 border-blue-500/20',
    highlights: ['Deep Learning', 'NLP', 'Computer Vision'],
  },
  {
    icon: Award,
    title: 'Bob Gage Athletic Leadership Award',
    org: 'Western Mustangs Athletics',
    year: '2024',
    gradient: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-500/10 border-amber-500/20',
    highlights: ['Athletic excellence', 'Team leadership', 'Academic achievement'],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Certifications() {
  return (
    <section className="py-20 border-y border-slate-800/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/15 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-14 text-white section-heading-bar"
        >
          Education & <span className="gradient-text">Credentials</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          className="grid gap-6 md:grid-cols-3"
        >
          {CERTS.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardReveal}
              className="glass-premium rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <cert.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{cert.title}</h3>
              <p className="text-sm text-slate-400 mb-1">{cert.org}</p>
              <span className="text-xs font-mono text-blue-400/70 bg-blue-500/10 px-2.5 py-0.5 rounded-full">{cert.year}</span>
              <ul className="mt-4 space-y-2">
                {cert.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
