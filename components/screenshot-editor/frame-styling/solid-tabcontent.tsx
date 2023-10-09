import { TabsContent } from '@/components/ui/tabs';
import { SOLID_COLORS } from '@/lib/constants';
import { getGradientColor } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

const SolidTabContent = () => {
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
    <TabsContent value="solid">
      <section>
        <section className="flex flex-wrap w-full justify-between gap-1">
          {SOLID_COLORS.map((color, index) => (
            <section
              key={index}
              className="h-7 w-7 cursor-pointer rounded-full flex justify-center items-center"
              onClick={() => {
                handleSelectedBgColor([`#${color}`]);
              }}
              style={{
                backgroundColor: `#${color}`,
              }}
            >
              {getGradientColor(selectedBackgroundColor) === `#${color}` && (
                <section className="w-3 h-3 bg-background rounded-full"></section>
              )}
            </section>
          ))}
        </section>
      </section>
    </TabsContent>
  );
};

export default SolidTabContent;
