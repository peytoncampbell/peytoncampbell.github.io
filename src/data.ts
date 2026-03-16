import { Code2, Database, Trophy, Brain, Layout, Users, Compass, Target, Zap, RefreshCw, Sparkles, Award, Rocket, Globe, Bot, Briefcase } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'My Story', href: '#duality' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  headline: 'I build intelligent systems that run themselves.',
  subheadline:
    'Full-stack engineer specializing in AI-powered automation, real-time systems, and infrastructure that operates autonomously. From AI workspace dashboards to supervised service architectures — I ship production systems that work 24/7.',
  stats: [
    { label: '8+ Supervised Services', icon: Code2 },
    { label: 'AI-Powered Automation', icon: Brain },
    { label: 'Full-Stack + AI/ML', icon: Trophy },
  ],
};

export const HIGHLIGHTS = [
  {
    label: 'AI Workspace Dashboard',
    detail: 'Built Jarvis Console: a Next.js dashboard with real-time chat, session management, memory browser, and cron monitoring — all in a PWA.',
    icon: Sparkles,
  },
  {
    label: 'Shipped cross-platform MAUI apps',
    detail: 'Shared libraries, MVVM, and offline-first sync at OES.',
    icon: Award,
  },
  {
    label: 'Autonomous Agent Infrastructure',
    detail: 'Personal AI agent running 24/7 across Telegram, Discord, and Signal. Manages 8+ services with health monitoring, auto-recovery, and persistent memory.',
    icon: Database,
  },
];

export const SKILLS = [
  {
    title: 'AI & Automation Systems',
    tags: ['Python', 'TypeScript', 'Claude API', 'WebSocket', 'Cron'],
    copy: 'Building autonomous agent systems with 8+ supervised services, health monitoring, and auto-recovery. From AI workspace dashboards to cross-platform messaging — I ship production systems that run 24/7.',
    icon: Layout,
  },
  {
    title: 'Full-Stack Engineering',
    tags: ['React', 'Next.js', 'Node.js', 'REST APIs', 'PWA'],
    copy: 'Real-time dashboards and production applications. From responsive PWAs with offline support to WebSocket-powered interfaces — I build robust frontend systems that scale.',
    icon: Database,
  },
  {
    title: 'Infrastructure & DevOps',
    tags: ['Process Management', 'Cloudflare', 'SQLite', 'Windows Services', 'CI/CD'],
    copy: 'Supervised service architectures with health checks, automated deployment pipelines, and cross-platform architecture. Translating athletic discipline into system reliability and development velocity.',
    icon: Users,
  },
];

export const SCOUTING_REPORT = [
  { axis: 'Frontend', value: 0.9, fullMark: 1 },
  { axis: 'Backend', value: 0.85, fullMark: 1 },
  { axis: 'ML / AI', value: 0.92, fullMark: 1 },
  { axis: 'Architecture', value: 0.85, fullMark: 1 },
  { axis: 'Leadership', value: 0.95, fullMark: 1 },
  { axis: 'Data Eng', value: 0.85, fullMark: 1 },
  { axis: 'DevOps/Infra', value: 0.85, fullMark: 1 },
];

export const PROCESS = [
  {
    stage: 'Scout',
    mantra: 'Diagnose the field',
    description: 'Shadow stakeholders, inspect telemetry, and size the opportunity before writing code.',
    deliverable: 'Problem brief + success metrics',
    icon: Compass,
  },
  {
    stage: 'Strategy',
    mantra: 'Design the playbook',
    description: 'Translate scouting notes into a pragmatic technical plan with trade-offs surfaced early.',
    deliverable: 'Architecture sketch + decision log',
    icon: Target,
  },
  {
    stage: 'Execution',
    mantra: 'Ship with intent',
    description: 'Pair tight feedback loops with reliable automation so releases are calm, not chaotic.',
    deliverable: 'Incremental releases + telemetry hooks',
    icon: Zap,
  },
  {
    stage: 'Review',
    mantra: 'Measure and reinforce',
    description: 'Inspect outcomes, capture lessons, and feed insights back into the next scouting cycle.',
    deliverable: 'Post-launch scorecard + retro',
    icon: RefreshCw,
  },
];

export const LIVE_STATUS = [
  { label: 'Focus', value: 'AI Systems + Full-Stack Engineering' },
  { label: 'Status', value: 'Open to opportunities' },
  { label: 'Location', value: 'London, ON → Toronto' },
  { label: 'Current', value: 'Building autonomous systems' },
];

