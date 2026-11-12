'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, ShieldCheck, Mail } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  // Do not render footer on portal page so iframe occupies full viewport cleanly
  if (pathname === '/portal') {
    return null;
  }

  return (
    <footer className="mt-20 border-t border-slate-200/80 bg-navy text-white">
      {/* Upper subtle accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-vitality" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/logo-white.svg"
                alt="توازنها"
                width={140}
                height={45}
                className="h-9 w-auto brightness-0 invert object-contain"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
              مبادرة توازنها صح، منصة رائدة لتعزيز الصحة الأيضية والتوعية بمخاطر السكري وطرق الوقاية منه. نهدف لتمكين المجتمع من عيش حياة متوازنة عبر التوعية العلمية وربط الأفراد بأفضل الكفاءات الطبية.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-primary">
              <ShieldCheck className="h-4 w-4" />
              <span>محتوى طبي معتمد بمناسبة اليوم العالمي للسكري و اسبوع التوعية بالسمنة</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-slate-200">
              روابط سريعة
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="transition hover:text-primary">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/portal" className="transition hover:text-primary">
                  حاسبة مؤشر كتلة الجسم (BMI)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-primary">
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-primary">
                  عن المبادرة واليوم العالمي للسكري و اسبوع التوعية بالسمنة
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider text-slate-200">
              التشغيل والتنفيذ
            </h3>
            <p className="mt-4 text-sm text-slate-300"><bdi>Smart Health Solution</bdi></p>
            <p className="mt-4 text-sm font-bold text-slate-200">للتواصل والتنسيق</p>
            <a
              href="mailto:info@shs-gulf.com"
              className="mt-2 inline-flex items-center gap-2.5 text-sm text-slate-300 underline underline-offset-4 hover:text-white"
            >
              <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
              <bdi>info@shs-gulf.com</bdi>
            </a>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700/60 pt-8 sm:flex-row text-xs text-slate-400">
          <p>© {new Date().getFullYear()} مبادرة توازنها صح. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>صُنع بشغف لتعزيز الوعي الصحي</span>
            <Heart className="h-3.5 w-3.5 fill-red-400 text-red-400 inline mx-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}

