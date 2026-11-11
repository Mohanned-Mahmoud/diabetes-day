'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Compass,
  MessageSquareHeart,
  BookOpenText,
  ArrowLeft,
  Sparkles,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';

export default function HeroPortalCards() {
  const cards = [
    {
      id: 'portal',
      title: 'حاسبة مؤشر كتلة الجسم (BMI)',
      badge: 'فحص فوري',
      badgeColor: 'bg-secondary/15 text-navy border-secondary/30',
      description:
        'احسب مؤشر كتلة جسمك (BMI) واكتشف حالتك الصحية ومخاطر السكري عبر تطبيق توازنها المعتمد مدمجاً مباشرة دون مغادرة الموقع.',
      icon: Compass,
      href: '/portal',
      ctaText: 'احسب مؤشر كتلة جسمك الآن',
      gradient: 'from-secondary/20 via-primary/10 to-transparent',
      borderColor: 'hover:border-secondary',
      iconBg: 'bg-gradient-to-tr from-secondary to-primary text-navy',
      glowColor: 'rgba(98, 193, 224, 0.3)',
      tagline: 'تطبيق توازنها لحساب الـ BMI مدمجاً',
    },
    {
      id: 'contact',
      title: 'تواصل معنا',
      badge: 'تواصل مباشر',
      badgeColor: 'bg-primary/20 text-navy border-primary/40',
      description:
        'سجل بياناتك للتواصل الفوري معنا (الاسم، ورقم الهاتف، والبلد). تُحفظ بياناتك بشكل آمن ومباشر في قاعدة بيانات نيون.',
      icon: MessageSquareHeart,
      href: '/contact',
      ctaText: 'تواصل معنا الآن',
      gradient: 'from-primary/25 via-navy/5 to-transparent',
      borderColor: 'hover:border-primary',
      iconBg: 'bg-gradient-to-tr from-navy to-navy-light text-primary',
      glowColor: 'rgba(101, 203, 204, 0.35)',
      tagline: 'ربط مباشر بقاعدة بيانات Neon السحابية',
    },
    {
      id: 'about',
      title: 'من نحن وقصة توازنها',
      badge: 'اليوم العالمي للسكري',
      badgeColor: 'bg-vitality/15 text-vitality-hover border-vitality/30',
      description:
        'تعرّف على رسالة توازنها، وأهداف حملتنا للتوعية الشاملة بمرض السكري وسبل الوقاية منه لتعزيز جودة الحياة والتوازن الأيضي.',
      icon: BookOpenText,
      href: '/about',
      ctaText: 'اكتشف قصتنا وأهدافنا',
      gradient: 'from-vitality/20 via-lime-brand/10 to-transparent',
      borderColor: 'hover:border-vitality',
      iconBg: 'bg-gradient-to-tr from-vitality to-lime-brand text-white',
      glowColor: 'rgba(59, 175, 120, 0.3)',
      tagline: 'رؤية متكاملة لصحة أيضية مستدامة',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-bold text-navy shadow-sm border border-primary/30"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>بوابات توازنها الثلاث الرئيسية</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-2xl font-black text-navy sm:text-3xl md:text-4xl"
        >
          اختر بوابتك للانطلاق نحو التوازن الصحي
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto"
        >
          ثلاث وجهات صُممت بعناية لتمنحك المعرفة، والرعاية الطبية المتخصصة، والتجربة التفاعلية الكاملة لليوم العالمي للسكري.
        </motion.p>
      </div>

      {/* 3 Animated Action Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {cards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl glass-panel p-7 sm:p-8 shadow-[0_12px_40px_rgba(26,70,104,0.07)] transition-all duration-300 border border-slate-200/80 hover:shadow-[0_22px_55px_rgba(26,70,104,0.14)]"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none`}
              />

              {/* Card Top: Badge & Index number */}
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
                <span className="font-mono text-sm font-extrabold text-slate-300 group-hover:text-navy/40 transition">
                  0{index + 1}
                </span>
              </div>

              {/* Card Middle: Icon & Title */}
              <div className="relative z-10 my-6">
                <div
                  className={`relative mb-5 flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-2xl ${card.iconBg} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  style={{
                    boxShadow: `0 10px 25px ${card.glowColor}`,
                  }}
                >
                  <IconComponent className="h-8 w-8 stroke-[2.2]" />
                </div>

                <h3 className="text-xl font-extrabold text-navy sm:text-2xl group-hover:text-navy-dark transition">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {card.description}
                </p>
              </div>

              {/* Card Bottom: Action CTA Button */}
              <div className="relative z-10 pt-4 border-t border-slate-100">
                <div className="mb-3 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{card.tagline}</span>
                </div>

                <Link
                  href={card.href}
                  className="flex w-full items-center justify-between rounded-xl bg-slate-100/90 px-4 py-3 text-sm font-bold text-navy transition-all duration-200 group-hover:bg-navy group-hover:text-white group-hover:shadow-md"
                >
                  <span>{card.ctaText}</span>
                  <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
