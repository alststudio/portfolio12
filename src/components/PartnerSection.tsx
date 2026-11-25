import { useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import { BOOK_URL, MARQUEE_IMAGES, PARTNER_AVATAR } from '../data';
import { reveal, useInViewAnimation } from '../hooks/useInViewAnimation';

interface Thumb {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
}

export default function PartnerSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();
  const [thumbs, setThumbs] = useState<Thumb[]>([]);
  const lastSpawn = useRef(0);
  const idRef = useRef(0);

  /* GIF thumbnails spawn at the cursor (min 80ms apart), live for 1000ms,
     then fade out with a scale-down and are removed. */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastSpawn.current < 80) return;
    lastSpawn.current = now;

    const rect = e.currentTarget.getBoundingClientRect();
    const id = ++idRef.current;
    const thumb: Thumb = {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      src: MARQUEE_IMAGES[Math.floor(Math.random() * MARQUEE_IMAGES.length)],
      rotation: Math.random() * 20 - 10,
    };
    setThumbs((current) => [...current.slice(-14), thumb]);
    window.setTimeout(() => {
      setThumbs((current) => current.filter((t) => t.id !== id));
    }, 1000);
  };

  return (
    <section ref={ref} className="w-full px-6 py-12">
      <div
        onMouseMove={handleMouseMove}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white py-48 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
      >
        {thumbs.map((thumb) => (
          <img
            key={thumb.id}
            src={thumb.src}
            alt=""
            aria-hidden="true"
            className="animate-thumb-fade pointer-events-none absolute z-0 h-20 w-32 rounded-xl object-cover shadow-lg"
            style={
              {
                left: thumb.x,
                top: thumb.y,
                '--r': `${thumb.rotation}deg`,
              } as CSSProperties
            }
          />
        ))}

        <div className="relative z-10 px-6 text-center">
          <h2
            {...reveal(inView, '0.1s')}
            className="mb-12 font-mondwest text-[48px] leading-[1.05] text-[#0D212C] md:text-[64px] lg:text-[80px]"
          >
            Bermitra dengan kami
          </h2>
          <div {...reveal(inView, '0.2s')}>
            <a
              href={BOOK_URL}
              className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#051A24] py-2 pl-2 pr-7 text-sm font-medium text-white shadow-primary transition-opacity hover:opacity-90"
            >
              <img
                src={PARTNER_AVATAR}
                alt="Viktor Oddy"
                className="h-10 w-10 rounded-full object-cover"
              />
              Mulai chat dengan Viktor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
