import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle, FileText, Users, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    damageType: '',
    message: ''
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Connect to backend/email service
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', phone: '', email: '', address: '', damageType: '', message: '' })
  }

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
      a: "We serve Houston and all surrounding areas including Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, and more."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary-900 text-white py-3">
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
          <a
            href="#get-estimate"
            className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Get Free Estimate
          </a>
        </div>
      </header>

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
                    <span className="text-red-500 mt-1">✕</span>
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
      <section className="py-16 bg-gray-50">
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
              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="text-accent mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    We've received your request and will contact you within 1 hour.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Your Estimate</h3>
                  <p className="text-gray-600 mb-4">Fill out the form and we'll be in touch shortly.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="(555) 555-5555"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Address *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="123 Main St, Houston, TX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type of Damage *</label>
                    <select
                      required
                      value={formData.damageType}
                      onChange={(e) => setFormData({...formData, damageType: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select damage type</option>
                      <option value="flood">Flood Damage</option>
                      <option value="pipe">Burst/Leaking Pipe</option>
                      <option value="roof">Roof Leak</option>
                      <option value="appliance">Appliance Leak</option>
                      <option value="sewage">Sewage Backup</option>
                      <option value="storm">Storm Damage</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us about the damage..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-dark text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Estimate'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
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
                  <div className="text-gray-500">{testimonial.location}</div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Water Damage Estimating</h3>
              <p className="mb-4">
                Professional Xactimate estimates for Houston homeowners.
                Get the fair insurance settlement you deserve.
              </p>
              <a href="https://cbrsgroup.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 font-semibold">
                A CBRS Group Company
              </a>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="tel:8326080535" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={18} /> (832) 608-0535
                </a>
                <a href="mailto:info@waterdamageestimating.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={18} /> info@waterdamageestimating.com
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={18} /> Houston, TX &amp; Surrounding Areas
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Service Areas</h3>
              <p>Houston, Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, Humble, Pasadena, Baytown, and surrounding areas.</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Follow CBRS Group</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61564870028363" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/cbrsgroup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@cbrs.group" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/@cbrsgroup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Water Damage Estimating. A CBRS Group Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
