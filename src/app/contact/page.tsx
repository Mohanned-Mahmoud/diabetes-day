'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquareHeart,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Database,
  CalendarCheck,
} from 'lucide-react';

export default function ContactPage() {
  const [countryCode, setCountryCode] = useState('+966');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [agreed, setAgreed] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const countryCodes = [
    { code: '+966', name: 'السعودية', flag: '🇸🇦' },
    { code: '+20', name: 'مصر', flag: '🇪🇬' },
    { code: '+971', name: 'الإمارات', flag: '🇦🇪' },
    { code: '+965', name: 'الكويت', flag: '🇰🇼' },
    { code: '+968', name: 'عُمان', flag: '🇴🇲' },
    { code: '+974', name: 'قطر', flag: '🇶🇦' },
    { code: '+973', name: 'البحرين', flag: '🇧🇭' },
    { code: '+962', name: 'الأردن', flag: '🇯🇴' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!agreed) {
      setErrorMessage('يرجى الموافقة على شروط وسياسة الخصوصية');
      return;
    }

    if (fullName.trim().length < 2) {
      setErrorMessage('يرجى كتابة الاسم بالكامل (حرفين على الأقل)');
      return;
    }

    if (mobile.trim().length < 7) {
      setErrorMessage('يرجى كتابة رقم هاتف صحيح');
      return;
    }

    if (city.trim().length < 2) {
      setErrorMessage('يرجى كتابة المدينة أو الدولة');
      return;
    }

    setIsLoading(true);

    const fullMobileNumber = mobile.trim().startsWith('+')
      ? mobile.trim()
      : `${countryCode} ${mobile.trim()}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          mobile: fullMobileNumber,
          city: city.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'فشل إرسال البيانات، يرجى المحاولة مرة أخرى.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'حدث خطأ غير متوقع أثناء الاتصال بقاعدة البيانات');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setMobile('');
    setCity('');
    setIsSuccess(false);
    setErrorMessage(null);
  };

  return (
    <div className="relative min-h-screen bg-ambient-mesh pb-20 pt-8 sm:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Tag */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-bold text-navy shadow-sm border border-primary/30"
          >
            <Database className="h-3.5 w-3.5 text-primary" />
            <span>تواصل معنا | متصل مباشرة بـ Neon Database</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-black text-navy sm:text-4xl md:text-5xl"
          >
            تواصل معنا
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            بمناسبة اليوم العالمي للسكري، نسعد بتواصلك معنا ومساعدتك والإجابة على كافة استفساراتك.
          </motion.p>
        </div>

        {/* Content Section: Form & Info Sidebars */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Main Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl glass-panel p-6 sm:p-10 shadow-xl border border-white/80 bg-white/95"
          >
            {isSuccess ? (
              /* Success Celebration State */
              <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-vitality mb-6 shadow-inner">
                  <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-black text-navy sm:text-3xl">
                  شكراً لك.. تم استلام بياناتك بنجاح!
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                  تم حفظ بياناتك وتأكيدها في قاعدة بيانات توازنها (Neon PostgreSQL). سيتواصل معك فريقنا عبر الهاتف خلال وقت وجيز.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-800 border border-emerald-200">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>تم حفظ وتوثيق بياناتك بأمان</span>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-navy-light"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                  <div>
                    <h2 className="text-xl font-black text-navy sm:text-2xl">
                      بيانات التواصل الأساسية
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      الحقول المؤشرة بـ (*) مطلوبة لإتمام التواصل
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-navy">
                    <MessageSquareHeart className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="mb-6 flex items-center gap-3 rounded-2xl bg-red-50 p-4 text-sm text-red-800 border border-red-200 animate-in fade-in duration-200">
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Field 1: Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                      الاسم بالكامل <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="مثال: د. عبدالله القحطاني"
                      className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/50 px-4 py-3.5 text-sm sm:text-base text-slate-800 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15"
                    />
                  </div>

                  {/* Field 2: Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                      رقم الجوال / الهاتف <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="rounded-2xl border border-slate-200/90 bg-slate-50/50 px-3 py-3.5 text-xs sm:text-sm font-bold text-navy transition focus:border-primary focus:bg-white focus:outline-none"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input
                        id="mobile"
                        type="tel"
                        required
                        dir="ltr"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="5x xxx xxxx"
                        className="w-full text-left rounded-2xl border border-slate-200/90 bg-slate-50/50 px-4 py-3.5 text-sm sm:text-base text-slate-800 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15"
                      />
                    </div>
                  </div>

                  {/* Field 3: Country / City */}
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                      البلد / المدينة <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      required
                      list="cities-list"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="مثال: الرياض"
                      className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/50 px-4 py-3.5 text-sm sm:text-base text-slate-800 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15"
                    />
                    <datalist id="cities-list">
                      <option value="الرياض، السعودية" />
                      <option value="جدة، السعودية" />
                      <option value="الدمام، السعودية" />
                      <option value="مكة المكرمة، السعودية" />
                      <option value="المدينة المنورة، السعودية" />
                      <option value="القاهرة، مصر" />
                      <option value="الإسكندرية، مصر" />
                      <option value="دبي، الإمارات" />
                      <option value="أبوظبي، الإمارات" />
                      <option value="الكويت" />
                      <option value="الدوحة، قطر" />
                      <option value="المنامة، البحرين" />
                      <option value="مسقط، عُمان" />
                      <option value="عَمّان، الأردن" />
                    </datalist>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 h-5 w-5 rounded-lg border-slate-300 text-navy focus:ring-primary accent-navy"
                      />
                      <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        أوافق على التواصل معي وتحويلي إلى الخدمة الطبية المناسبة وفق سياسة الخصوصية وسرية المعلومات الطبية لمبادرة توازنها صح.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-navy to-navy-light py-4 text-base font-bold text-white shadow-lg shadow-navy/20 transition-all hover:bg-navy-dark hover:shadow-xl disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>جاري الحفظ في قاعدة بيانات نيون...</span>
                        </>
                      ) : (
                        <>
                          <span>إرسال البيانات</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>

          {/* Sidebar Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Contact Card */}
            <div className="rounded-3xl glass-panel p-6 sm:p-7 shadow-md border border-slate-200/80">
              <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                <CalendarCheck className="h-5 w-5 text-primary" />
                <span>مواعيد التواصل وفريق الدعم</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                فريقنا متاح للتواصل والرد على كافة الاستفسارات طوال أيام الأسبوع من الساعة ٩ صباحاً وحتى ٩ مساءً بتوقيت مكة المكرمة.
              </p>

              <div className="mt-6 space-y-3.5 border-t border-slate-100 pt-5 text-sm">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">رقم الاتصال المباشر</span>
                    <span className="font-bold font-mono" dir="ltr">+966 50 000 0000</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/10 text-secondary shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">البريد الإلكتروني للرعاية</span>
                    <span className="font-semibold">care@tawazonha.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-vitality/10 text-vitality shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">التغطية الجغرافية</span>
                    <span className="font-semibold">جميع مناطق المملكة والخليج العربي</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Guarantee Card */}
            <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-dark p-6 sm:p-7 text-white shadow-lg">
              <div className="flex items-center gap-2.5 text-primary text-sm font-bold">
                <ShieldCheck className="h-5 w-5" />
                <span>ضمان الخصوصية وسرية السجلات</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                يتم تخزين بيانات التواصل وفق أعلى معايير الحماية والتشفير بقاعدة بيانات Neon السحابية، ولا تتم مشاركة معلوماتك مع أي طرف خارجي.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

