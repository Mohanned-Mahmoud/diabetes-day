'use client';

import { PORTAL_CONFIG } from '@/lib/portalConfig';

export default function PortalPage() {
  const targetUrl = PORTAL_CONFIG.defaultUrl;

  return (
    <div className="w-full h-[calc(100dvh-76px)] sm:h-[calc(100dvh-86px)] overflow-hidden bg-white">
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
