"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "Sigma transformed our entire digital infrastructure. Their expertise in cloud solutions helped us scale efficiently while reducing costs by 40%. Exceptional service and support.",
    rating: 5,
    avatar: "/professional-woman-ceo.png",
  },
  {
    name: "Michael Chen",
    company: "Global Finance Corp",
    role: "CTO",
    content:
      "The custom software development team at Sigma delivered beyond our expectations. The solution they built has streamlined our operations and improved our customer satisfaction significantly.",
    rating: 5,
    avatar: "/professional-cto-headshot.png",
  },
  {
    name: "Emily Rodriguez",
    company: "Healthcare Plus",
    role: "Operations Director",
    content:
      "Working with Sigma on our digital transformation was a game-changer. Their IT consulting services provided clear roadmaps and actionable strategies that delivered real results.",
    rating: 5,
    avatar: "/professional-woman-director.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-card border-border/50 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-card-foreground text-center mb-8 leading-relaxed text-balance">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <div className="font-bold text-card-foreground text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-background/80 backdrop-blur border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-background/80 backdrop-blur border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
