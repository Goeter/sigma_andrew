import { Card, CardContent } from "@/components/ui/card"
import { Factory, Droplets, Ship, Zap, Building2, Wrench } from "lucide-react"

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial equipment and automation solutions",
  },
  {
    icon: Droplets,
    title: "Oil & Gas",
    description: "Specialized equipment for petroleum operations",
  },
  {
    icon: Ship,
    title: "Marine",
    description: "Maritime and offshore industrial applications",
  },
  {
    icon: Zap,
    title: "Power Generation",
    description: "Energy sector equipment and components",
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Heavy machinery and construction equipment",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Industrial maintenance and repair services",
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across diverse industrial sectors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background border-border"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
