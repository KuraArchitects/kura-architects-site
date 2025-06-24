'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import content from './content'

export default function PrincipalDesigner() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto w-full"
      >
        <Image
          src={content.image}
          alt={content.imageAlt}
          width={1200}
          height={675}
          sizes="100vw"
          className="w-full h-auto object-contain rounded-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6 text-left mt-10"
      >
        <h1 className="text-3xl font-semibold text-center mb-2">{content.title}</h1>
        {content.paragraphs.map((t) => (
          <p key={t.slice(0, 20)} className="text-lg text-gray-600">
            {t}
          </p>
        ))}
        <h2 className="text-2xl font-semibold mt-8">{content.howHeading}</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600">
          {content.bullets.map((b) => (
            <li key={b.slice(0, 20)}>{b}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mt-8">{content.clientHeading}</h2>
        {content.closing.map((t) => (
          <p key={t.slice(0, 20)} className="text-lg text-gray-600">
            {t}
          </p>
        ))}
      </motion.div>
    </section>
  )
}