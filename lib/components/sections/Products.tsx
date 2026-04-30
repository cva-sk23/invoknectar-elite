'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, CreditCard, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/Card'
import { Button } from '@/lib/components/ui/Button'
import { ScrollReveal } from '@/lib/components/animation'

const products = [
  {
    icon: CreditCard,
    name: 'GOresolve',
    status: 'Live',
    statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    description: "India's smart debt resolution platform for consumers",
    features: [
      'Digital settlement solutions',
      'Affordable resolutions',
      'CIBIL-safe process',
      'Transparent pricing',
    ],
    link: '/products/goresolve',
  },
  {
    icon: Zap,
    name: 'PursuerAI',
    status: 'Coming Soon',
    statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    description: 'AI-powered collections CRM for recovery agencies',
    features: [
      'Zero-activity case monitoring',
      'AI-powered automation',
      'Advanced recovery analytics',
      'Smart case assignment',
    ],
    link: '/products/pursuerai',
  },
]

export function ProductsSection() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="container-max">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade solutions solving real-world business challenges
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 0.2}>
              <Card hover className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-300/10">
                      <product.icon className="text-gold-300" size={24} />
                    </div>
                    <span className={`badge ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-700">
                  <Link href={product.link}>
                    <Button variant="ghost" className="w-full group justify-between">
                      Learn More
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
