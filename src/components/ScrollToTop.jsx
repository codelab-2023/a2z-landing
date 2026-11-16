import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const isFirstMount = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Skip the first mount since index.html initial scripts handle initial page load
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Dynamic Meta Pixel SPA PageView Tracking
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }

    // Dynamic Google Analytics SPA PageView Tracking
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
}
