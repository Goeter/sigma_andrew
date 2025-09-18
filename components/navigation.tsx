"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Package, Phone } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
              <div className="text-white font-bold text-lg">Σ</div>
            </div>
            <div className="text-xl font-bold text-foreground">PT. Alfa Berkat Sigma</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                <Home className="h-4 w-4" />
                Home
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                <User className="h-4 w-4" />
                About
              </a>
              <a
                href="#products"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                <Package className="h-4 w-4" />
                Products
              </a>
              <a
                href="http://sigma.indonetwork.co.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                <Phone className="h-4 w-4" />
                Also Check Us at indonetwork
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a
                href="#home"
                className="flex items-center gap-2 block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                <Home className="h-4 w-4" />
                Home
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                <User className="h-4 w-4" />
                About
              </a>
              <a
                href="#products"
                className="flex items-center gap-2 block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                <Package className="h-4 w-4" />
                Products
              </a>
              <a
                href="http://sigma.indonetwork.co.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                <Phone className="h-4 w-4" />
                Also Check Us at indonetwork
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
