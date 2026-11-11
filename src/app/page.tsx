import Link from 'next/link';
import LivingBalanceRing from '@/components/LivingBalanceRing';
import HeroPortalCards from '@/components/HeroPortalCards';
import {
  Activity,
  ShieldCheck,
  ArrowLeft,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-ambient-mesh overflow-hidden pb-16">
      {/* Background Decorative Rings */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[750px] w-[750px] rounded-full bg-hero-glow opacity-80 blur-3xl" />

      {/* Hero Section */}
      <section className="relative pt-10 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs sm:text-sm font-bold text-navy shadow-sm border border-secondary/30">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-ping" />
            <span>فعاليات اليوم العالمي للسكري ٢٠٢٦ | مبادرة توازنها صح</span>
          </div>

          {/* Main Title */}
          <h1 className="mt-6 text-3xl font-black tracking-tight text-navy sm:text-5xl md:text-6xl max-w-4xl mx-auto leading-tight sm:leading-snug">
            صحتك تبدأ بتوازنها..{' '}
            <span className="bg-gradient-to-l from-primary via-secondary to-navy bg-clip-text text-transparent">
              معاً نحو حياة خالية من مضاعفات السكري
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            بوابة رقمية متكاملة لليوم العالمي للسكري، تمنحك استكشافاً تفاعلياً، وتواصلاً مباشراً مع الكفاءات الطبية، ورسالة واضحة لحماية صحتك وصحة أسرتك.
          </p>

          {/* Interactive Living Balance Ring */}
          <div className="mt-8 sm:mt-10">
            <LivingBalanceRing />
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/portal"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-l from-navy to-navy-light px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-navy/20 transition-all hover:shadow-xl hover:scale-[1.02]"
            >
              <span>حاسبة مؤشر كتلة الجسم (BMI)</span>
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-2xl glass-panel px-7 py-3.5 text-base font-bold text-navy border border-primary/40 shadow-sm transition hover:bg-white hover:border-primary"
            >
              <span>تواصل معنا</span>
              <Activity className="h-4 w-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* The 3 Core Animated Portal Cards */}
      <HeroPortalCards />

      {/* Call to action section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-navy via-navy-light to-navy p-8 sm:p-12 md:p-16 text-white shadow-2xl">
          {/* Subtle glow circle */}
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-primary backdrop-blur-md">
              <ShieldCheck className="h-4 w-4" />
              اليوم العالمي للسكري — خطواتك تبدأ اليوم
            </span>
            <h2 className="mt-4 text-2xl font-black sm:text-4xl leading-tight">
              لا تنتظر ظهور الأعراض.. ابدأ فحصك وتواصل مع طبيبك الآن
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
              فريقنا مستعد للتواصل معك والإجابة على كافة استفساراتك وتوجيهك لأفضل المراكز الصحية المتخصصة.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-bold text-navy shadow-md transition hover:bg-primary-hover hover:scale-105"
              >
                تواصل معنا الآن
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                اعرف المزيد عن توازنها
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
