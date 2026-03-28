import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

interface LeadFormProps {
  location?: string
}

export default function LeadForm({ location }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    damageType: '',
    message: ''
  })
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

  if (submitSuccess) {
    return (
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
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Your Estimate</h3>
      <p className="text-gray-600 mb-4">
        {location
          ? `Get a free water damage estimate for your ${location} property.`
          : 'Fill out the form and we\'ll be in touch shortly.'}
      </p>

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
          placeholder={location ? `123 Main St, ${location}, TX` : "123 Main St, Houston, TX"}
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
  )
}
