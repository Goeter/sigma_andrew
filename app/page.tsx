import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { ProductCategoriesSection } from "@/components/product-categories-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductCategoriesSection />
      <WhyChooseUsSection />
      <Footer />
    </main>
  )
}
