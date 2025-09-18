import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-balance leading-relaxed">
            Let's discuss how our innovative IT solutions can accelerate your growth and drive digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-primary-foreground/10 rounded-lg mb-4">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-primary-foreground/80">hello@sigma.id</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-3 bg-primary-foreground/10 rounded-lg mb-4">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-primary-foreground/80">+62 21 1234 5678</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-3 bg-primary-foreground/10 rounded-lg mb-4">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-primary-foreground/80">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
