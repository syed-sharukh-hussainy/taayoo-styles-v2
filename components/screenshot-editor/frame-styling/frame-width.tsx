'use client';

import { useBoundStore } from '@/store/useBoundStore';
import dynamic from 'next/dynamic';

const CustomSlider = dynamic(() => import('@/components/custom-slider'), {
  ssr: false,
});
const WidthSettingsWithLabel = dynamic(() => import('./width-settings-label'), {
  ssr: false,
});

const FrameWidth = () => {
  const frameWidth = useBoundStore((state) => state.frameWidth);
  const setFrameWidth = useBoundStore((state) => state.setFrameWidth);

  const handleSliderValue = (value: string) => {
    setFrameWidth(parseInt(value));
  };
  return (
    <section className="group">
      <WidthSettingsWithLabel frameWidth={frameWidth} />
      <CustomSlider
        minValue={600}
        maxValue={1200}
        defaultValue={frameWidth}
        handleSliderValue={handleSliderValue}
      />
    </section>
  );
};

export default FrameWidth;
