import { Card, CardContent } from "@/components/ui/card"
import { Shield, Truck, Users, Settings } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "All products meet international standards with rigorous testing and certification processes.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Efficient logistics network ensuring timely delivery across Indonesia and Southeast Asia.",
  },
  {
    icon: Users,
    title: "Trusted Expertise",
    description: "Over 20 years of experience serving industrial clients with professional consultation.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored solutions designed to meet your specific industrial requirements and applications.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/industrial-facility.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-blue-900/90"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Why Choose PT. Alfa Berkat Sigma
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your trusted partner for reliable industrial solutions with proven track record.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/95 backdrop-blur border-white/20 hover:bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
