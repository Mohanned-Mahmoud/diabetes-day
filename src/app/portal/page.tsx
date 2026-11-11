'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  RotateCw,
  Maximize2,
  Minimize2,
  ExternalLink,
  ShieldAlert,
  Settings2,
  Check,
  Globe,
  Sparkles,
} from 'lucide-react';
import { PORTAL_CONFIG } from '@/lib/portalConfig';

export default function PortalPage() {
  const [targetUrl, setTargetUrl] = useState(PORTAL_CONFIG.defaultUrl);
  const [inputUrl, setInputUrl] = useState(PORTAL_CONFIG.defaultUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const [hasError, setHasError] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleUpdateUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl && inputUrl.trim()) {
      let finalUrl = inputUrl.trim();
      if (!/^https?:\/\//i.test(finalUrl)) {
        finalUrl = 'https://' + finalUrl;
      }
      setTargetUrl(finalUrl);
      setIsLoading(true);
      setShowSettings(false);
      setIframeKey((prev) => prev + 1);
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-screen w-screen overflow-hidden bg-slate-900"
    >
      {/* Sleek Top Control Bar */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-700/80 bg-navy px-4 sm:px-6 text-white shadow-md z-30">
        {/* Left (RTL Start): Return to Landing & Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/20"
            title="العودة للصفحة الرئيسية"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="hidden sm:inline">العودة للرئيسية</span>
          </Link>

          <div className="h-6 w-px bg-slate-700 hidden sm:block" />

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/brand/logo-white.svg"
              alt="توازنها"
              width={110}
              height={36}
              className="h-7 w-auto brightness-0 invert object-contain"
            />
          </Link>

          <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-secondary/20 px-3 py-0.5 text-xs font-semibold text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            {PORTAL_CONFIG.defaultTitle}
          </span>
        </div>

        {/* Center: Current embedded URL pill */}
        <div className="hidden md:flex items-center gap-2 rounded-xl bg-slate-800/80 px-4 py-1.5 text-xs font-mono text-slate-300 border border-slate-700 max-w-sm truncate" dir="ltr">
          <Globe className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className="truncate">{targetUrl}</span>
        </div>

        {/* Right (RTL End): Actions & Controls */}
        <div className="flex items-center gap-2">
          {/* Reload button */}
          <button
            type="button"
            onClick={handleReload}
            title="إعادة تحميل المنصة"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-slate-200 transition hover:bg-white/20 hover:text-white"
          >
            <RotateCw
              className={`h-4 w-4 ${isLoading ? 'animate-spin text-primary' : ''}`}
            />
          </button>

          {/* Settings / Change URL */}
          <button
            type="button"
            onClick={() => setShowSettings(!showSettings)}
            title="تغيير رابط المنصة"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-slate-200 transition hover:bg-white/20 hover:text-white"
          >
            <Settings2 className="h-4 w-4" />
          </button>

          {/* Fullscreen toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'تصغير الشاشة' : 'ملء الشاشة'}
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-slate-200 transition hover:bg-white/20 hover:text-white"
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </button>

          {/* External link */}
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="فتح في نافذة خارجية مستقلة"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-navy font-bold transition hover:bg-primary-hover shadow-sm"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* URL Configuration Drawer Modal */}
      {showSettings && (
        <div className="absolute top-16 left-4 sm:left-6 z-40 w-96 rounded-2xl glass-panel p-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h4 className="text-sm font-bold text-navy flex items-center gap-2">
              <Settings2 className="h-4 w-4 text-primary" />
              <span>إعدادات رابط المنصة</span>
            </h4>
            <button
              onClick={() => setShowSettings(false)}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              إلغاء
            </button>
          </div>
          <form onSubmit={handleUpdateUrl} className="mt-3">
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              أدخل رابط الموقع المراد عرضه هنا:
            </label>
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs text-slate-800 focus:border-primary focus:outline-none"
              dir="ltr"
            />
            <p className="mt-1.5 text-[11px] text-slate-500">
              يمكنك ربط أي موقع خارجي أو صفحة ويب، وسيتم عرضها مدمجة دون تغيير الدومين الأساسي.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="submit"
                className="flex-1 rounded-xl bg-navy py-2 text-xs font-bold text-white hover:bg-navy-light transition"
              >
                تطبيق وحفظ الرابط
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Embedded Iframe Container */}
      <div className="relative flex-1 w-full bg-slate-900">
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-sm text-white">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <div className="absolute h-full w-full rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-200">
              جاري تحميل منصة توازنها التفاعلية...
            </p>
            <span className="mt-1 text-xs text-slate-400">
              يتم العرض مدمجاً دون مغادرة الموقع
            </span>
          </div>
        )}

        {/* The Target Iframe */}
        <iframe
          key={iframeKey}
          src={targetUrl}
          title={PORTAL_CONFIG.defaultTitle}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className="h-full w-full border-0 bg-white"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

