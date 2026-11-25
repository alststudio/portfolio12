import Button from './components/Button';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import ProjectsSection from './components/ProjectsSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import CopyrightBar from './components/CopyrightBar';
import BottomNav from './components/BottomNav';
import { reveal, useInViewAnimation } from './hooks/useInViewAnimation';
import { BOOK_URL, MARQUEE_IMAGES } from './data';

function Hero() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-[440px] px-6 pt-12 text-center md:pt-16">
      <div {...reveal(inView, '0.1s')}>
        <div className="mb-4 font-mondwest text-[32px] font-semibold tracking-tight text-[#051A24] md:text-[40px] lg:text-[44px]">
          Viktor Oddy
        </div>
      </div>

      <p {...reveal(inView, '0.2s')} className="mb-2 font-mono text-xs text-[#051A24] md:text-sm">
        Studio kreatif milik Viktor Oddy
      </p>

      <h1
        {...reveal(inView, '0.3s')}
        className="whitespace-nowrap text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]"
      >
        <span className="block">
          Bangun <span className="font-mondwest">ombak baru</span>,
        </span>
        <span className="block">
          dengan <span className="font-mondwest">cara berani</span>.
        </span>
      </h1>

      <div
        {...reveal(inView, '0.4s')}
        className="mt-5 flex flex-col gap-6 text-sm leading-relaxed text-[#051A24] md:mt-6 md:text-base"
      >
        <p>
          Saya menghabiskan tujuh tahun di Apple merancang produk yang digunakan lebih dari satu
          miliar orang. Saya mendirikan Vortex Studio untuk membawa tingkat pemikiran yang sama
          kepada para inovator yang membentuk masa depan.
        </p>
        <p>
          Studio ini sengaja dibuat kecil. Saya memandu visi kreatif di setiap proyek, didukung tim
          desain veteran yang bergerak cepat tanpa mengorbankan kualitas.
        </p>
        <p>Proyek mulai dari Rp75.000.000 per bulan.</p>
      </div>

      <div
        {...reveal(inView, '0.5s')}
        className="mt-5 flex flex-col justify-center gap-3 sm:flex-row md:mt-6 md:gap-4"
      >
        <Button variant="primary" href={BOOK_URL}>
          Mulai chat
        </Button>
        <Button variant="secondary" href="#projects">
          Lihat proyek
        </Button>
      </div>
    </section>
  );
}

function Marquee() {
  const doubled = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];
  return (
    <div className="mb-16 mt-16 w-full overflow-hidden md:mt-20" aria-hidden="true">
      <div className="animate-marquee flex w-max">
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="mx-3 h-[280px] w-auto rounded-2xl object-cover shadow-lg md:h-[500px]"
            loading={i < MARQUEE_IMAGES.length ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-28 font-sans text-[#051A24]">
      <Hero />
      <Marquee />
      <TestimonialSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
}
