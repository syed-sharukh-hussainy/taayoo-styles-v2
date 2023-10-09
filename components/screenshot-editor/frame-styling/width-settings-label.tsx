import dynamic from 'next/dynamic';

const SettingsTitle = dynamic(() => import('@/components/settings-title'), {
  ssr: false,
});

const WidthSettingsWithLabel = ({ frameWidth }: { frameWidth: number }) => {
  return (
    <section className="flex items-center justify-between mb-3">
      <SettingsTitle label="Width" />
      <span className="bg-muted-foreground/10 rounded-lg text-xs px-3 py-1  font-medium">
        {frameWidth}px
      </span>
    </section>
  );
};

export default WidthSettingsWithLabel;
