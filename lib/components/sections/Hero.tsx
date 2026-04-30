'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/lib/components/ui/Button'
import { ScrollReveal } from '@/lib/components/animation'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
      </div>

      <div className="section-padding w-full">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-300/10 border border-gold-300/30">
                <Zap size={16} className="text-gold-300" />
                <span className="text-sm font-semibold text-gold-300">Enterprise-Grade Platform</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              Intelligent Platforms for{' '}
              <span className="text-gradient">Real World Impact</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Enterprise SaaS solutions for fintech, collections, and data intelligence. Built for scale, designed for tomorrow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" size="lg">
                Schedule Demo
              </Button>
            </motion.div>

            {/* Trust Text */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-500 dark:text-gray-500"
            >
              Trusted by leading enterprises and startups
            </motion.p>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border border-gray-200 dark:border-dark-700 overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-700">
                <div className="h-96 flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800 dark:from-black dark:to-dark-900">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-300/20 mb-4">
                      <Zap className="text-gold-300" size={32} />
                    </div>
                    <p className="text-white font-semibold">Dashboard Preview</p>
                    <p className="text-gray-400 text-sm mt-2">Your analytics at a glance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
