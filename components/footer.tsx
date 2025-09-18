import { MessageCircle, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <div className="text-white font-bold text-xl">Σ</div>
              </div>
              <div className="text-2xl font-bold text-white">PT. Alfa Berkat Sigma</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading supplier of industrial equipment including hoses, valves, pumps, and fittings. Quality is our top
              priority with reliable solutions for your industrial needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200 group"
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 group"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                  Products
                </a>
              </li>
              <li>
                <a
                  href="http://sigma.indonetwork.co.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
                >
                  Also Check Us at indonetwork
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-300">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                  Industrial Hoses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                  Valves & Controls
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                  Industrial Pumps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                  Fittings & Accessories
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PT. Alfa Berkat Sigma. All rights reserved. Quality industrial solutions since establishment.
          </p>
        </div>
      </div>
    </footer>
  )
}
