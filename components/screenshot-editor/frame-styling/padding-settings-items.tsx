import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

const PaddingSettingsItem = ({
  index,
  paddingValue,
}: {
  index: number;
  paddingValue: number;
}) => {
  const framePadding = useBoundStore((state) => state.framePadding);
  const setFramePadding = useBoundStore((state) => state.setFramePadding);

  const handleSelectedPadding = (padding: number, activeNumber: number) => {
    setFramePadding(activeNumber, padding);
  };
  return (
    <section
      onClick={() => handleSelectedPadding(paddingValue, index)}
      className={cn(
        'p-2 w-10 text-center cursor-pointer text-xs transition rounded-md',
        framePadding.activePadding === index
          ? 'bg-muted-foreground/10 font-semibold'
          : 'text-muted-foreground'
      )}
    >
      {paddingValue}
    </section>
  );
};

export default PaddingSettingsItem;