export const EXPERIENCE = [
  {
    company: 'OES Inc',
    location: 'London, ON',
    title: 'Full Stack Developer',
    period: 'Aug 2025 - Present',
    description: 'Building next-gen scoreboard control software.',
    bullets: [
      'Building cross-platform .NET MAUI scoreboard control apps with MVVM architecture and shared component libraries.',
      'Architecting REST APIs for real-time sync between scoreboard hardware, edge devices, and mobile clients.',
      'Automated regression testing in Python, cutting validation time by 40%.',
      'Designing deployment pipelines and CI/CD workflows for multi-platform releases.',
      'Leading migration from legacy codebases to modern cross-platform architecture.',
    ],
  },
];

export const EDUCATION = [
  {
    school: 'University of Western Ontario',
    degree: 'Bachelor of Computer Science',
    period: 'Sept 2020 - Jan 2025',
    bullets: ["Varsity Men's Basketball Athlete", 'Bob Gage Athletic Leadership Award Recipient'],
  },
  {
    school: 'Fanshawe College',
    degree: 'AI & Machine Learning Certificate',
    period: '2025',
    bullets: [],
  },
];

export const PROJECTS = [
  {
    id: 16,
    title: 'Jarvis Console',
    category: 'Production',
    featured: true,
    description: 'AI workspace management dashboard providing real-time monitoring and control for my entire agent ecosystem. Features chat interface, session management, memory browser, and cron viewer — all in a responsive PWA architecture.',
    tech: ['Next.js', 'WebSocket', 'RPC', 'PWA', 'Real-time'],
    role: 'Full-Stack Engineer',
    metrics: ['Real-time chat interface', 'Session management system', 'Memory browser & search', 'Cron job viewer', 'PWA with offline support'],
    cta: { label: 'View Console', url: 'https://peytoncampbell.ca/console/' },
  },

  {
    id: 17,
    title: 'OpenClaw Agent Infrastructure',
    category: 'Production',
    featured: false,
    description: 'Personal AI agent ecosystem managing my digital life across multiple platforms. Features 7 supervised services after cleanup, automated research pipelines, and cross-platform messaging with health monitoring, auto-recovery, and system optimization.',
    tech: ['Node.js', 'Python', 'Cron Scheduling', 'Multi-service', 'Cross-platform'],
    role: 'Infrastructure Architect',
    metrics: ['7 supervised services', 'Health monitoring', 'Auto-recovery', 'System optimization', 'Persistent memory system'],
    cta: null,
  },
  {
    id: 14,
    title: 'Campbell Solutions',
    category: 'Production',
    featured: false,
    description:
      'Technology consulting practice offering full-stack development, AI/ML integration, and system architecture for businesses and startups.',
    tech: ['React', 'Next.js', 'Python', 'AI/ML', 'Consulting'],
    role: 'Founder',
    metrics: ['Full-stack consulting', 'AI integration', 'System architecture'],
    cta: { label: 'Visit Site', url: 'https://campbell-solutions.vercel.app' },
  },
  {
    id: 12,
    title: 'AI Personal Assistant (Jarvis)',
    category: 'Tools',
    featured: false,
    description:
      'Multi-platform AI agent with persistent memory, cron scheduling, autonomous job applications across 6 ATS platforms, browser automation, and proactive monitoring.',
    tech: ['TypeScript', 'Claude API', 'Playwright', 'Node.js'],
    role: 'Solo builder',
    metrics: ['3 platforms (Telegram/Discord/Signal)', '8+ supervised services', 'Persistent memory', '24/7 uptime monitoring'],
    cta: null,
  },

  {
    id: 15,
    title: 'Catan Settlement Optimizer',
    category: 'Tools',
    featured: false,
    description: 'Interactive 6-player Catan board optimizer with dynamic scarcity scoring, port concentration engine, resource rarity ledger, and weighted probability analysis. Generates random boards and ranks optimal settlement placements.',
    tech: ['JavaScript', 'Canvas API', 'Algorithms'],
    role: 'Solo builder',
    metrics: ['Dynamic scarcity scoring', 'Port concentration engine', 'Resource rarity ledger', 'Weighted probability analysis'],
    cta: { label: 'Try It', url: 'https://peytoncampbell.ca/catan/' },
  },

  {
    id: 2,
    title: 'Score Controller',
    category: 'Production',
    featured: false,
    description:
      'Real-time mobile control system for OES scoreboards, enabling remote game data management with offline-first sync.',
    tech: ['iOS', 'Bluetooth/WiFi', 'Real-time Systems'],
    role: 'Full stack / Mobile',
    metrics: ['Action latency -150ms', 'Crash-free sessions +8%', 'Onboarding time -30%'],
    cta: { label: 'App Store', url: 'https://apps.apple.com/us/app/score-controller/id1563410119' },
  },
  {
    id: 3,
    title: 'Player Performance Predictor',
    category: 'ML/AI',
    featured: false,
    description:
      'Roster construction engine with WAR predictions (R^2 0.59) using XGBoost, feature engineering, and Optuna tuning.',
    tech: ['Python', 'XGBoost', 'Optuna', 'Pandas'],
    role: 'Data science',
    metrics: ['R^2 0.59 on WAR', 'Hyperparameter search via Optuna', '1k lineup sims/run'],
    cta: { label: 'View repo', url: 'https://github.com/peytoncampbell' },
  },
  {
    id: 4,
    title: 'Customer Sentiment Analyzer',
    category: 'ML/AI',
    featured: false,
    description:
      'Multi-channel sentiment classifier fine-tuned on support tickets; delivered 85% accuracy and a real-time insights dashboard.',
    tech: ['Transformers', 'Python', 'TensorFlow', 'NLP'],
    role: 'ML engineer',
    metrics: ['Accuracy 85%', 'Latency <300ms p95', 'Coverage: email + chat + reviews'],
    cta: { label: 'View repo', url: 'https://github.com/peytoncampbell' },
  },
];

