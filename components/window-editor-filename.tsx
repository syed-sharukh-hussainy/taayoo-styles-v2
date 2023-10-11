import { WindowHeaderOptions } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import React, { useState } from 'react';

const WindowEditorFilename = () => {
  const [fileName, setFileName] = useState('App.js');
  const showFilename = useBoundStore((state) => state.showFilename);
  const selectedThemeColor = useBoundStore((state) => state.selectedThemeColor);
  const topBar = useBoundStore((state) => state.topBar);
  const topBarPosition = useBoundStore((state) => state.topBarPosition);
  const showAccent = useBoundStore((state) => state.showAccent);
  const themeType = useBoundStore((state) => state.theme.themeType);

  if (showFilename) {
    return (
      <section
        className={cn(
          'text-sm absolute flex items-center justify-center py-0 px-[14px] h-10 bottom-0  transition duration-200 ease rounded-t-xl'
        )}
        style={{
          color:
            themeType === 'light'
              ? 'rgba(0,0,0,0.7)'
              : 'rgba(245, 245, 245, 0.8)',
          backgroundColor: selectedThemeColor,
          bottom: showAccent ? 0 : '5px',
          left:
            topBarPosition === 'end' ||
            topBar.topBarName === WindowHeaderOptions.WINDOWS ||
            topBar.topBarName === WindowHeaderOptions.WINDOWSDARK
              ? '40px'
              : '120px',
        }}
      >
        <section
          style={{
            background: selectedThemeColor,
          }}
          className="absolute bottom-0 -left-5 w-5 h-5"
        ></section>

        <section
          style={{
            backgroundColor: showAccent
              ? themeType === 'light'
                ? 'rgba(0,0,0,.05)'
                : 'rgba(255, 255, 255, 0.05)'
              : 'transparent',
          }}
          className="absolute bottom-0 -left-5 w-5 h-5 bg-[#ffffff0d] transition duration-200 ease rounded-br-xl"
        ></section>

        <section
          style={{
            backgroundColor: selectedThemeColor,
          }}
          className="absolute bottom-0 -right-5 w-5 h-5"
        ></section>

        <section
          style={{
            backgroundColor: showAccent
              ? themeType === 'light'
                ? 'rgba(0,0,0,.05)'
                : 'rgba(255, 255, 255, 0.05)'
              : 'transparent',
          }}
          className="absolute bottom-0 -right-5 w-5 h-5 bg-[#ffffff0d] transition duration-200 ease rounded-bl-xl"
        ></section>

        <input
          type="text"
          className="outline-none bottom-0 font-bold"
          style={{
            background: selectedThemeColor,
          }}
          onChange={(e) => setFileName(e.target.value)}
          value={fileName}
        />
      </section>
    );
  }
  return null;
};

export default WindowEditorFilename;
