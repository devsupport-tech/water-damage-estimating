import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, CheckCircle, AlertTriangle, FileText, Users, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: "Why do I need an independent estimate?",
      a: "Insurance companies often use their own adjusters who may undervalue your claim. An independent Xactimate estimate ensures you receive fair compensation based on actual repair costs in the Houston market."
    },
    {
      q: "What is an Xactimate estimate?",
      a: "Xactimate is the industry-standard software used by insurance companies to calculate repair costs. Having your own Xactimate estimate levels the playing field with your insurance company."
    },
    {
      q: "How quickly can I get an estimate?",
      a: "We typically complete estimates within 24-48 hours of our inspection. Emergency situations can be prioritized for same-day turnaround."
    },
    {
      q: "Do you work with my insurance company?",
      a: "Yes! We provide detailed documentation that meets insurance requirements and can help you navigate the claims process to maximize your settlement."
    },
    {
      q: "What areas do you serve?",
      a: "We serve Houston and all surrounding areas including Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, and more. Check our Service Areas page for a complete list."
    }
  ]

  const serviceAreas = [
    { name: 'Houston', slug: 'houston' },
    { name: 'Katy', slug: 'katy' },
    { name: 'Sugar Land', slug: 'sugar-land' },
    { name: 'The Woodlands', slug: 'the-woodlands' },
    { name: 'Pearland', slug: 'pearland' },
    { name: 'Cypress', slug: 'cypress' },
    { name: 'Spring', slug: 'spring' },
    { name: 'League City', slug: 'league-city' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-700/50 px-4 py-2 rounded-full mb-6">
              <MapPin size={18} />
              <span>Serving Houston &amp; Surrounding Areas</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Water Damage?<br />
              <span className="text-primary-300">Get a Fair Estimate.</span>
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Don't let insurance companies lowball your claim. Our independent Xactimate estimates
              ensure you get the compensation you deserve for water damage repairs.
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
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Quick Links */}
      <section className="py-8 bg-primary-50 border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-600 font-medium">Serving:</span>
            {serviceAreas.map((area, i) => (
              <span key={area.slug}>
                <Link
                  to={`/locations/${area.slug}`}
                  className="text-primary-700 hover:text-accent font-medium"
                >
                  {area.name}
                </Link>
                {i < serviceAreas.length - 1 && <span className="text-gray-400 ml-3">|</span>}
              </span>
            ))}
            <Link
              to="/service-areas"
              className="text-accent font-semibold hover:underline ml-2"
            >
              + More Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-red-600 mb-4">
                <AlertTriangle size={24} />
                <span className="font-semibold">The Problem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Insurance Companies Don't Have Your Best Interest in Mind
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                When water damages your home, you expect your insurance to cover the repairs fairly.
                Unfortunately, many Houston homeowners discover that insurance adjusters often:
              </p>
              <ul className="space-y-4">
                {[
                  "Underestimate the extent of water damage",
                  "Use outdated pricing that doesn't reflect Houston costs",
                  "Miss hidden damage behind walls and under floors",
                  "Pressure you to accept a quick, low settlement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">&#10005;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="inline-flex items-center gap-2 text-accent mb-4">
                <CheckCircle size={24} />
                <span className="font-semibold">The Solution</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Level the Playing Field with an Independent Estimate
              </h3>
              <p className="text-gray-600 mb-6">
                Our certified estimators use the same Xactimate software as insurance companies,
                but we work for YOU—not them.
              </p>
              <ul className="space-y-4">
                {[
                  "Detailed room-by-room damage assessment",
                  "Current Houston-area pricing for materials & labor",
                  "Documentation of hidden water damage",
                  "Professional report to negotiate with insurance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How We Help Houston Homeowners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From detailed estimates to trusted contractor connections, we're here to make your
              water damage recovery as smooth as possible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-50 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <FileText className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Xactimate Estimates
              </h3>
              <p className="text-gray-600 mb-6">
                Get a professional, insurance-ready estimate that documents every aspect of your
                water damage. Our estimates are created using the same software insurance companies
                use, ensuring your claim is taken seriously.
              </p>
              <ul className="space-y-3">
                {[
                  "Detailed line-item breakdown",
                  "Current local pricing",
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
                Need repairs done right? We connect you with our vetted network of Houston-area
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

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Getting a fair estimate is simple—here's what to expect.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact Us", desc: "Fill out our form or call us. We'll discuss your situation and schedule an inspection." },
              { step: "2", title: "Inspection", desc: "Our estimator visits your property to document all water damage, including hidden issues." },
              { step: "3", title: "Get Your Estimate", desc: "Receive a detailed Xactimate estimate within 24-48 hours of inspection." },
              { step: "4", title: "Get Paid Fairly", desc: "Use your estimate to negotiate with insurance or get connected with trusted contractors." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="get-estimate" className="py-16 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Get Your Free Water Damage Estimate
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
                    <div className="font-semibold">Houston &amp; Surrounding Areas</div>
                    <div className="text-primary-300">Local expertise you can trust</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Houston Homeowners Trust Us
            </h2>
            <p className="text-lg text-gray-600">
              See what our clients have to say about their experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "After a pipe burst, my insurance offered $8,000. With the independent estimate, I settled for $23,000. Absolutely worth it!",
                name: "Maria G.",
                location: "Katy, TX"
              },
              {
                quote: "Fast, professional, and the estimate was incredibly detailed. The insurance company couldn't argue with the documentation.",
                name: "Robert T.",
                location: "Sugar Land, TX"
              },
              {
                quote: "They connected me with a great contractor and helped me understand the whole claims process. True professionals.",
                name: "Jennifer L.",
                location: "The Woodlands, TX"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <Link
                    to={`/locations/${testimonial.location.toLowerCase().replace(', tx', '').replace(/\s+/g, '-')}`}
                    className="text-gray-500 hover:text-accent"
                  >
                    {testimonial.location}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don't Let Insurance Shortchange You
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the fair settlement you deserve. Contact us today for your free water damage estimate.
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
  )
}