export const TECH_STACK = [
  { name: 'Python', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'C# / .NET', category: 'Languages' },
  { name: 'Swift', category: 'Languages' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind', category: 'Frontend' },
  { name: 'scikit-learn', category: 'ML/AI' },
  { name: 'XGBoost', category: 'ML/AI' },
  { name: 'Claude API', category: 'ML/AI' },
  { name: 'OpenAI API', category: 'ML/AI' },
  { name: 'Playwright', category: 'ML/AI' },

  { name: 'PostgreSQL', category: 'Infrastructure' },
  { name: 'SQLite', category: 'Infrastructure' },
  { name: 'Docker', category: 'Infrastructure' },
  { name: 'Node.js', category: 'Infrastructure' },
  { name: 'Cloudflare', category: 'Infrastructure' },
  { name: 'Vercel', category: 'Infrastructure' },
  { name: 'Playwright', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
];

export const BUILDING_NOW = [
  {
    name: 'Jarvis Console',
    status: 'Live',
    statusColor: 'green',
    detail: 'AI workspace dashboard with real-time monitoring',
    icon: Rocket,
  },
  {
    name: 'Agent Infrastructure',
    status: 'Live',
    statusColor: 'green',
    detail: '7 supervised services, auto-recovery, health monitoring',
    icon: Brain,
  },
  {
    name: 'Job Hunt Pipeline',
    status: 'Active',
    statusColor: 'green',
    detail: 'Automated job discovery, scoring, and application tracking',
    icon: Bot,
  },
];

export const BLOG_POSTS = [
  {
    title: 'How I Built an AI Agent That Manages My Digital Life',
    date: 'Mar 2026',
    readTime: '8 min',
    excerpt: 'Architecture deep-dive: OpenClaw/Jarvis infrastructure with 7 supervised services, health monitoring, auto-recovery, and persistent memory across platforms.',
    tags: ['AI', 'TypeScript', 'Infrastructure'],
    href: '#'
  },
  {
    title: 'Running 9 Services on a Single Machine with a Custom Supervisor',
    date: 'Mar 2026',
    readTime: '6 min',
    excerpt: 'How I built a process supervisor managing signal engines, traders, WebSocket listeners, and API servers — with health checks, auto-restart, and Windows Task Scheduler integration.',
    tags: ['Infrastructure', 'Python', 'DevOps'],
    href: '#'
  },
  {
    title: 'Building Jarvis: An AI Agent That Runs My Digital Life',
    date: 'Mar 2026',
    readTime: '5 min',
    excerpt: 'From Telegram to Discord to Signal — building a persistent-memory AI assistant with autonomous job applications, browser automation, and proactive monitoring.',
    tags: ['AI', 'TypeScript', 'Automation'],
    href: '#'
  }
];
