import { ArrowUpRight } from 'lucide-react';
import Button from './Button';
import { BOOK_URL } from '../data';

const linkClasses = 'text-base text-[#051A24] transition hover:opacity-70';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-10 md:flex-row md:items-start">
        <div>
          <Button variant="primary" href={BOOK_URL}>
            Mulai chat
          </Button>
        </div>

        <div className="flex items-start gap-10 md:gap-16">
          <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-[#051A24]" />
          <nav className="flex flex-col gap-3" aria-label="Navigasi footer">
            <a href="#pricing" className={linkClasses}>
              Layanan
            </a>
            <a href="#projects" className={linkClasses}>
              Karya
            </a>
            <a href="#tentang" className={linkClasses}>
              Tentang
            </a>
          </nav>
          <nav className="flex flex-col gap-3" aria-label="Media sosial">
            <a href="https://x.com" target="_blank" rel="noreferrer" className={linkClasses}>
              x.com
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={linkClasses}
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
