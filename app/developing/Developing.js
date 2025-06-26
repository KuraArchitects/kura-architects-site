'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Developing() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h1 className="text-3xl font-semibold text-center mb-2">Working with Developers</h1>
        <p className="text-lg text-gray-600 italic">
          “The development appraisal is not just a financial tool — it is a design brief. Done well, it sets the terms of success.”
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto w-full aspect-[16/8]"
      >
        <Image
          src="/images/developer1.jpg"
          alt="Development concept"
          fill
          sizes="100vw"
          className="object-cover rounded-lg shadow-md"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6"
      > 
        <p className="text-lg text-gray-600">
          At Kura Architects, we recognise that successful development relies on the alignment of design quality, buildability, and commercial viability.
        </p>
        <p className="text-lg text-gray-600"> 
          Our architectural approach is grounded in a deep understanding of how thoughtful design can unlock value — not only in financial terms, but through planning success, efficient delivery, and long-term adaptability.
        </p>
        <p className="text-lg text-gray-600">  
          We work alongside developers to ensure that design is not treated as a cost centre, but as a strategic tool for maximising return and minimising risk.
        </p>
        <p className="text-lg text-gray-600">  
          <strong>A Practice Built for Developer Collaboration</strong>
        </p>
        <p className="text-lg text-gray-600">  
          Our experience spans residential, mixed-use and commercial schemes — including inner-city sites, constrained plots and phased projects. In each case, we bring a disciplined approach to design that accounts for the pressures developers face.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto w-full aspect-[16/8]"
      >
        <Image
          src="/images/developer2.jpg"
          alt="Completed development"
          fill
          sizes="100vw"
          className="object-cover rounded-lg shadow-md"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <p className="text-lg text-gray-600">
          Our experience spans residential, mixed-use and commercial schemes — including inner-city sites, constrained plots and phased projects. In each case, we bring a disciplined approach to design that accounts for the pressures developers face:
        </p>
        <p className="text-lg text-gray-600">
          <strong>Development Appraisals and GDV Assumptions</strong> We understand how architectural choices influence revenue, net-to-gross efficiency, and perceived value. Our design responses are tested against commercial objectives from the outset.
        </p>
        <p className="text-lg text-gray-600">
          <strong>Planning Risk and Strategic Navigation</strong> We are familiar with the complexity of the UK planning system and work proactively with consultants and local authorities to shape outcomes that are realistic, defensible, and aligned with policy.
        </p>
        <p className="text-lg text-gray-600">
          <strong>Buildability and Delivery-Focused Detailing</strong> Our technical knowledge ensures that schemes move from concept to site without compromise. We design for real-world conditions, informed by contractor input and cost plans.
        </p>
        <p className="text-lg text-gray-600">
          <strong>Regulatory and Statutory Considerations</strong> From Building Regulations to Party Wall matters, rights of light and energy statements, we engage early with risk points to protect the development timeline and support due diligence.
        </p>
        <p className="text-lg text-gray-600">
          <strong>Programme and Procurement Awareness</strong> We understand the demands of lender timelines, drawdown conditions, and early-stage valuations. Our work is structured to support pre-apps, Stage 3/4 tendering, and staged approvals.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto w-full aspect-[16/8]"
      >
        <Image
          src="/images/developer3.jpg"
          alt="Completed development"
          fill
          sizes="100vw"
          className="object-cover rounded-lg shadow-md"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 1.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <p className="text-lg text-gray-600">
          We work with a broad spectrum of developer clients — from those exploring their first site acquisition to established organisations delivering complex urban infill or phased projects. What they share is an interest in thoughtful design that supports the viability, delivery and long-term performance of their assets.
          </p>
      </motion.div>
    </section>
  )
}
