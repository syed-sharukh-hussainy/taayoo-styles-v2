import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type FeatureItemProps = {
  className: string | undefined;
  Icon: LucideIcon;
  label: string;
  description: string;
};

const FeatureItem = ({
  className,
  description,
  Icon,
  label,
}: FeatureItemProps) => {
  return (
    <div className={cn('p-8 rounded-xl shadow-md bg-muted', className)}>
      <Icon className="h-8 w-8" />
      <h6 className="text-lg font-semibold my-5">{label}</h6>
      <p className="text-muted-foreground font-light">{description}</p>
    </div>
  );
};

export default FeatureItem;
