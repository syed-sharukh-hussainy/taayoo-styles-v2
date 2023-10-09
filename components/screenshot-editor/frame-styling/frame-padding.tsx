'use client';

import dynamic from 'next/dynamic';

const SettingsTitle = dynamic(() => import('@/components/settings-title'), {
  ssr: false,
});

const paddingSettings = [
  {
    index: 0,
    paddingValue: 16,
  },
  {
    index: 1,
    paddingValue: 32,
  },
  {
    index: 2,
    paddingValue: 64,
  },
  {
    index: 3,
    paddingValue: 128,
  },
];

const PaddingSettingsItem = dynamic(() => import('./padding-settings-items'), {
  ssr: false,
});

const FramePadding = () => {
  return (
    <section className="flex items-center justify-between group">
      <SettingsTitle label="Padding" />
      <section className="border-foreground/10 flex justify-center border rounded-lg p-1">
        {paddingSettings.map((item, index) => (
          <PaddingSettingsItem
            key={index}
            index={index}
            paddingValue={item.paddingValue}
          />
        ))}
      </section>
    </section>
  );
};

export default FramePadding;
