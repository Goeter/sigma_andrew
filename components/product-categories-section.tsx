import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const productCategories = [
  {
    title: "Hoses",
    description:
      "High-quality industrial hoses for various applications including hydraulic, pneumatic, and chemical transfer.",
    image: "/images/hoses-category.jpg",
    features: ["Flexible Design", "Chemical Resistant", "High Pressure Rating"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600",
  },
  {
    title: "Valves",
    description: "Reliable valves for flow control, pressure regulation, and system safety across multiple industries.",
    image: "/images/valves-category.jpg",
    features: ["Precision Control", "Durable Construction", "Wide Range"],
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600",
  },
  {
    title: "Pumps",
    description: "Efficient pumping solutions for water, chemicals, and other fluids with proven reliability.",
    image: "/images/pumps-category.jpg",
    features: ["Energy Efficient", "Low Maintenance", "High Performance"],
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-600",
  },
  {
    title: "Fittings & Accessories",
    description: "Complete range of fittings, connectors, and accessories to complement your industrial systems.",
    image: "/images/fittings-category.jpg",
    features: ["Precision Fit", "Corrosion Resistant", "Easy Installation"],
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-600",
  },
]

export function ProductCategoriesSection() {
  return (
    <section
      id="products"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/images/industrial-background.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Products</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive industrial solutions designed to meet your operational needs with unmatched quality and
            reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {productCategories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-primary/20"
            >
              <div className="relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}
                ></div>
                <img
                  src={category.image || `/placeholder.svg?height=240&width=400&query=${category.title.toLowerCase()}`}
                  alt={`${category.title} - Industrial equipment and solutions`}
                  className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className={`text-sm font-semibold ${category.iconColor}`}>{category.title}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed line-clamp-3">
                  {category.description}
                </p>

                <div className="space-y-3 mb-8">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group/feature">
                      <CheckCircle
                        className={`w-4 h-4 ${category.iconColor} mr-3 transition-transform group-hover/feature:scale-110`}
                      />
                      <span className="text-sm font-medium text-foreground group-hover/feature:text-primary transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group/btn border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 py-3 font-semibold bg-transparent"
                >
                  Explore {category.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                </Button>
              </CardContent>

              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Need a custom solution? Our experts are ready to help.</p>
          <Button size="lg" className="px-8 py-3 text-lg font-semibold">
            Contact Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
