import { TabsContent } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { GRADIENT_COLORS, GRADIENT_COLORS_DIRECTION } from '@/lib/constants';
import { cn, getGradientColor } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import { ArrowUpIcon } from 'lucide-react';

const GradientTabContent = () => {
  const selectedBackgroundColor = useBoundStore(
    (state) => state.frameBackgroundColor
  );
  const setFrameBackgroundColor = useBoundStore(
    (state) => state.setFrameBackgroundColor
  );
  const gradientDirection = useBoundStore((state) => state.gradientDirection);
  const setGradientDirection = useBoundStore(
    (state) => state.setGradientDirection
  );

  const handleSelectedBgColor = (bgColor: string[]) => {
    setFrameBackgroundColor(bgColor);
  };

  return (
    <TabsContent value="gradient">
      <div className="flex w-full flex-wrap gap-1">
        {GRADIENT_COLORS.map((palette, index) => (
          <div
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
          </div>
        ))}
      </div>
      <div className="mt-10">
        <p className="my-3 text-sm font-medium">Gradient Direction</p>
        <div className="w-full flex justify-between flex-wrap gap-2">
          <TooltipProvider>
            {GRADIENT_COLORS_DIRECTION.map((direction, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div
                    onClick={() =>
                      setGradientDirection(direction.directionStyle)
                    }
                    className={cn(
                      'w-8 h-8 flex justify-center cursor-pointer items-center border rounded-md hover:bg-muted',
                      gradientDirection === direction.directionStyle
                        ? 'bg-muted'
                        : ''
                    )}
                  >
                    <ArrowUpIcon
                      className="w-3 h-3"
                      style={{
                        rotate: direction.directionStyle,
                      }}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{direction.directionName}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </TabsContent>
  );
};

export default GradientTabContent;
