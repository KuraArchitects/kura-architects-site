'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-auto p-6 bg-[#7994a0] text-white text-center text-sm">
      <div className="flex justify-center gap-4 mb-4">
        <Image
          src="/logos/riba-logo.png"
          alt="RIBA logo"
          width={80}
          height={40}
        />
        <Image
          src="/logos/grand-designs-logo.png"
          alt="Grand Designs logo"
          width={80}
          height={40}
        />
        <Image
          src="/logos/grand-designs-award-logo.png"
          alt="Grand Designs Award logo"
          width={80}
          height={40}
        />
      </div>

      &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
    </footer>
  );
}
