'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Footer from '@/components/Footer'

// Note: This would normally be exported from a separate metadata file in production
// export const metadata: Metadata = {
//   title: 'Contact Us - Get Free Quote | RAMA G DECOR',
//   description: 'Contact RAMA G DECOR for free consultation and quotes. Call +91 93140 63923 or visit our showroom. Professional home decor solutions with expert installation.',
//   keywords: ['contact rama g decor', 'free quote', 'home decor consultation', 'showroom location'],
// }

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Here you would typically send the form data to your backend or email service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Our Showroom',
      details: 'Shop No. 5, M-10, 6D Engineers Colony, Manyawas, Mohru Nagar, Mansarovar, Jaipur, Rajasthan',
      action: 'Get Directions'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us Today',
      details: '+91 93140 63923',
      action: 'Call Now'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.434 3.488"/>
        </svg>
      ),
      title: 'WhatsApp Us',
      details: '+91 93140 63923',
      action: 'Chat Now'
    }
  ]

  const services = [
    'SPC Flooring',
    'uPVC Windows',
    'Fluted Wall Panels',
    'PVC Doors',
    'PVC Ceiling',
    'Complete Home Renovation',
    'Other'
  ]

  return (
    <main className="bg-surface-primary">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-surface-secondary/30 to-surface-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-apple-blue-500/5 to-accent-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-secondary-gold/5 to-accent-orange/5 rounded-full blur-3xl"></div>
        </div>

        <div className="content-max-width px-6 sm:px-8 lg:px-12 relative z-10 text-center">
          <div className="animate-fade-in">
            <p className="text-caption text-apple-blue-600 font-semibold mb-4 tracking-wide">GET IN TOUCH</p>
            <h1 className="text-display-large text-text-primary mb-6 max-w-4xl mx-auto">
              Contact <span className="bg-gradient-to-r from-secondary-gold to-accent-orange bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-body text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Get in touch for a free consultation and personalized quote for your home transformation. 
              Our experts are ready to help you create the perfect space.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-surface-primary">
        <div className="content-max-width px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="space-y-6 mb-12">
                <div className="w-12 h-1 bg-gradient-to-r from-secondary-gold to-accent-orange rounded-full"></div>
                <h2 className="text-display text-text-primary">
                  Get Your Free Quote
                </h2>
                <p className="text-body text-text-secondary leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours with a personalized quote.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-8 p-6 bg-accent-green/10 border border-accent-green/20 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-body text-accent-green font-medium">Thank you! We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-body text-red-600 font-medium">Something went wrong. Please try again.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-footnote font-semibold text-text-primary uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-surface-secondary/50 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-blue-500 focus:border-apple-blue-500 transition-all text-text-primary placeholder-text-tertiary"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-footnote font-semibold text-text-primary uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-surface-secondary/50 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-blue-500 focus:border-apple-blue-500 transition-all text-text-primary placeholder-text-tertiary"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-footnote font-semibold text-text-primary uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-surface-secondary/50 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-blue-500 focus:border-apple-blue-500 transition-all text-text-primary placeholder-text-tertiary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="service" className="text-footnote font-semibold text-text-primary uppercase tracking-wide">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-surface-secondary/50 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-blue-500 focus:border-apple-blue-500 transition-all text-text-primary"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-footnote font-semibold text-text-primary uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-4 bg-surface-secondary/50 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-blue-500 focus:border-apple-blue-500 transition-all resize-none text-text-primary placeholder-text-tertiary"
                    placeholder="Tell us about your project requirements, preferred timeline, and any specific questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary hover-lift w-full sm:w-auto group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6 mb-12">
                <div className="w-12 h-1 bg-gradient-to-r from-apple-blue-500 to-accent-purple rounded-full"></div>
                <h2 className="text-display text-text-primary">
                  Get In Touch
                </h2>
                <p className="text-body text-text-secondary leading-relaxed">
                  Visit our showroom, give us a call, or send us a message. We're here to help bring your vision to life.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card-elevated p-8 bg-surface-primary hover-lift transition-all duration-300 group">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-apple-blue-500 to-accent-purple rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-title text-text-primary group-hover:text-apple-blue-600 transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-body text-text-secondary leading-relaxed">
                          {info.details}
                        </p>
                        <button className="inline-flex items-center text-footnote font-semibold text-apple-blue-600 hover:text-apple-blue-700 transition-colors group/btn">
                          {info.action}
                          <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-12 card-elevated p-8 bg-gradient-to-br from-surface-primary via-surface-secondary/30 to-surface-primary">
                <h3 className="text-title text-text-primary mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-body text-text-secondary">Monday - Saturday</span>
                    <span className="text-footnote font-semibold text-text-primary">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body text-text-secondary">Sunday</span>
                    <span className="text-footnote font-semibold text-text-primary">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="pt-4 border-t border-apple-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                      <span className="text-footnote text-accent-green font-medium">Currently Open</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
