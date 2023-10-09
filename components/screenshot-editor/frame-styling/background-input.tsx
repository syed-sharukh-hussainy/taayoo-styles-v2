import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/useBoundStore';
import { ChangeEvent } from 'react';

const BackgroundInput = () => {
  const selectedBackgroundColor = useBoundStore(
    (state) => state.frameBackgroundColor
  );

  const setFrameBackgroundColor = useBoundStore(
    (state) => state.setFrameBackgroundColor
  );

  const handleInputBgColor = (e: string) => {
    if (e.includes(',')) {
      let bgColors = e.split(',');
      setFrameBackgroundColor([...bgColors]);
    } else {
      setFrameBackgroundColor([e]);
    }
  };

  return (
    <section className="my-5">
      <Input
        type="text"
        className="w-full"
        value={selectedBackgroundColor}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputBgColor(e.target.value)
        }
      />
    </section>
  );
};

export default BackgroundInput;
