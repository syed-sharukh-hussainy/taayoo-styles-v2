import { WindowHeaderOptions } from '@/lib/constants';
import { useBoundStore } from '@/store/useBoundStore';
import Image from 'next/image';
import React from 'react';

const WindowEditorTopbar = () => {
  const topBar = useBoundStore((state) => state.topBar);
  const topBarPosition = useBoundStore((state) => state.topBarPosition);
  return (
    <section
      className="w-full flex items-center"
      style={{
        justifyContent:
          topBar.topBarName === WindowHeaderOptions.WINDOWS ||
          topBar.topBarName === WindowHeaderOptions.WINDOWSDARK
            ? 'flex-end'
            : `flex-${topBarPosition}`,
      }}
    >
      <Image
        src={topBar.topBarType}
        width={60}
        height={20}
        className="w-auto h-auto"
        alt={topBar.topBarName}
      />
    </section>
  );
};

export default WindowEditorTopbar;
