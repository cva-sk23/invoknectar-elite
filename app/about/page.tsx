import { ScrollReveal } from '@/lib/components/animation'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h1 className="text-5xl font-black mb-4">About Invok Nectar</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                Building intelligent platforms for real-world impact.
              </p>
              
              <h2 className="text-3xl font-bold mt-8 mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We're transforming how businesses solve complex challenges through intelligent technology.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
