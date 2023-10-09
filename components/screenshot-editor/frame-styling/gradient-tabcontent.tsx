import { TabsContent } from '@/components/ui/tabs';
import dynamic from 'next/dynamic';

const GradientColors = dynamic(() => import('./gradient-colors'), {
  ssr: false,
});

const GradientDirection = dynamic(() => import('./gradient-direction'), {
  ssr: false,
});

const GradientTabContent = () => {
  return (
    <TabsContent value="gradient">
      <GradientColors />
      <GradientDirection />
    </TabsContent>
  );
};

export default GradientTabContent;
