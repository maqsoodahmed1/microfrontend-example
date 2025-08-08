import type { FC, ReactNode, CSSProperties } from 'react';
import './typography.scss';

const VARIANTS = [
  'h1', 'h2', 'h3', 'h3-bold',
  'subText', 'subText-2',
  'subHeading-1', 'subHeading-2', 'subHeading-3', 'subHeading-4',
  'body-text-1', 'body-text-2', 'body-text-3', 'body-text-4',
  'text-1', 'text-2', 'text-3', 'text-4',
  'small-heading-1', 'small-heading-2', 'small-heading-3', 'small-heading-4',
  'small-text-1', 'small-text-2', 'small-text-3', 'small-text-4',
] as const;

type Variant = typeof VARIANTS[number];

type TypographyProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Typography: FC<TypographyProps> = ({
  variant = 'small-text-4',
  children,
  className,
  style,
}) => {
  return (
    <div className={`typography ${variant} ${className || ''}`} style={style}>
      {children}
    </div>
  );
};

export default Typography;
