'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  HeartHandshake,
  Target,
  Award,
  ChevronDown,
  ShieldCheck,
  ArrowLeft,
  Activity,
  Globe2,
  Users2,
  CheckCircle,
} from 'lucide-react';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'ما هي مبادرة توازنها صح، وما علاقتها باليوم العالمي للسكري؟',
      a: 'توازنها هي منصة صحية وطنية متخصصة في التوعية بالصحة الأيضية والوقاية من السكري. نطلق سنوياً فعاليات متزامنة مع اليوم العالمي للسكري بهدف توفير الفحص المبكر والاستشارات المتخصصة وتصحيح المفاهيم المغلوطة.',
    },
    {
      q: 'هل تقدم المنصة استشارات طبية رسمية؟',
      a: 'نعم، ترتبط منصة توازنها بشبكة واسعة تضم أكثر من ١٢٠ طبيباً واستشارياً معتمداً في تخصصات الغدد الصماء والسكري والتغذية العلاجية، ويتم توجيه الحالات حسب المنطقة والاحتياج الطبي.',
    },
    {
      q: 'كيف يمكنني الاستفادة من المنصة التفاعلية؟',
      a: 'يمكنك الدخول إلى المنصة التفاعلية المدمجة مباشرة من موقعنا بدون مغادرة الرابط الأساسي، وإجراء استبيانات التقييم الذاتي لمؤشرات السكر ومقاومة الإنسولين.',
    },
    {
      q: 'هل بياناتي محمية عند التسجيل؟',
      a: 'بالتأكيد. تخضع بيانات الاستشارة لأعلى معايير التشفير والأمان وتُحفظ مباشرة في قاعدة بيانات سحابية متطورة (Neon Cloud PostgreSQL) تضمن الخصوصية الكاملة.',
    },
  ];

  const values = [
    {
      title: 'الدقة والمصداقية العلمية',
      desc: 'نعتمد فقط على أحدث الإرشادات الطبية الموثقة من الجمعيات العالمية والإقليمية للسكري.',
      icon: Award,
    },
    {
      title: 'التمكين الذاتي للفرد',
      desc: 'نؤمن بأن المعرفة هي الخطوة الأولى لتغيير السلوكيات اليومية وتحقيق التوازن الأيضي المستدام.',
      icon: Target,
    },
    {
      title: 'الرعاية الإنسانية الشاملة',
      desc: 'لا ننظر إلى الأرقام فقط، بل نراعي الجوانب النفسية والاجتماعية والبيئية لكل مستفيد.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="relative min-h-screen bg-ambient-mesh pb-20 pt-8 sm:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-bold text-navy shadow-sm border border-vitality/30"
          >
            <Sparkles className="h-3.5 w-3.5 text-vitality" />
            <span>عن توازنها | اليوم العالمي للسكري</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-black text-navy sm:text-4xl md:text-5xl leading-tight"
          >
            نحن هنا لنعيد تعريف علاقتك بصحتك الأيضية
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            انطلقت مبادرة «توازنها صح» من إيمان عميق بأن مرض السكري ليس حتمية، بل حالة يمكن الوقاية منها وإدارتها بذكاء عندما نفهم مؤشرات أجسامنا ونعيش بتوازن حقيقي.
          </motion.p>
        </div>

        {/* Narrative Section */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block rounded-2xl bg-secondary/10 px-4 py-1.5 text-xs font-bold text-navy">
              قصة البداية
            </div>
            <h2 className="text-2xl font-black text-navy sm:text-3xl leading-snug">
              من التشخيص المتأخر إلى الوقاية الاستباقية
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              في ظل تسارع وتيرة الحياة اليومية وتغير العادات الغذائية، تزايدت معدلات الإصابة بالسكري في منطقتنا بمعدلات تستدعي وقفة جادة وحلولاً مبتكرة. ومن هنا جاءت فكرة «توازنها»، لتكون الجسر الذكي الذي يربط التوعية الحديثة بالرعاية السريرية المعتمدة.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              في اليوم العالمي للسكري، نجدد التزامنا بتقديم محتوى تثقيفي تفاعلي، وتمكين كل أسرة من الأدوات الرقمية التي تجعل الفحص الدوري والاهتمام بنمط الحياة ثقافة يومية ممتعة ومستدامة.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 text-xs font-bold text-navy">
                <CheckCircle className="h-4 w-4 text-vitality" />
                <span>معتمد طبياً</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 text-xs font-bold text-navy">
                <Globe2 className="h-4 w-4 text-secondary" />
                <span>حملات توعوية على مدار العام</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 text-xs font-bold text-navy">
                <Users2 className="h-4 w-4 text-primary" />
                <span>شراكات مع رواد القطاع الصحي</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden glass-panel p-8 shadow-xl border border-white/80 bg-gradient-to-br from-white to-slate-50">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-vitality" />
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Image
                  src="/brand/logo-color.svg"
                  alt="توازنها"
                  width={130}
                  height={42}
                  className="h-9 w-auto object-contain"
                />
                <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-bold text-navy">
                  رؤية ٢٠٣٠ وجودة الحياة
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-bold text-navy">
                  أهدافنا في اليوم العالمي للسكري:
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-navy text-xs font-bold mt-0.5">
                      ١
                    </span>
                    <span>
                      رفع نسبة الوعي بمرحلة "ما قبل السكري" ومقاومة الإنسولين وكيفية عكس مسارها.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-navy text-xs font-bold mt-0.5">
                      ٢
                    </span>
                    <span>
                      تقديم استشارات ميسرة ومباشرة لكل مواطن ومقيم في المملكة والوطن العربي.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vitality/20 text-navy text-xs font-bold mt-0.5">
                      ٣
                    </span>
                    <span>
                      دمج التكنولوجيا الرقمية بالرعاية الطبية لتسهيل وصول المستفيدين للحلول المتخصصة.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">هل لديك استفسار محدد؟</span>
                  <span className="text-sm font-bold text-navy">تحدث مع أخصائي توازنها الآن</span>
                </div>
                <Link
                  href="/contact"
                  className="rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white transition hover:bg-navy-light"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              القيم والمبادئ
            </span>
            <h2 className="mt-1 text-2xl font-black text-navy sm:text-3xl">
              المبادئ التي تقود عملنا كل يوم
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-3xl p-8 shadow-sm border border-slate-200/80 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-navy to-navy-light text-primary mb-6 shadow-md">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{val.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">
              الأسئلة الشائعة
            </span>
            <h2 className="mt-1 text-2xl font-black text-navy sm:text-3xl">
              إجابات تهمك حول السكري ومبادرة توازنها
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl glass-panel border border-slate-200/80 overflow-hidden shadow-sm transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-right font-bold text-navy sm:text-base hover:bg-slate-50/50 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-200 shrink-0 mr-2 ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-t border-slate-100 p-5 pt-3 text-sm leading-relaxed text-slate-600 bg-white/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 text-center">
          <div className="glass-panel inline-flex flex-col sm:flex-row items-center gap-4 rounded-3xl p-6 sm:p-8 shadow-lg border border-primary/20 max-w-xl mx-auto">
            <div className="text-center sm:text-right flex-1">
              <h4 className="text-lg font-black text-navy">
                جاهز لتبدأ رحلة توازنك الصحي؟
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                ادخل إلى حاسبة مؤشر كتلة الجسم أو تواصل معنا مباشرة.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/portal"
                className="rounded-xl bg-navy px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-navy-light"
              >
                حاسبة BMI
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-navy transition hover:bg-primary-hover"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

