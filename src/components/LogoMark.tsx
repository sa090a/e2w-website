import Image from 'next/image';

interface LogoMarkProps {
  className?: string;
  size?: number;
}

export default function LogoMark({ className = '', size = 32 }: LogoMarkProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        borderRadius: 6,
        padding: 2,
        flexShrink: 0,
        width: size,
        height: size,
      }}
    >
      <Image
        src="/e2w-logo.png"
        alt="The E2W Company"
        width={size - 4}
        height={size - 4}
        priority
        style={{ objectFit: 'contain' }}
      />
    </span>
  );
}
