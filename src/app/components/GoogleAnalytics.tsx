import { useEffect } from 'react';
import { useLocation } from 'react-router';

const GA_MEASUREMENT_ID = 'G-EE2YXDH9N8';

declare global {
  interface Window {
    gtag?: (command: 'config' | 'event', id: string, params?: Record<string, unknown>) => void;
  }
}

/** Sends a page_view to GA4 when the route changes (SPA navigation). */
export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;
    const path = window.location.pathname + window.location.search;
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}
