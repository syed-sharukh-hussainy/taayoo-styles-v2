import { SheetClose, SheetContent } from './ui/sheet';
import { ScrollArea } from './ui/scroll-area';
import { THEMES_OPTIONS } from '@/lib/constants';
import Image from 'next/image';
import { useBoundStore } from '@/store/useBoundStore';
import { getThemeByName } from '@/lib/utils';

const ThemesSheetContent = () => {
  const setEditorTheme = useBoundStore((state) => state.setTheme);
  const setFrameBackground = useBoundStore(
    (state) => state.setFrameBackgroundColor
  );
  const setSelectedThemeColor = useBoundStore(
    (state) => state.setSelectedThemeColor
  );
  const setGradientDirection = useBoundStore(
    (state) => state.setGradientDirection
  );
  const handleSelectedTheme = (themeName: string) => {
    const themeData = getThemeByName(themeName);
    setFrameBackground(themeData?.editorBackground!);
    setGradientDirection(themeData?.gradientDirection!);
    setEditorTheme(
      themeData?.editorTheme.themeName!,
      themeData?.editorTheme.themeType!
    );
    setSelectedThemeColor(themeData?.selectedThemeColor!);
  };

  return (
    <SheetContent side="right" className="w-80">
      <ScrollArea className="w-full h-full rounded-lg px-5 mt-10">
        {THEMES_OPTIONS.map((theme) => (
          <SheetClose asChild key={theme.themeName}>
            <section
              className="border w-full cursor-pointer transition rounded-xl group mb-5"
              onClick={() => handleSelectedTheme(theme.themeName)}
            >
              <Image
                src={`https://taayoo-images.s3.ap-south-1.amazonaws.com/themes/${theme.themeName}-theme.png`}
                width={300}
                height={300}
                loading="eager"
                alt="aura-theme"
                priority={true}
                className="w-full object-contain rounded-t-xl brightness-75 group-hover:brightness-105 transition"
              />
              <span className="w-full h-10 font-medium text-center flex items-center justify-center">
                {theme.themeName}
              </span>
            </section>
          </SheetClose>
        ))}
      </ScrollArea>
    </SheetContent>
  );
};

export default ThemesSheetContent;
