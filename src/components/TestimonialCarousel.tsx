import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS, type Testimonial } from '../data';
import { reveal, useInViewAnimation } from '../hooks/useInViewAnimation';

const COUNT = TESTIMONIALS.length;
const TRIPLED: Testimonial[] = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
const GAP = 24;

function cardWidthFor(viewportWidth: number): number {
  return viewportWidth >= 768 ? 427.5 : viewportWidth - 48;
}

function QuoteMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#051A24" aria-hidden="true">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
    </svg>
  );
}

export default function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();
  const [index, setIndex] = useState(COUNT);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [cardW, setCardW] = useState<number>(() =>
    typeof window !== 'undefined' ? cardWidthFor(window.innerWidth) : 427.5
  );

  useEffect(() => {
    const onResize = () => setCardW(cardWidthFor(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const next = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i + 1);
  }, []);
  const prev = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i - 1);
  }, []);

  /* Auto-scroll every 3s, paused on hover. */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, [paused, next]);

  /* Infinite loop: after sliding into a cloned copy, snap back silently. */
  useEffect(() => {
    if (index >= COUNT * 2 || index < COUNT) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(index >= COUNT * 2 ? index - COUNT : index + COUNT);
      }, 850);
      return () => clearTimeout(t);
    }
  }, [index]);

  useEffect(() => {
    if (!animate) {
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      return () => cancelAnimationFrame(r);
    }
  }, [animate]);

  return (
    <section ref={ref} className="w-full py-20">
      <div className="px-6 md:ml-auto md:max-w-4xl">
        <div
          {...reveal(inView, '0.1s')}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <h2 className="text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]">
            Kata para <span className="font-mondwest">pembangun</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-black text-black" />
                ))}
              </span>
              <span className="text-sm font-medium text-[#0D212C]">Clutch 5/5</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Testimoni sebelumnya"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D212C]/20 text-[#0D212C] transition hover:bg-[#0D212C]/5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Testimoni berikutnya"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D212C]/20 text-[#0D212C] transition hover:bg-[#0D212C]/5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        {...reveal(inView, '0.2s')}
        className="mt-12 overflow-hidden px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex"
          style={{
            gap: GAP,
            transform: `translateX(${-(index * (cardW + GAP))}px)`,
            transition: animate ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        >
          {TRIPLED.map((t, i) => (
            <article
              key={i}
              className="shrink-0 rounded-[32px] bg-white px-6 py-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-[800ms] md:rounded-[40px] md:pl-10 md:pr-24"
              style={{
                width: cardW,
                opacity: i === index ? 1 : 0.45,
                transform: i === index ? 'scale(1)' : 'scale(0.97)',
              }}
            >
              <QuoteMark />
              <p className="mt-5 text-base leading-relaxed text-[#0D212C]">{t.quote}</p>
              <div className="mt-8 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-semibold text-[#0D212C]">{t.name}</div>
                  <div className="text-sm text-[#273C46]">
                    → {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
