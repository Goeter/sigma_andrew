import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/placeholder-9tkz8.png",
  },
  {
    title: "Healthcare Management System",
    category: "Software Development",
    image: "/healthcare-management-dashboard.png",
  },
  {
    title: "Financial Analytics Dashboard",
    category: "Data Visualization",
    image: "/financial-analytics-dashboard.png",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "/mobile-banking-app.png",
  },
  {
    title: "Cloud Infrastructure Migration",
    category: "Cloud Solutions",
    image: "/cloud-infrastructure-diagram.png",
  },
  {
    title: "AI-Powered CRM",
    category: "AI Integration",
    image: "/placeholder-trm8m.png",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Showcasing successful projects that demonstrate our expertise and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
