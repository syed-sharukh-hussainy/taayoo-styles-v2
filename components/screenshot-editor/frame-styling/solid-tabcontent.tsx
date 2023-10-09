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
      <div className="">
        <div className="flex flex-wrap w-full justify-between gap-1">
          {SOLID_COLORS.map((color, index) => (
            <div
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
                <div className="w-3 h-3 bg-background rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </TabsContent>
  );
};

export default SolidTabContent;
