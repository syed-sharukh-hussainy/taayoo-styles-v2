import dynamic from 'next/dynamic';

const DynamicHeroSection = dynamic(
  () => import('@/components/landing/hero-section'),
  {
    ssr: false,
  }
);

const DynamicEditorImage = dynamic(
  () => import('@/components/landing/editor-image'),
  {
    ssr: false,
  }
);

export default function LandingPage() {
  return (
    <main>
      <DynamicHeroSection />
      <DynamicEditorImage />
    </main>
  );
}
