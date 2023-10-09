import dynamic from 'next/dynamic';

const SettingsItem = dynamic(() => import('@/components/settings-item'), {
  ssr: false,
});
const FrameWidth = dynamic(() => import('./frame-width'));

const FramePadding = dynamic(() => import('./frame-padding'), { ssr: false });
const FrameBackground = dynamic(() => import('./frame-background'), {
  ssr: false,
});

const FrameStyling = () => {
  return (
    <SettingsItem label="Frame Styling">
      <section className="flex flex-col gap-6">
        <FrameWidth />
        <FramePadding />
        <FrameBackground />
      </section>
    </SettingsItem>
  );
};

export default FrameStyling;
