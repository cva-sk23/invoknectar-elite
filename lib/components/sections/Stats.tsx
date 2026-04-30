'use client'

import { AnimatedCounter, ScrollReveal } from '@/lib/components/animation'

const stats = [
  { value: 100, label: 'K+ Users', suffix: 'K+' },
  { value: 500, label: 'Business Clients', suffix: '+' },
  { value: 500, label: '₹ Crore Processed', prefix: '₹' },
  { value: 99.9, label: 'Uptime SLA', suffix: '%' },
]

export function StatsSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-dark-900 to-dark-800 text-white">
      <div className="container-max">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Trusted by Enterprises</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Millions of transactions and growing
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              delay={index * 0.1}
              className="bg-dark-700/50 rounded-xl p-8 border border-dark-600 text-center hover:border-gold-300/50 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-black text-gold-300 mb-3">
                <AnimatedCounter
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
