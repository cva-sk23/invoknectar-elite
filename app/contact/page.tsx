'use client'

import { useState } from 'react'
import { Button } from '@/lib/components/ui/Button'
import { ScrollReveal } from '@/lib/components/animation'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-max max-w-2xl">
          <ScrollReveal className="text-center mb-12">
            <h1 className="text-5xl font-black mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We'd love to hear from you. Let's discuss your needs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-800 rounded-xl p-8 border border-gray-200 dark:border-dark-700 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="input"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="input"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                  Thanks for reaching out! We'll be in touch soon.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
