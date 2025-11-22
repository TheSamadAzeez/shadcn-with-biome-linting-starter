import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <section className='mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
        <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
          Build your next idea with <br className='hidden sm:inline' />
          <span className='bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
            Shadcn Starter
          </span>
        </h1>
        <p className='max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl'>
          A modern, opinionated starter template for Next.js 16, featuring
          Shadcn UI, Biome, and best practices built-in.
        </p>
        <div className='flex w-full items-center justify-center space-x-4 py-4 md:pb-10'>
          <Button size='lg'>Get Started</Button>
          <Button variant='outline' size='lg'>
            GitHub
          </Button>
        </div>
      </section>
    </>
  );
}
