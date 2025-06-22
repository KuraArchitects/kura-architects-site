'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/architecture', label: 'Architecture' },
    { href: '/developing', label: 'Developing' },
    { href: '/principal-designer', label: 'Principal Designer' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-6 bg-white border-b border-gray-200">
      <Image src="/Logo.png" alt="Kura Architects" width={366} height={100} />
      <nav className="mt-4 md:mt-0 space-x-6 text-sm md:text-lg">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`hover:underline ${
              pathname === link.href ? 'text-[#7994a0] font-semibold' : 'text-gray-800'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
