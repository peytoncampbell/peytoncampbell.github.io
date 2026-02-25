import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LIVE_STATUS } from './data';

export default function LiveTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LIVE_STATUS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-slate-900/60 border border-slate-800/60 rounded-full backdrop-blur-xl shadow-inner shadow-blue-950/20">
      <div className="relative flex items-center justify-center w-2 h-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </div>
      
      <div className="w-px h-3.5 bg-slate-700/50" />
      
      <div className="h-5 overflow-hidden relative w-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-xs font-mono absolute w-full"
          >
            <span className="text-slate-600 font-bold uppercase tracking-wider whitespace-nowrap">
              {LIVE_STATUS[index].label}
            </span>
            <span className="text-slate-700">›</span>
            <span className="text-blue-400 font-medium truncate">
              {LIVE_STATUS[index].value}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
