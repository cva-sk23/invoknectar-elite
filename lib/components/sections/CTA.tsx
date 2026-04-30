'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/lib/components/ui/Button'
import { ScrollReveal } from '@/lib/components/animation'

export function CTASection() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="container-max">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900 to-dark-800 dark:from-black dark:to-dark-900" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,#d4941a,transparent)]" />

            {/* Content */}
            <div className="relative px-8 py-16 md:px-12 md:py-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading enterprises using Invok Nectar to power their growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Get Started Free <ArrowRight size={20} />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
