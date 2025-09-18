import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Palette, Users } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions built with modern technologies to meet your specific business requirements and scale with your growth.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description:
      "Strategic technology guidance to optimize your IT infrastructure, improve efficiency, and align technology with business objectives.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Seamless cloud migration and management services to enhance scalability, security, and cost-effectiveness of your operations.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive, engaging experiences while maintaining brand consistency and accessibility.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Comprehensive IT solutions designed to transform your business and drive sustainable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 bg-card"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
