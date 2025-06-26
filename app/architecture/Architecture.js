'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sections from './content'

export default function Architecture() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-12 space-y-16">
      {sections.map((sec) => (
        <div key={sec.heading} className="max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-full w-auto overflow-hidden shadow-md"
          >
            {sec.video ? (
              <video
                src={sec.video}
                className="w-full aspect-video object-cover"
                muted
                loop
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={sec.image}
                alt={sec.imageAlt}
                width={1920}
                height={1080}
                sizes="100vw"
                className="w-full aspect-video object-cover"
              />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-semibold text-center">{sec.heading}</h2>
            {sec.paragraphs.map((p) => (
              <p key={p.slice(0,20)} className="text-lg text-gray-600">{p}</p>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  )
}
