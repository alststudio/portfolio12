import Button from './Button';
import { BOOK_URL } from '../data';

export default function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-4 rounded-full bg-white px-8 py-2 shadow-nav">
        <span className="font-mondwest text-2xl font-semibold text-[#051A24]">V</span>
        <Button variant="primary" href={BOOK_URL} className="px-5 py-2">
          Mulai chat
        </Button>
      </div>
    </div>
  );
}
