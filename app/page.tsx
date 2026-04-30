import { HeroSection } from '@/lib/components/sections/Hero'
import { FeaturesSection } from '@/lib/components/sections/Features'
import { ProductsSection } from '@/lib/components/sections/Products'
import { StatsSection } from '@/lib/components/sections/Stats'
import { CTASection } from '@/lib/components/sections/CTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <StatsSection />
      <CTASection />
    </>
  )
}
