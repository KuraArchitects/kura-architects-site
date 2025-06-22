'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex-grow flex items-center justify-center text-center px-6 py-16">
      <h1 className="text-2xl md:text-3xl font-semibold">
        This section is currently being updated. Please check back soon or{' '}
        <Link href="/contact" className="text-[#7994a0] underline hover:opacity-80">
          get in touch
        </Link>{' '}
        for more information.
      </h1>
    </main>
  );
}
