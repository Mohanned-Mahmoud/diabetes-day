'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Activity } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If we are on /portal in full-screen mode, let portal handle its dedicated control bar
  const isPortal = pathname === '/portal';

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/portal', label: 'حاسبة كتلة الجسم (BMI)' },
    { href: '/contact', label: 'تواصل معنا' },
    { href: '/about', label: 'من نحن' },
  ];

  if (isPortal) {
    // When inside /portal, keep it clean and minimal to prioritize the embedded experience
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav className="glass-panel relative flex items-center justify-between rounded-2xl px-5 py-3 shadow-[0_4px_25px_rgba(26,70,104,0.06)] border border-white/70">
          {/* Logo & Brand Tag */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 transition hover:opacity-90"
              aria-label="توازنها صح"
            >
              <Image
                src="/brand/logo-color.svg"
                alt="توازنها"
                width={120}
                height={40}
                className="h-8 w-auto sm:h-9 object-contain"
                priority
              />
            </Link>
            <div className="hidden items-center gap-1.5 rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-navy sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              اليوم العالمي للسكري
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-navy/10 text-navy font-bold'
                      : 'text-slate-600 hover:bg-slate-100/70 hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-light hover:shadow-md"
            >
              <span>تواصل معنا</span>
              <Activity className="h-4 w-4 text-primary" />
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 md:hidden"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl glass-panel p-4 shadow-xl border border-white/80 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? 'bg-navy/10 text-navy font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-navy py-3 text-sm font-semibold text-white"
            >
              <span>تواصل معنا</span>
              <Activity className="h-4 w-4 text-primary" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

