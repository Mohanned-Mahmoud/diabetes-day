'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PORTAL_CONFIG } from '@/lib/portalConfig';

export default function PortalPage() {
  const targetUrl = PORTAL_CONFIG.defaultUrl;

  return (
    <div className="fixed inset-0 z-40 h-screen w-screen overflow-hidden bg-white">
      {/* Floating Discrete Return Button */}
      <Link
        href="/"
        className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full bg-navy/85 hover:bg-navy text-white text-xs sm:text-sm font-bold px-4 py-2 backdrop-blur-md shadow-lg transition-all hover:scale-105 border border-white/20"
        title="العودة للصفحة الرئيسية"
      >
        <ArrowRight className="h-4 w-4" />
        <span>العودة للرئيسية</span>
      </Link>

      {/* The Target Iframe - Loads eagerly and directly without blocking spinner */}
      <iframe
        src={targetUrl}
        title={PORTAL_CONFIG.defaultTitle}
        className="h-full w-full border-0 bg-white"
        loading="eager"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
