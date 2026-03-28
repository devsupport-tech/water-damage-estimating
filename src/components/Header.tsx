import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Clock, Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false)

  const popularAreas = [
    { name: 'Houston', slug: 'houston' },
    { name: 'Katy', slug: 'katy' },
    { name: 'Sugar Land', slug: 'sugar-land' },
    { name: 'The Woodlands', slug: 'the-woodlands' },
    { name: 'Pearland', slug: 'pearland' },
    { name: 'Cypress', slug: 'cypress' },
  ]

  return (
    <header className="bg-primary-900 text-white">
      {/* Top Bar */}
      <div className="py-3 border-b border-primary-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="text-primary-200 text-sm hidden md:block">A CBRS Group Company</span>
            <a href="tel:8326080535" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <Phone size={18} />
              <span className="font-semibold">(832) 608-0535</span>
            </a>
            <span className="hidden sm:flex items-center gap-2 text-primary-200">
              <Clock size={18} />
              <span>24/7 Emergency Response</span>
            </span>
          </div>
          <Link
            to="/#get-estimate"
            className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Water Damage Estimating
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-primary-200 transition-colors">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setAreasDropdownOpen(true)}
              onMouseLeave={() => setAreasDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-primary-200 transition-colors">
                Service Areas <ChevronDown size={16} />
              </button>
              {areasDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-48 z-50">
                  {popularAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/locations/${area.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-900"
                    >
                      {area.name}
                    </Link>
                  ))}
                  <hr className="my-2" />
                  <Link
                    to="/service-areas"
                    className="block px-4 py-2 text-accent font-semibold hover:bg-primary-50"
                  >
                    View All Areas
                  </Link>
                </div>
              )}
            </div>
            <Link to="/#how-it-works" className="hover:text-primary-200 transition-colors">
              How It Works
            </Link>
            <a href="tel:8326080535" className="hover:text-primary-200 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 px-4 pb-4 space-y-4">
            <Link
              to="/"
              className="block py-2 hover:text-primary-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/service-areas"
              className="block py-2 hover:text-primary-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service Areas
            </Link>
            <Link
              to="/#how-it-works"
              className="block py-2 hover:text-primary-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <a
              href="tel:8326080535"
              className="block py-2 hover:text-primary-200"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
