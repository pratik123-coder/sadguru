'use client'

import { motion } from 'framer-motion'
import { CountUpNumber } from './count-up-number'

export function WhyChooseUs() {
  return (
    <section className="bg-[#121855] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Why choose our Sadguru College of
              Nursing and Allied Medical Sciences?
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/90"
            >
              Choose Sadguru College of Nursing and Allied Medical Sciences for your paramedical education. We offer excellent teaching and hands-on training in partnership with Sadguru Hospital. Our strong connections with the healthcare industry open doors to great career opportunities. Start your journey toward a successful future in healthcare with us.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            <CountUpNumber 
              number={20} 
              title="Faculty Year of Experience" 
            />
            <CountUpNumber 
              number={10} 
              title="Our Placement Partner" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

