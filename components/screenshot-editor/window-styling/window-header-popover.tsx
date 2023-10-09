import { Popover, PopoverTrigger } from '@/components/ui/popover';

import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const WindowPopoverContent = dynamic(() => import('./window-popover-content'), {
  ssr: false,
});

const WindowHeaderPopover = () => {
  const showWindowHeader = useBoundStore((state) => state.showWindowHeader);

  const topBarType = useBoundStore((state) => state.topBar.topBarType);

  return (
    <section
      className={cn(
        'cubic-bezier-animation-a',
        showWindowHeader ? 'cubic-bezier-animation-b' : ''
      )}
    >
      <Popover>
        <PopoverTrigger asChild>
          <button className="w-full h-10 cursor-pointer border border-foreground/20 outline-none rounded-lg flex mt-5 items-center p-2">
            <div className="flex py-3">
              <Image
                src={topBarType}
                alt="window topbar"
                width={60}
                height={20}
                loading="eager"
                className="w-auto h-auto"
              />
            </div>
          </button>
        </PopoverTrigger>
        <WindowPopoverContent />
      </Popover>
    </section>
  );
};

export default WindowHeaderPopover;
