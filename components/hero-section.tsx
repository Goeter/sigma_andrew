import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/industrial-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/85 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight mb-6">
            <span className="text-foreground">Empowering Your Industry</span>
            <br />
            <span className="text-primary">with Reliable Solutions</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
            We provide high-quality hoses, valves, pumps, and fittings to support your industrial operations with
            trusted expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg group bg-background/80 backdrop-blur"
            >
              <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-secondary/15 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  )
}
