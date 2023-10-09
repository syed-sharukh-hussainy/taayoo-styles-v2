import { useBoundStore } from '@/store/useBoundStore';
import dynamic from 'next/dynamic';

const CustomSwitch = dynamic(() => import('@/components/custom-switch'), {
  ssr: false,
});

const SettingsTitle = dynamic(() => import('@/components/settings-title'), {
  ssr: false,
});

const ShowFilename = () => {
  const setShowFileName = useBoundStore((state) => state.setShowFileName);
  return (
    <section className="group flex items-center justify-between">
      <SettingsTitle label="Filename" />
      <CustomSwitch
        defaultValue={false}
        onChangeChecked={() => setShowFileName()}
      />
    </section>
  );
};

export default ShowFilename;
