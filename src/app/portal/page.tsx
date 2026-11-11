'use client';

import { useEffect } from 'react';
import { PORTAL_CONFIG } from '@/lib/portalConfig';

export default function PortalPage() {
  const targetUrl = PORTAL_CONFIG.defaultUrl;

  useEffect(() => {
    // Hide outer page scrollbars and prevent document scrolling when inside the portal
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden bg-white select-none">
      {/* The Target Iframe - Edge-to-edge full viewport with floating navbar overlay */}
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
