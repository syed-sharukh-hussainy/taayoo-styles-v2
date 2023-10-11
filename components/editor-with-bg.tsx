import { getGradientColor } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import dynamic from 'next/dynamic';
const CustomEditor = dynamic(() => import('./custom-editor'), {
  ssr: false,
});

const EditorWithBg = () => {
  const showFrameBackground = useBoundStore(
    (state) => state.showFrameBackground
  );
  const paddingValue = useBoundStore(
    (state) => state.framePadding
  ).paddingValue;
  const selectedBg = useBoundStore((state) => state.frameBackgroundColor);
  const gradientDirection = useBoundStore((state) => state.gradientDirection);

  const padding = showFrameBackground ? paddingValue : 0;
  const background = showFrameBackground
    ? selectedBg.length === 1
      ? selectedBg[0]
      : `linear-gradient(${gradientDirection}, ${getGradientColor(selectedBg)})`
    : 'transparent';

  return (
    <section
      className="flex items-center transition rounded-sm"
      style={{
        padding,
        background,
      }}
    >
      <CustomEditor />
    </section>
  );
};

export default EditorWithBg;
