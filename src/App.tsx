import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  CalendarClock,
  Star,
} from 'lucide-react';
import { NAV_LINKS, HERO, EXPERIENCE, PROJECTS, TECH_STACK } from './data';
import LiveTicker from './LiveTicker';
import ScrollProgress from './ScrollProgress';
import Certifications from './Certifications';
import clsx from 'clsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className={clsx('text-4xl md:text-5xl font-bold mb-14 text-white section-heading-bar', className)}
    >
      {children}
    </motion.h2>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');
  const [athleteImageIndex, setAthleteImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactError, setContactError] = useState<string | null>(null);
  const [contactSuccess, setContactSuccess] = useState(false);

  const athleteImages = [`${import.meta.env.BASE_URL}basketball.jpg`, `${import.meta.env.BASE_URL}golf.jpg`];
  const portraitImage = `${import.meta.env.BASE_URL}portrait.jpg`;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);

    const imageTimer = setInterval(() => {
      setAthleteImageIndex((prev) => (prev + 1) % athleteImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageTimer);
    };
  }, [athleteImages.length]);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactError(null);
    setContactSuccess(false);
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setContactError('Please fill in all fields.');
      return;
    }
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(contactForm.email.trim())) {
      setContactError('Please enter a valid email.');
      return;
    }
    setContactSuccess(true);
    setContactForm({ name: '', email: '', message: '' });
  };

  const filteredProjects = projectFilter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === projectFilter);
  const featuredProject = PROJECTS.find((p) => p.featured);
  const nonFeaturedFiltered = filteredProjects.filter((p) => !p.featured);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="text-5xl font-black tracking-tighter gradient-text-hero mb-2">PC</div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
                className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    <div className="min-h-screen text-slate-300 selection:bg-blue-500/30 selection:text-white">
      <ScrollProgress />

      {/* Availability Banner */}
      <div className="fixed top-0 left-0 right-0 z-[55] pointer-events-none">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: scrolled ? -40 : 0, opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center pt-2"
        >
          <a
            href="#contact"
            className="pointer-events-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-green-500/10 border border-green-500/25 text-green-400 hover:bg-green-500/15 hover:border-green-400/40 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Open to opportunities — Available for full-time & consulting
          </a>
        </motion.div>
      </div>

      {/* Navbar */}
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
          scrolled ? 'bg-slate-950/85 backdrop-blur-xl border-slate-800/50 py-3' : 'bg-transparent border-transparent py-5'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="text-xl font-bold tracking-tighter text-white hover:text-blue-400 transition-colors">
              PEYTON CAMPBELL
            </a>
            <LiveTicker />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}PeytonCampbellResume.pdf`}
              target="_blank"
              className="btn-primary px-5 py-2.5 text-white text-sm font-bold rounded-full flex items-center gap-2"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}PeytonCampbellResume.pdf`}
                target="_blank"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 btn-primary text-white font-bold rounded-full mx-auto"
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" id="about">
        <div className="aurora-bg">
          <div className="aurora-orb-3" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 pattern-grid opacity-40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] gradient-text-hero"
              >
                {HERO.headline}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                {HERO.subheadline}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex items-center gap-4 flex-wrap">
                <a
                  href="#dashboard"
                  className="btn-primary px-8 py-3.5 text-white font-bold rounded-xl flex items-center gap-2 text-base"
                >
                  See Live Dashboard <ArrowRight size={18} />
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}PeytonCampbellResume.pdf`}
                  className="px-8 py-3.5 border border-slate-700 text-slate-300 font-bold rounded-xl transition-all hover:bg-white/5 hover:border-slate-600 flex items-center gap-2"
                >
                  Download CV <Download size={18} />
                </a>
                <div className="flex gap-2">
                  <a
                    aria-label="GitHub profile"
                    href="https://github.com/peytoncampbell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    aria-label="LinkedIn profile"
                    href="https://www.linkedin.com/in/peyton-campbell/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {HERO.stats.map((stat, idx) => (
                  <div key={stat.label} className="glass-premium rounded-xl p-4 flex items-center gap-3">
                    <stat.icon className="text-cyan-400" size={20} />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Signal {idx + 1}</p>
                      <p className="text-sm font-bold text-white">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-8 rounded-[32px] bg-gradient-to-br from-blue-500/15 via-cyan-500/5 to-teal-500/10 blur-3xl animate-float" />
              <div className="relative aspect-[4/5] max-w-[420px] ml-auto overflow-hidden rounded-[28px] border border-slate-700/40 shadow-2xl shadow-blue-950/40 bg-slate-900/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 z-10 pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-slate-950/20 z-10 pointer-events-none" />
                <img
                  src={portraitImage}
                  alt="Peyton Campbell"
                  className="w-full h-full object-cover object-center"
                  style={{
                    filter: 'brightness(0.85) contrast(1.1) saturate(1.15)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="py-24 relative overflow-hidden" id="dashboard">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-600/8 via-transparent to-cyan-500/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading>
            Live Trading <span className="gradient-text">Dashboard</span>
          </SectionHeading>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-slate-400 text-lg mb-10 max-w-2xl -mt-8"
          >
            The crown jewel — a real-time performance dashboard for my autonomous BTC trading bot. Live P&L, strategy breakdowns, regime detection, and 62K+ trade history.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden dashboard-glow"
          >
            {/* Browser chrome */}
            <div className="browser-chrome border border-slate-700/50 rounded-t-2xl flex items-center px-4 py-3 gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70 hover:bg-amber-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-slate-900/80 rounded-lg px-4 py-1.5 text-xs text-slate-500 font-mono border border-slate-800/50 max-w-md mx-auto text-center">
                  🔒 btc-dashboard-amber.vercel.app
                </div>
              </div>
            </div>
            <div className="border border-t-0 border-slate-700/50 rounded-b-2xl overflow-hidden bg-slate-950">
              <iframe
                src="https://btc-dashboard-amber.vercel.app"
                title="BTC Trading Dashboard"
                className="w-full h-[500px] md:h-[650px] border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 flex justify-center"
          >
            <a
              href="https://btc-dashboard-amber.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-8 py-3.5 text-white font-bold rounded-full text-base"
            >
              <ExternalLink size={18} />
              View Live Dashboard
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 border-y border-slate-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/15 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading>
            Tech <span className="gradient-text">Stack</span>
          </SectionHeading>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap gap-3 justify-center"
          >
            {TECH_STACK.map((tech) => (
              <motion.span
                key={tech.name}
                variants={fadeInUp}
                className={clsx(
                  'px-4 py-2.5 rounded-full text-sm font-semibold border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default',
                  tech.category === 'Languages' && 'bg-blue-500/10 border-blue-500/25 text-blue-300 hover:bg-blue-500/15',
                  tech.category === 'Frontend' && 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300 hover:bg-cyan-500/15',
                  tech.category === 'ML/AI' && 'bg-purple-500/10 border-purple-500/25 text-purple-300 hover:bg-purple-500/15',
                  tech.category === 'Trading' && 'bg-amber-500/10 border-amber-500/25 text-amber-300 hover:bg-amber-500/15',
                  tech.category === 'Infrastructure' && 'bg-green-500/10 border-green-500/25 text-green-300 hover:bg-green-500/15',
                  tech.category === 'Tools' && 'bg-slate-500/10 border-slate-500/25 text-slate-300 hover:bg-slate-500/15',
                )}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
          <div className="flex justify-center gap-6 mt-8 text-xs text-slate-500 flex-wrap">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500" /> Languages</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-500" /> Frontend</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500" /> ML/AI</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> Trading</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500" /> Infrastructure</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400" /> Tools</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24" id="projects">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14">
            <SectionHeading className="mb-0">
              Projects I've <span className="gradient-text">Worked On</span>
            </SectionHeading>
            <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
              {['All', 'Production', 'ML/AI', 'Tools'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={clsx(
                    'px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 border whitespace-nowrap',
                    projectFilter === filter
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 border-transparent text-white shadow-lg shadow-blue-500/20'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Project - Full Width */}
          {featuredProject && (projectFilter === 'All' || projectFilter === featuredProject.category) && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-10 featured-card rounded-2xl overflow-hidden relative"
            >
              <div className="absolute top-5 right-5 z-10">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-200 uppercase tracking-[0.15em] bg-amber-500/15 border border-amber-500/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  Featured
                </span>
              </div>
              <div className="p-8 md:p-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-10">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em] border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {featuredProject.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-2">{featuredProject.title}</h3>
                    <p className="text-xs text-amber-300/80 font-semibold mb-4 uppercase tracking-wider">{featuredProject.role}</p>
                    <p className="text-slate-300 text-base mb-8 max-w-2xl leading-relaxed">{featuredProject.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.tech.map((t) => (
                        <span key={t} className="tech-tag border-slate-600/50 text-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                    {featuredProject.cta?.url && (
                      <a
                        href={featuredProject.cta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center text-sm font-bold px-7 py-3 rounded-full text-white"
                      >
                        {featuredProject.cta.label} <ChevronRight size={16} className="ml-1" />
                      </a>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    {featuredProject.metrics && (
                      <ul className="space-y-3 text-sm">
                        {featuredProject.metrics.map((metric: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex-shrink-0 shadow-sm shadow-amber-400/30" />
                            <span className="font-bold text-white text-base">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {nonFeaturedFiltered.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-premium rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="p-7 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-5">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      {project.cta?.url && (
                        <a
                          href={project.cta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} link`}
                          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-amber-300/70 font-semibold mb-3 uppercase tracking-wider">{project.role}</p>
                    <p className="text-slate-400 text-sm mb-5 flex-grow leading-relaxed">{project.description}</p>

                    {project.metrics && (
                      <ul className="space-y-1.5 mb-5 text-sm text-slate-300">
                        {project.metrics.map((metric: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((t) => (
                          <span key={t} className="text-xs text-slate-500 font-mono">
                            #{t}
                          </span>
                        ))}
                      </div>
                      {project.cta?.url && (
                        <a
                          href={project.cta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-bold px-5 py-2.5 rounded-full border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
                          aria-label={`View ${project.title}`}
                        >
                          {project.cta.label} <ChevronRight size={16} className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 relative" id="experience">
        <div className="container mx-auto px-6">
          <SectionHeading>
            <span className="gradient-text">Experience</span>
          </SectionHeading>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent" />

            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 md:pl-24 pb-16 last:pb-0"
              >
                <div className="absolute left-[-5px] md:left-[27px] top-2 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-slate-950 shadow-lg shadow-blue-500/30" />

                <div className="glass-premium p-7 rounded-2xl hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <span className="text-sm font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <div className="text-slate-400 font-medium mb-5">
                    {exp.title} — {exp.location}
                  </div>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Credentials (merged) */}
      <Certifications />

      {/* Duality - On & Off The Court */}
      <section className="flex flex-col md:flex-row min-h-[600px]" id="duality">
        <div className="flex-1 relative flex flex-col justify-center p-12 md:p-20 border-b md:border-b-0 md:border-r border-slate-800/50 overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={athleteImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url(${athleteImages[athleteImageIndex]})` }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/80 group-hover:from-slate-950/70 group-hover:via-slate-950/50 group-hover:to-slate-950/70 transition-all duration-500 z-10" />

          <div className="relative z-20">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">The Athlete</h3>
            <p className="text-lg text-slate-200 leading-relaxed max-w-md font-medium">
              Varsity Basketball and avid golfer.
              <br />
              <br />
              High-level competition instilled the value of consistency and resilience. I bring that same intensity and team-first
              mentality to every project I touch.
            </p>
          </div>
        </div>

        <div className="flex-1 p-12 md:p-20 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-slate-950 pointer-events-none" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-cyan-500/3 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">The Engineer</h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-md">
              AI systems builder and trading bot architect.
              <br />
              <br />
              I am obsessed with autonomous systems. Whether building a 24/7 BTC trading bot with 23 ML strategies, deploying AI agents across multiple platforms, or architecting real-time dashboards — I build systems that run, learn, and scale without intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-28 contact-bg relative" id="contact">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto glass-premium p-10 md:p-14 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's talk <span className="gradient-text">game plan.</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              Based in London, ON (EST). I reply within 24 hours. Whether it is about code, basketball, or building something new,
              let's chat.
            </p>

            <form onSubmit={handleContactSubmit} className="grid gap-5 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 block mb-2 uppercase tracking-wider font-semibold">Name</label>
                  <input
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="w-full rounded-xl bg-slate-900/80 border border-slate-700/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none px-4 py-3 text-white placeholder-slate-600 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 block mb-2 uppercase tracking-wider font-semibold">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full rounded-xl bg-slate-900/80 border border-slate-700/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none px-4 py-3 text-white placeholder-slate-600 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-2 uppercase tracking-wider font-semibold">Message</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none px-4 py-3 text-white h-32 placeholder-slate-600 transition-all resize-none"
                  placeholder="Tell me about your project or question."
                />
              </div>
              {contactError && <p className="text-sm text-amber-300">{contactError}</p>}
              {contactSuccess && <p className="text-sm text-green-400">Thanks! I'll reply within 24 hours.</p>}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-3 px-8 py-3.5 text-white font-bold text-base rounded-full"
                >
                  <Mail size={18} />
                  Send message
                </button>
                <a
                  href="https://www.linkedin.com/in/peyton-campbell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 border border-slate-700 text-slate-300 font-semibold rounded-full hover:bg-white/5 hover:border-slate-600 transition-all duration-300"
                >
                  <CalendarClock size={18} className="text-cyan-400" />
                  Book a chat
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-10 pb-8 bg-slate-950 text-center text-slate-500 text-sm">
        <div className="footer-gradient-line mb-10" />
        <p className="font-medium">Built with React, Tailwind, and caffeine by Peyton Campbell.</p>
        <p className="mt-2 text-slate-600">© {new Date().getFullYear()} Peyton Campbell</p>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-slate-900/90 border border-slate-700/50 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300 shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}
