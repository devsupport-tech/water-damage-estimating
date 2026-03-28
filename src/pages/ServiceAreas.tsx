import { Link } from 'react-router-dom'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import { locations } from '../data/locations'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServiceAreas() {
  // Group locations by type
  const cities = locations.filter(loc => !loc.slug.includes('county'))
  const counties = locations.filter(loc => loc.slug.includes('county'))

  // Group cities by county
  const harrisCities = cities.filter(loc =>
    loc.county.includes('Harris') && !loc.county.includes('Fort Bend') && !loc.county.includes('Montgomery')
  )
  const fortBendCities = cities.filter(loc => loc.county.includes('Fort Bend'))
  const montgomeryCities = cities.filter(loc => loc.county.includes('Montgomery'))
  const galvestonCities = cities.filter(loc => loc.county.includes('Galveston'))
  const brazoriaCities = cities.filter(loc => loc.county.includes('Brazoria'))

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-700/50 px-4 py-2 rounded-full mb-6">
            <MapPin size={18} />
            <span>Houston Metro Area</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Service Areas
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            We provide professional water damage estimates throughout the Greater Houston area,
            serving homeowners in over 25 cities and 5 counties.
          </p>
        </div>
      </section>

      {/* Service Areas by County */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Harris County */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Harris County</h2>
              <Link
                to="/locations/harris-county"
                className="text-sm text-accent hover:underline"
              >
                View County Page
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {harrisCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/${city.slug}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <MapPin size={18} className="text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900 group-hover:text-primary-700">
                      {city.name}
                    </span>
                    {city.neighborhoods && (
                      <p className="text-xs text-gray-500">
                        {city.neighborhoods.length} neighborhoods
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Fort Bend County */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Fort Bend County</h2>
              <Link
                to="/locations/fort-bend-county"
                className="text-sm text-accent hover:underline"
              >
                View County Page
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {fortBendCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/${city.slug}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <MapPin size={18} className="text-accent flex-shrink-0" />
                  <span className="font-medium text-gray-900 group-hover:text-primary-700">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Montgomery County */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Montgomery County</h2>
              <Link
                to="/locations/montgomery-county"
                className="text-sm text-accent hover:underline"
              >
                View County Page
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {montgomeryCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/${city.slug}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <MapPin size={18} className="text-accent flex-shrink-0" />
                  <span className="font-medium text-gray-900 group-hover:text-primary-700">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Galveston County */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Galveston County</h2>
              <Link
                to="/locations/galveston-county"
                className="text-sm text-accent hover:underline"
              >
                View County Page
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galvestonCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/${city.slug}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <MapPin size={18} className="text-accent flex-shrink-0" />
                  <span className="font-medium text-gray-900 group-hover:text-primary-700">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Brazoria County */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Brazoria County</h2>
              <Link
                to="/locations/brazoria-county"
                className="text-sm text-accent hover:underline"
              >
                View County Page
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {brazoriaCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/${city.slug}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <MapPin size={18} className="text-accent flex-shrink-0" />
                  <span className="font-medium text-gray-900 group-hover:text-primary-700">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Counties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Counties We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {counties.map((county) => (
              <Link
                key={county.slug}
                to={`/locations/${county.slug}`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <MapPin size={32} className="text-accent mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 group-hover:text-primary-700 mb-1">
                  {county.name}
                </h3>
                <p className="text-sm text-gray-500">Pop: {county.population}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don't See Your Area Listed?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We serve the entire Houston metro area. Contact us to confirm service in your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#get-estimate"
              className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Your Free Estimate <ArrowRight size={20} />
            </Link>
            <a
              href="tel:8326080535"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} /> (832) 608-0535
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
