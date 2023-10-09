import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getGradientColor } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const BackgroundInput = dynamic(() => import('./background-input'), {
  ssr: false,
  loading: () => (
    <section className="flex items-center justify-center animate-spin my-10">
      <Loader2 />
    </section>
  ),
});

const GradientTabContent = dynamic(() => import('./gradient-tabcontent'), {
  ssr: false,
});

const SolidTabContent = dynamic(() => import('./solid-tabcontent'), {
  ssr: false,
});

const FrameBackgroundPopover = () => {
  const selectedBackgroundColor = useBoundStore(
    (state) => state.frameBackgroundColor
  );
  const gradientDirection = useBoundStore((state) => state.gradientDirection);

  const frameBackground =
    selectedBackgroundColor.length === 1
      ? selectedBackgroundColor[0]
      : `linear-gradient(${gradientDirection}, ${getGradientColor(
          selectedBackgroundColor
        )})`;

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <section
          className="border border-foreground/10 w-full h-8 rounded-lg p-1 mt-4"
          role="button"
          aria-label="button"
        >
          <section
            className="w-full h-full rounded-sm"
            style={{
              background: frameBackground,
            }}
          ></section>
        </section>
      </PopoverTrigger>
      <PopoverContent side="right" className="w-96">
        <Tabs defaultValue="gradient">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gradient">Gradient</TabsTrigger>
            <TabsTrigger value="solid">Solid</TabsTrigger>
          </TabsList>
          <BackgroundInput />
          <GradientTabContent />
          <SolidTabContent />
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};

export default FrameBackgroundPopover;
