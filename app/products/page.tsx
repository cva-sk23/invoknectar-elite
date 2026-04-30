'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/lib/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/Card'
import { ScrollReveal } from '@/lib/components/animation'

const productList = [
  {
    id: 'goresolve',
    title: 'GOresolve',
    description: 'Smart debt resolution for consumers',
    link: '/products/goresolve',
  },
  {
    id: 'pursuerai',
    title: 'PursuerAI',
    description: 'AI collections CRM for agencies',
    link: '/products/pursuerai',
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
        <div className="container-max">
          <ScrollReveal>
            <Link href="/" className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-400 mb-8">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </ScrollReveal>

          <ScrollReveal className="max-w-3xl">
            <h1 className="text-5xl font-black mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore our suite of enterprise solutions
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {productList.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 0.2}>
                <Link href={product.link}>
                  <Card hover>
                    <CardHeader>
                      <CardTitle>{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>
                      <Button variant="ghost" className="group">
                        Learn More →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
