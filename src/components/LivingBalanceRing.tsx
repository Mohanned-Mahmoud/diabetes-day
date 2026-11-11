'use client';

import { motion } from 'framer-motion';
import { Activity, Sparkles, HeartPulse } from 'lucide-react';

export default function LivingBalanceRing() {
  return (
    <div className="relative mx-auto flex items-center justify-center h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-secondary/20 to-vitality/20 blur-2xl animate-pulse-glow" />

      {/* Rotating Ring 1 - Diabetes Sky Blue */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 rounded-full border-2 border-dashed border-secondary/40"
      />

      {/* Rotating Ring 2 - Primary Teal (Reverse) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-6 rounded-full border-2 border-primary/50"
        style={{
          boxShadow: '0 0 20px rgba(101, 203, 204, 0.35)',
        }}
      />

      {/* Rotating Ring 3 - Vitality Green segmented */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-10 rounded-full border-t-2 border-r-2 border-vitality/60 border-b-transparent border-l-transparent"
      />

      {/* Center Sphere - Symbol of World Diabetes Day + Tawazonha */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="relative z-10 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-gradient-to-br from-navy via-navy-light to-navy-dark shadow-[0_10px_30px_rgba(26,70,104,0.35)] border border-primary/40 cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <HeartPulse className="h-8 w-8 sm:h-9 sm:w-9 text-primary animate-pulse" />
          <span className="mt-1 text-[11px] font-extrabold text-white tracking-wider">
            توازنها
          </span>
          <span className="text-[9px] font-medium text-secondary">
            صحتك أولاً
          </span>
        </div>
      </motion.div>

      {/* Floating Orbital Satellite 1 */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          x: [-4, 4, -4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 rounded-full glass-panel px-3 py-1 shadow-md border border-primary/30"
      >
        <Activity className="h-3.5 w-3.5 text-primary" />
        <span className="text-[11px] font-bold text-navy">فحص استباقي</span>
      </motion.div>

      {/* Floating Orbital Satellite 2 */}
      <motion.div
        animate={{
          y: [6, -6, 6],
          x: [4, -4, 4],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-2 -left-3 z-20 flex items-center gap-1.5 rounded-full glass-panel px-3 py-1 shadow-md border border-vitality/30"
      >
        <Sparkles className="h-3.5 w-3.5 text-vitality" />
        <span className="text-[11px] font-bold text-navy">توازن أيضي</span>
      </motion.div>
    </div>
  );
}

