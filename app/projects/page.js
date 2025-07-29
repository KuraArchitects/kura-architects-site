import Link from 'next/link';

export default function Page() {
  return (
    <section className="flex-grow flex items-center justify-center text-center px-6 py-16 bg-white text-gray-800">
      <h1 className="text-2xl md:text-3xl font-semibold fade-in">
        This section is currently being updated. Please our Istagram  soon,  or <Link href="/contact" className="underline text-[#7994a0]">get in touch</Link> for more information.
      </h1>
    </section>
  );
}
