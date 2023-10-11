import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Paintbrush } from 'lucide-react';
import dynamic from 'next/dynamic';

const ThemesSheetContent = dynamic(() => import('./themes-sheet-content'));

const ThemesSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <section
          role="button"
          aria-pressed="false"
          className="font-bold flex gap-3 items-center bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
        >
          <Paintbrush className="w-4 h-4" /> Themes
        </section>
      </SheetTrigger>
      <ThemesSheetContent />
    </Sheet>
  );
};

export default ThemesSheet;
