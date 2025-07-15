'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative mt-auto bg-[#7994a0] text-white text-sm pt-12 pb-4">
      <div className="absolute left-6 right-6 -top-8 flex items-center">
        <Image
          src="/riba-logo.png"
          alt="RIBA logo"
          width={160}
          height={80}
        />
        <div className="flex gap-4 justify-end ml-auto">
          <Image
            src="/grand-designs-logo.png"
            alt="Grand Designs logo"
            width={80}
            height={40}
          />
          <Image
            src="/grand-designs-award-logo.png"
            alt="Grand Designs Award logo"
            width={80}
            height={40}
          />
        </div>        
      </div>
      <p className="text-center mt-8">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights
        reserved.
      </p>
    </footer>
  );
}
