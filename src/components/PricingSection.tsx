import Button from './Button';
import { BOOK_URL } from '../data';
import { reveal, useInViewAnimation } from '../hooks/useInViewAnimation';

export default function PricingSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();

  return (
    <section ref={ref} id="pricing" className="w-full px-6 py-12">
      <div className="grid grid-cols-1 gap-8 md:ml-auto md:max-w-4xl md:grid-cols-2 md:justify-end">
        {/* Card 1 — Dark */}
        <div
          {...reveal(inView, '0.1s')}
          className="rounded-[40px] bg-[#051A24] pb-10 pl-10 pr-10 pt-3 shadow-darkcard md:pr-24"
        >
          <h3 className="mt-6 text-[22px] font-medium text-[#F6FCFF]">Kemitraan Bulanan</h3>
          <p className="mt-3 leading-relaxed text-[#E0EBF0]">
            Tim desain kreatif khusus untuk Anda.
            <br />
            Anda bekerja langsung dengan Viktor.
          </p>
          <div className="mt-10">
            <div className="text-2xl text-[#F6FCFF]">Rp75.000.000</div>
            <div className="mt-1 text-sm text-[#E0EBF0]">Bulanan</div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" href={BOOK_URL}>
              Mulai chat
            </Button>
            <Button variant="secondary" href={BOOK_URL}>
              Cara kerjanya
            </Button>
          </div>
        </div>

        {/* Card 2 — Light */}
        <div
          {...reveal(inView, '0.2s')}
          className="rounded-[40px] bg-white pb-10 pl-10 pr-10 pt-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:pr-24"
        >
          <h3 className="mt-6 text-[22px] font-medium text-[#0D212C]">Proyek Khusus</h3>
          <p className="mt-3 leading-relaxed text-[#051A24]/70">
            Ruang lingkup tetap, jadwal tetap.
            <br />
            Tim yang sama, standar yang sama.
          </p>
          <div className="mt-10">
            <div className="text-2xl text-[#0D212C]">Rp75.000.000</div>
            <div className="mt-1 text-sm text-[#051A24]/70">Minimum</div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="tertiary" href={BOOK_URL}>
              Mulai chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
