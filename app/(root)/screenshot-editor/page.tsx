import TaaYooLogo from '@/components/taayoo-logo';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(
  () => import('@/components/screenshot-editor/sidebar'),
  {
    ssr: false,
  }
);

const MobileEditorMessage = dynamic(
  () => import('@/components/mobile-editor-message'),
  {
    ssr: false,
    loading: () => (
      <section className="h-screen w-full flex items-center justify-center">
        <Loader2 className="animate-spin h-8 w-8" />
      </section>
    ),
  }
);

const ScreenShotEditorContainer = dynamic(
  () => import('@/components/screenshot-editor-container'),
  {
    ssr: false,
  }
);

export default function ScreenshotEditorPage() {
  return (
    <section>
      <section className="pl-[350px] relative hidden md:block">
        <Sidebar />
        <ScreenShotEditorContainer />
      </section>
      <MobileEditorMessage />
    </section>
  );
}
