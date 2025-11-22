import { Logo } from '@/components/custom/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='hello flex h-screen flex-col items-center gap-5'>
      <header className='flex w-full items-center justify-between px-10 py-5'>
        <Logo variant='dark' />

        <nav>
          <ul className='flex items-center gap-4'>
            <li>
              <Link className='text-sm font-medium hover:underline' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link
                className='text-sm font-medium hover:underline'
                href='/about'
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Button>Get Started</Button>
      </header>

      <main className='flex h-full flex-col items-center justify-center gap-5'>
        {children}
      </main>

      <footer className='bg-primary flex w-full items-center justify-between px-10 py-5'>
        <Logo />
        <p className='text-white'>© 2025 ACME. All rights reserved.</p>
        <p className='text-white'>
          Built with ❤️ by{' '}
          <a className='underline' href='https://github.com/thesamadazeez'>
            thesamadazeez
          </a>
        </p>
      </footer>
    </div>
  );
}
