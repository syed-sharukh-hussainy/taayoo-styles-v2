import { PopoverContent } from '@/components/ui/popover';
import { TOPBAR_OPTIONS, WindowHeaderOptions } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import { useBoundStore } from '@/store/useBoundStore';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

const WindowHeaderPosition = dynamic(() => import('./window-header-position'), {
  ssr: false,
});

const WindowPopoverContent = () => {
  const setTopBar = useBoundStore((state) => state.setTopBar);
  return (
    <PopoverContent side="right">
      <section className="rounded-lg flex flex-col gap-5">
        {TOPBAR_OPTIONS.map((option, index) => (
          <section
            key={index}
            onClick={() => {
              setTopBar(option.topBarName, option.topBarType);
            }}
            className={cn(
              'h-10 rounded-lg border px-5 cursor-pointer flex items-center hover:scale-105 transition',
              option.topBarName === WindowHeaderOptions.WINDOWS ||
                option.topBarName === WindowHeaderOptions.WINDOWSDARK
                ? 'justify-end'
                : 'justify-start'
            )}
          >
            <Image
              src={option.topBarType}
              alt={option.topBarName}
              width={60}
              height={20}
              loading="eager"
              className="w-auto h-auto"
            />
          </section>
        ))}
        <WindowHeaderPosition />
      </section>
    </PopoverContent>
  );
};

export default WindowPopoverContent;
