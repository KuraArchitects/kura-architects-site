'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutRav() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full h-[480px] md:h-[560px]"
        >
          <Image
            src="/images/rav-portrait.jpg"
            alt="Rav Kumar"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <h1 className="text-3xl font-semibold text-center md:text-left mb-2">
            About Rav Kumar
          </h1>
          <p className="text-lg text-gray-600 italic">
            Thoughtful. Smart. Reliable.
          </p>

          <h2 className="border-l-4 border-[#7994a0] pl-4 text-xl font-medium">
            Chartered Architect. Principal Designer. Calmly in control.
          </h2>
          <p>
            Rav Kumar is a <strong>RIBA Chartered Architect</strong> and
            <strong> accredited Principal Designer</strong>, bringing clarity, care, and calm to the design process.
            With over 25 years in practice, he has built a reputation for being precise in his thinking, practical in his advice, and dependable in delivery.
          </p>

          <h2 className="border-l-4 border-[#7994a0] pl-4 text-xl font-medium">
            A background rooted in leadership and delivery
          </h2>
          <p>
            Rav’s career spans private homes, education, civic buildings, and heritage sites.
            He was formerly a Director at a national architecture practice, leading high-profile teams and projects across the UK.
          </p>

          <h2 className="border-l-4 border-[#7994a0] pl-4 text-xl font-medium">
            Practice ethos: rigour at every scale
          </h2>
          <p>
            Through Kura Architects, Rav brings <strong>large-practice standards</strong> to design that remains
            <strong> personal, purposeful, and reliable</strong>. His work is underpinned by rigorous quality assurance and informed leadership.
          </p>

          <h2 className="border-l-4 border-[#7994a0] pl-4 text-xl font-medium">
            A developer’s perspective, not just an architect’s
          </h2>
          <p>
            Having delivered his own schemes—including the redevelopment of a Grade II listed property—Rav understands
            the pressures clients face. This experience sharpens his empathy, structure, and foresight.
          </p>

          <h2 className="border-l-4 border-[#7994a0] pl-4 text-xl font-medium">
            How he works: clear thinking, dependable process
          </h2>
          <p>
            Whether resolving complex challenges or guiding new clients, Rav’s methodical, intelligent approach builds trust at every stage.
          </p>

          <blockquote className="mt-6 border-l-4 pl-4 text-gray-700 italic">
            Not just good architecture—
            <br />
            but a process clients can trust,
            <br />
            and buildings that endure.
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}