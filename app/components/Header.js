'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/architecture', label: 'Architecture' },
    { href: '/developing', label: 'Developing' },
    { href: '/principal-designer', label: 'Principal Designer' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#7994a0] text-white">
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="Kura Architects"
          width={366}
          height={100}
          priority
        />
      </Link>
      <nav className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0 text-base font-medium">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:underline ${
              pathname === href ? 'text-white underline' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
