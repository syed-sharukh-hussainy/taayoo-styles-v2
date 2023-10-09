import { GRADIENT_COLORS } from '@/lib/constants';
import { getGradientColor } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

const GradientColors = () => {
  const selectedBackgroundColor = useBoundStore(
    (state) => state.frameBackgroundColor
  );
  const setFrameBackgroundColor = useBoundStore(
    (state) => state.setFrameBackgroundColor
  );

  const handleSelectedBgColor = (bgColor: string[]) => {
    setFrameBackgroundColor(bgColor);
  };

  return (
    <section className="flex w-full flex-wrap gap-1">
      {GRADIENT_COLORS.map((palette, index) => (
        <section
          key={index}
          className="flex items-center justify-center w-7 h-7 rounded-full cursor-pointer shadow-md"
          onClick={() => handleSelectedBgColor([...palette.gradientPalette])}
          style={{
            background: `linear-gradient(to right, ${getGradientColor([
              ...palette.gradientPalette,
            ])})`,
          }}
        >
          {getGradientColor(selectedBackgroundColor) ===
            getGradientColor([...palette.gradientPalette]) && (
            <div className="w-2 h-2 bg-background rounded-full"></div>
          )}
        </section>
      ))}
    </section>
  );
};

export default GradientColors;
