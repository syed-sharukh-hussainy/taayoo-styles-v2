'use client';

import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const EditorWithBg = dynamic(() => import('./editor-with-bg'), {
  ssr: false,
  loading: () => (
    <section className="flex items-center justify-centerw-full">
      <Loader2 className="h-10 w-10 animate-spin" />
    </section>
  ),
});

const ScreenShotEditorContainer = () => {
  return (
    <section
      className="border rounded-lg mt-[4.5rem] mr-6 mb-4 pl-0 pr-6 pt-6 pb-6 select-none overflow-y-auto flex items-center justify-center bg-muted/50"
      style={{
        minHeight: 'calc(100vh - 90px)',
      }}
    >
      <section className="relative" id="exportToImage">
        <EditorWithBg />
      </section>
    </section>
  );
};

export default ScreenShotEditorContainer;
