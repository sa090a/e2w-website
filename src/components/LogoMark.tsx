import Image from 'next/image';

interface LogoMarkProps {
  className?: string;
  size?: number;
}

// The E2W Company logo — rendered directly from the source PNG, unmodified.
export default function LogoMark({ className = '', size = 32 }: LogoMarkProps) {
  return (
    <Image
      src="/e2w-logo.png"
      alt="The E2W Company"
      width={size}
      height={Math.round((size * 1504) / 1469)}
      className={className}
      priority
    />
  );
}
