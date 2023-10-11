import React from 'react';
import CustomSlider from './custom-slider';
import { Label } from './ui/label';

const ImageScaleSlider = ({
  scale,
  setImageValue,
  minValue,
  maxValue,
  extenstionType,
  defaultValue,
}: {
  scale: number;
  defaultValue: number;
  setImageValue: (value: number) => void;
  minValue: number;
  maxValue: number;
  extenstionType: string;
}) => {
  const extension = extenstionType === 'JPEG-QUALITY' ? '%' : 'x';
  return (
    <div className="flex flex-col gap-6">
      <Label>
        {extenstionType === 'JPEG-QUALITY' ? 'Quality' : 'Scale'}
        <span className="ml-5 bg-muted px-3 py-1 rounded-xl text-sm">
          {scale}
          {extension}
        </span>
      </Label>
      <CustomSlider
        defaultValue={defaultValue}
        minValue={minValue}
        maxValue={maxValue}
        handleSliderValue={(value) => setImageValue(parseInt(value))}
      />
    </div>
  );
};

export default ImageScaleSlider;
