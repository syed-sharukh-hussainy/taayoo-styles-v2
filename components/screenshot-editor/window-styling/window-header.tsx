import { useBoundStore } from '@/store/useBoundStore';
import dynamic from 'next/dynamic';

const CustomSwitch = dynamic(() => import('@/components/custom-switch'), {
  ssr: false,
});

const SettingsTitle = dynamic(() => import('@/components/settings-title'), {
  ssr: false,
});

const WindowHeaderPopover = dynamic(() => import('./window-header-popover'), {
  ssr: false,
});

const WindowHeader = () => {
  const setShowWindowHeader = useBoundStore(
    (state) => state.setShowWindowHeader
  );

  return (
    <section className="group">
      <section className="flex items-center justify-between">
        <SettingsTitle label="Header" />
        <CustomSwitch
          defaultValue={false}
          onChangeChecked={(checked) => setShowWindowHeader(checked)}
        />
      </section>
      <WindowHeaderPopover />
    </section>
  );
};

export default WindowHeader;
