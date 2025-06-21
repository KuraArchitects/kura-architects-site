'use client';

import Link from 'next/link';

export default function ArchitecturePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-[#7994a0] text-white p-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Kura Architects</h1>
          <nav className="space-x-4 mt-4 sm:mt-0">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/architecture" className="hover:underline">Architecture</Link>
            <Link href="/developing" className="hover:underline">Developing</Link>
            <Link href="/principal-designer" className="hover:underline">Principal Designer</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 py-20">
        <h2 className="text-4xl font-bold mb-4">Architecture</h2>
        <p className="text-lg text-gray-600 max-w-xl">
          This section is currently being updated. Please check back soon or{' '}
          <Link href="/contact" className="text-[#7994a0] underline">get in touch</Link>{' '}
          for more information.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-[#7994a0] text-white text-center text-sm p-6 mt-auto">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </div>
  );
}
