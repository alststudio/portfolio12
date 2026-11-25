import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered reveal hook: observes the element once and flips
 * `inView` to true the first time it enters the viewport
 * (IntersectionObserver, threshold 0.1, triggers once).
 */
export function useInViewAnimation<T extends HTMLElement = HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Helper: reveal classes + stagger delay for an animated element. */
export function reveal(inView: boolean, delay: string) {
  return {
    className: inView ? 'animate-fade-in-up' : 'opacity-0',
    style: { animationDelay: delay },
  };
}
