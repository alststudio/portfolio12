import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { PARALLAX_IMAGE } from '../data';
import { reveal, useInViewAnimation } from '../hooks/useInViewAnimation';

const COMPANIES = [
  { name: 'Apple', width: 'w-[80px]' },
  { name: 'IDEO', width: 'w-[83px]' },
  { name: 'Polygon', width: 'w-[110px]' },
];

export default function TestimonialSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();
  const parallaxRef = useRef<HTMLImageElement | null>(null);

  /* Parallax: the portrait drifts as the page scrolls (max offset 200px),
     driven by IntersectionObserver + scroll listener + requestAnimationFrame. */
  useEffect(() => {
    const img = parallaxRef.current;
    if (!img) return;
    let raf = 0;
    let visible = false;

    const update = () => {
      const rect = img.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const offset = Math.max(-200, Math.min(200, -progress * 200));
      img.style.transform = `translateY(${offset.toFixed(1)}px)`;
    };
    const onScroll = () => {
      if (!visible) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible = entry.isIntersecting;
          if (visible) onScroll();
        });
      },
      { threshold: 0 }
    );
    observer.observe(img);
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} id="tentang" className="mx-auto max-w-2xl px-6 py-12 text-center">
      <div {...reveal(inView, '0.1s')}>
        <Quote className="mx-auto h-6 w-6 text-slate-900" />
      </div>

      <h2
        {...reveal(inView, '0.2s')}
        className="mt-6 text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]"
      >
        Saya meninggalkan <span className="font-mondwest">Apple</span> untuk membangun studio yang
        selalu ingin saya ajak bekerja sama
      </h2>

      <p {...reveal(inView, '0.3s')} className="mt-6 text-sm italic text-[#273C46]">
        Viktor Oddy
      </p>

      <div
        {...reveal(inView, '0.4s')}
        className="mt-10 flex items-center justify-center gap-6 md:gap-10"
      >
        {COMPANIES.map((company) => (
          <span
            key={company.name}
            className={`inline-block text-center text-[24px] font-medium text-slate-900 ${company.width}`}
          >
            {company.name}
          </span>
        ))}
      </div>

      <div {...reveal(inView, '0.5s')} className="mt-12">
        <img
          ref={parallaxRef}
          src={PARALLAX_IMAGE}
          alt="Chris Halaska"
          className="mx-auto w-full max-w-xs rounded-2xl shadow-lg will-change-transform"
        />
      </div>
    </section>
  );
}
