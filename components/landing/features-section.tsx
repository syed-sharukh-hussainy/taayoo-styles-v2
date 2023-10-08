import {
  Download,
  LucideIcon,
  Palette,
  PlaySquare,
  Share2,
  TerminalSquare,
} from 'lucide-react';
import dynamic from 'next/dynamic';

type FeaturesProps = {
  icon: LucideIcon;
  label: string;
  description: string;
  className?: string;
};

const FeatureItem = dynamic(() => import('./feature-item'), {
  ssr: false,
});

const FEATURES_DATA: FeaturesProps[] = [
  {
    icon: TerminalSquare,
    label: 'Syntax Highlighting',
    description:
      'Enhance your code snippets by customizing syntax themes, adding colors, and choosing window themes to make them visually appealing.',
  },
  {
    icon: PlaySquare,
    label: 'Real-time Preview',
    description:
      'Get an instant preview of your styled code snippet as you make changes, ensuring you achieve the perfect look.',
  },

  {
    icon: Palette,
    label: 'Wide Variety of Themes',
    description:
      'Choose from a library of over 20+ custom themes to style your code exactly the way you want. Customize fonts and colors for a unique look.',
  },
  {
    icon: Download,
    label: 'Export to Multiple Formats',
    description:
      'Download your code snippets in multiple image formats to use them in presentations, documentation, or simply to showcase your work.',
    className: 'col-span-2',
  },
  {
    icon: Share2,
    label: 'Seamless Sharing',
    description:
      'Share your styled code snippets with other users, fostering a sense of community and enabling teamwork.',
  },
];

const FeatureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-0">
      <h2 className="text-2xl md:text-4xl font-bold mb-16 max-w-4xl text-center mx-auto leading-tight">
        Capture and Share Your Code in Style with Beautiful Screenshot Creator
      </h2>
      <section className="flex flex-col md:grid grid-cols-3 gap-4">
        {FEATURES_DATA.map((feature, index) => (
          <FeatureItem
            key={index}
            className={feature.className}
            label={feature.label}
            description={feature.description}
            Icon={feature.icon}
          />
        ))}
      </section>
    </section>
  );
};

export default FeatureSection;
