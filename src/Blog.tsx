import { motion } from 'framer-motion';
import { BLOG_POSTS } from './data';

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

export default function Blog() {
  return (
    <section className="py-24 relative" id="blog">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeading className="mb-0">
            Writing <span className="gradient-text">In Progress</span>
          </SectionHeading>
          <p className="max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
            I am turning active build notes into a proper writing archive. These are the first essays in the queue.
          </p>
        </div>

        <div className="border border-slate-800/70 rounded-3xl overflow-hidden bg-slate-950/35 backdrop-blur-sm">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid gap-6 lg:grid-cols-[180px,1fr,180px] px-6 py-7 md:px-8 md:py-8 border-b border-slate-800/60 last:border-b-0"
            >
              <div className="flex items-start justify-between lg:block">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">{post.date}</span>
                <span className="inline-flex mt-0 lg:mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {post.readTime}
                </span>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-slate-400 leading-relaxed max-w-3xl">{post.excerpt}</p>
              </div>

              <div className="flex flex-wrap lg:justify-end gap-2 content-start">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full border border-slate-700/70 text-xs font-mono text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
                <span className="w-full lg:text-right text-sm font-semibold text-slate-500 mt-2">Draft in progress</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
