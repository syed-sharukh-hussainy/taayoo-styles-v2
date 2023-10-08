import dynamic from 'next/dynamic';

const DynamicHeroSection = dynamic(
  () => import('@/components/landing/hero-section'),
  {
    ssr: false,
  }
);

export default function LandingPage() {
  return (
    <main>
      <DynamicHeroSection />
    </main>
  );
}
