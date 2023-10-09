import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { GRADIENT_COLORS_DIRECTION } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import { ArrowUpIcon } from 'lucide-react';

const GradientDirection = () => {
  const gradientDirection = useBoundStore((state) => state.gradientDirection);
  const setGradientDirection = useBoundStore(
    (state) => state.setGradientDirection
  );

  return (
    <section className="mt-10">
      <p className="my-3 text-sm font-medium">Gradient Direction</p>
      <section className="w-full flex justify-between flex-wrap gap-2">
        <TooltipProvider>
          {GRADIENT_COLORS_DIRECTION.map((direction, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  onClick={() => setGradientDirection(direction.directionStyle)}
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
      </section>
    </section>
  );
};

export default GradientDirection;
