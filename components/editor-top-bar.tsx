'use client';

import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

import dynamic from 'next/dynamic';

const WindowEditorTopbar = dynamic(() => import('./window-editor-topbar'), {
  ssr: false,
});

const WindowEditorFilename = dynamic(() => import('./window-editor-filename'), {
  ssr: false,
});

const EditorTopBar = () => {
  const showAccent = useBoundStore((state) => state.showAccent);
  const themeType = useBoundStore((state) => state.theme.themeType);

  return (
    <section
      className={cn(
        'w-full flex absolute top-0 left-0 py-[18px] px-6 items-center z-10 rounded-t-md transition duration-200 ease-out',
        showAccent &&
          (themeType === 'light' ? 'bg-[#0000000d]' : 'bg-[#f5f5f50d]')
      )}
    >
      <WindowEditorTopbar />
      <WindowEditorFilename />
    </section>
  );
};

export default EditorTopBar;
