import { useParams, Link, Navigate } from 'react-router-dom'
import { MapPin, Phone, Clock, CheckCircle, AlertTriangle, ArrowRight, FileText, Users } from 'lucide-react'
import { getLocationBySlug, locations } from '../data/locations'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>()
  const location = slug ? getLocationBySlug(slug) : undefined

  if (!location) {
    return <Navigate to="/service-areas" replace />
  }

  // Get nearby location data for linking
  const nearbyLocations = location.nearbyAreas
    .map(name => locations.find(loc => loc.name === name || loc.slug === name.toLowerCase().replace(/\s+/g, '-')))
    .filter(Boolean)
    .slice(0, 4)

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{location.metaTitle}</title>
      <meta name="description" content={location.metaDescription} />

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary-700/50 px-4 py-2 rounded-full mb-6">
                <MapPin size={18} />
                <span>{location.name}, {location.county}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Water Damage Estimating<br />
                <span className="text-primary-300">in {location.name}</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Professional independent Xactimate estimates for {location.name} homeowners.
                Don't let insurance companies undervalue your water damage claim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#get-estimate"
                  className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  Get Your Free Estimate <ArrowRight size={20} />
                </a>
                <a
                  href="tel:8326080535"
                  className="border-2 border-white hover:bg-white hover:text-primary-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> (832) 608-0535
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About This Location */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Water Damage Services in {location.name}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {location.description}
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-semibold text-gray-900">{location.county}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Population:</span>
                      <p className="font-semibold text-gray-900">{location.population}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-red-50 border border-red-100 p-6 rounded-xl mb-6">
                  <div className="flex items-center gap-2 text-red-600 mb-4">
                    <AlertTriangle size={24} />
                    <h3 className="font-bold text-lg">Local Water Damage Risks</h3>
                  </div>
                  <ul className="space-y-3">
                    {location.waterDamageRisks.map((risk, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">!</span>
                        <span className="text-gray-700">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Water Damage Issues in {location.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.commonIssues.map((issue, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <CheckCircle className="text-accent mb-3" size={24} />
                  <p className="text-gray-700 font-medium">{issue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Our Services for {location.name} Homeowners
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We provide comprehensive water damage estimating services to help you get the fair
              insurance settlement you deserve.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Xactimate Estimates
                </h3>
                <p className="text-gray-600 mb-6">
                  Our certified estimators create detailed, insurance-ready estimates using the same
                  Xactimate software that insurance companies use. This ensures your claim is documented
                  properly and taken seriously.
                </p>
                <ul className="space-y-3">
                  {[
                    "Detailed line-item breakdown",
                    `Current ${location.name} area pricing`,
                    "Photo documentation",
                    "Fast 24-48 hour turnaround"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent/10 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Trusted Contractor Network
                </h3>
                <p className="text-gray-600 mb-6">
                  Need repairs done right? We connect you with our vetted network of {location.name}-area
                  restoration contractors who specialize in water damage repair and work with
                  insurance claims daily.
                </p>
                <ul className="space-y-3">
                  {[
                    "Licensed & insured contractors",
                    "Insurance claim experience",
                    "Quality workmanship guaranteed",
                    "Competitive pricing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="text-accent" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods (if available) */}
        {location.neighborhoods && location.neighborhoods.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Neighborhoods We Serve in {location.name}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {location.neighborhoods.map((neighborhood, i) => (
                  <span
                    key={i}
                    className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lead Form */}
        <section id="get-estimate" className="py-16 bg-primary-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Get Your Free {location.name} Water Damage Estimate
                </h2>
                <p className="text-xl text-primary-200 mb-8">
                  Don't wait—water damage gets worse over time. Contact us now for a professional
                  estimate that protects your interests.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center">
                      <Clock className="text-primary-300" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">24/7 Emergency Response</div>
                      <div className="text-primary-300">We're here when you need us</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center">
                      <FileText className="text-primary-300" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Fast Turnaround</div>
                      <div className="text-primary-300">Estimates in 24-48 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center">
                      <MapPin className="text-primary-300" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Local {location.name} Expertise</div>
                      <div className="text-primary-300">We know your area</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <LeadForm location={location.name} />
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        {nearbyLocations.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Also Serving Nearby Areas
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {nearbyLocations.map((nearby) => (
                  nearby && (
                    <Link
                      key={nearby.slug}
                      to={`/locations/${nearby.slug}`}
                      className="bg-gray-50 p-6 rounded-xl hover:bg-primary-50 transition-colors group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={18} className="text-accent" />
                        <h3 className="font-bold text-gray-900 group-hover:text-primary-700">
                          {nearby.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600">{nearby.county}</p>
                    </Link>
                  )
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                >
                  View All Service Areas <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-accent">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {location.name} Water Damage? We're Here to Help.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the fair insurance settlement you deserve. Contact us today for your free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#get-estimate"
                className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Get Your Free Estimate
              </a>
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
    </>
  )
}
