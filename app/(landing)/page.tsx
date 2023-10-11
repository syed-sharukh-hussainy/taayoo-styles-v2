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

const DynamicFeatureSection = dynamic(
  () => import('@/components/landing/features-section'),
  {
    ssr: false,
  }
);

const DynamicThemesSection = dynamic(
  () => import('@/components/landing/themes-section'),
  { ssr: false }
);

export default function LandingPage() {
  return (
    <>
      <DynamicHeroSection />
      <DynamicEditorImage />
      <DynamicFeatureSection />
      <DynamicThemesSection />
    </>
  );
}
