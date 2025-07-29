'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutRav() {
  return (
    <section className="flex-grow bg-gray-50 text-gray-800 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full max-w-xs mx-auto aspect-square md:max-w-full md:aspect-auto md:h-[340px]"
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
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <h1 className="text-3xl font-semibold text-center md:text-left mb-2">
            About Kura Architects
          </h1>
          <p className="text-gray-600 italic">Thoughtful. Smart. Reliable.</p>
          <p className="text-gray-600">
            Kura Architects is a design-led practice based in the West Midlands, working across residential, heritage and small-scale development projects. We create architecture that is measured, enduring and responsive — shaped by context, built with purpose, and designed to serve the people who inhabit it.
          </p>
          <p className="text-gray-600">
            Our name draws from the Japanese concept of the kura — a traditional storehouse built with clarity, restraint, honest materiality and longevity — an approach that underpins our work: carefully considered, technically rigorous, and crafted to protect what matters.
          </p>
          <p className="text-gray-600">
            We listen closely, work intelligently, and communicate without jargon. Every project is grounded in the specifics of site and brief, resolved with care, and delivered with consistency. We remain closely involved throughout construction, ensuring that the original intent is realised in built form with integrity.
          </p>
          <p className="text-gray-600">
            With over 25 years’ experience, we bring a calm, assured presence to the process. Our clients include homeowners, developers and commercial end-users — people who value reliability, clear thinking and design that stands the test of time. At every stage, our work is thoughtful in its approach, smart in its resolution, and reliable in its delivery.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Profile &ndash; Rav Kumar</h2>
          <p className="text-gray-600">
            Rav Kumar is an architect with over 25 years of experience designing and delivering residential, heritage and mixed-use schemes across the UK.
          </p>
          <p className="text-gray-600">
            He began his career at Associated Architects, where he spent 13 years developing a broad design portfolio, before joining Corstorphine &amp; Wright to establish and lead their Birmingham Studio. Over a decade there, he helped grow the practice significantly, working closely with commercial developers and delivering projects at scale.
          </p>
          <p className="text-gray-600">
            Rav founded Kura Architects to return to a more meaningful kind of architecture — one that puts people first. Having built his own home and acted as a small-scale developer, he brings first-hand insight into the process of delivering homes from every angle: architectural, technical and financial.
          </p>
          <p className="text-gray-600">
            Pragmatic, reliable and quietly assured, Rav is known for his ability to balance strong design thinking with practical delivery. His approach is grounded, client-focused, and shaped by years of navigating both the drawing board and the building site.
          </p>
        </motion.div>
      </div>
    </section>
  )
}