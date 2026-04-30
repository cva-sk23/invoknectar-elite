'use client'

import { Code2, Zap, Shield, BarChart3, Lock, Globe } from 'lucide-react'
import { ScrollReveal } from '@/lib/components/animation'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second load times with global CDN. Optimized for performance at every level.',
  },
  {
    icon: Shield,
    title: 'Enterprise Secure',
    description: 'Bank-grade security with compliance built-in. Your data is protected.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Infrastructure ready for millions of users. Built for growth.',
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description: 'Clean APIs and comprehensive documentation. Easy to integrate and extend.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time insights and custom reporting. Data-driven decision making.',
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    description: 'GDPR, CCPA, and industry standards. Audit-ready compliance.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Why Choose Invok Nectar</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built on cutting-edge technology with enterprise-grade features
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              delay={index * 0.1}
              className="bg-white dark:bg-dark-900 rounded-xl p-8 border border-gray-200 dark:border-dark-700 hover:shadow-lg hover:border-gold-300/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-300/10 mb-6">
                <feature.icon className="text-gold-300" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
