import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  containerClassName?: string;
  variant?: 'light' | 'dark';
}

export function Logo({
  className,
  containerClassName,
  variant = 'light',
}: LogoProps) {
  return (
    <Link
      href='/'
      aria-label='ACME'
      className={cn('inline-block', containerClassName)}
    >
      <Image
        src='/logo.png'
        width={40}
        height={40}
        alt='Shadcn Starter logo'
        className={cn(variant === 'light' ? '' : 'invert', className)}
      />
    </Link>
  );
}
