import { ScrollReveal } from '@/lib/components/animation'

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-max text-center">
          <ScrollReveal>
            <h1 className="text-5xl font-black mb-4">Blog & Insights</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stories, insights, and updates from our team
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
