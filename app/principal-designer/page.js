'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    document.title = "Principal Designer | Kura Architects";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">

      {{/* Header */}}
      <header className="p-6 bg-[#7994a0] text-white">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <Image src="/Logo.png" alt="Kura Architects" width={366} height={100} />
          <nav className="mt-4 sm:mt-0 space-x-4 text-lg text-center sm:text-right">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/architecture" className="hover:underline">Architecture</Link>
            <Link href="/developing" className="hover:underline">Developing</Link>
            <Link href="/principal-designer" className="hover:underline">Principal Designer</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      {{/* Main */}}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Principal Designer</h1>
        <p className="text-lg text-gray-600">
          This section is currently being updated. Please check back soon or{" "}
          <Link href="/contact" className="text-[#7994a0] underline">get in touch</Link> for more information.
        </p>
      </main>

      {{/* Footer */}}
      <footer className="mt-auto p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </div>
  );
}
