import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services - Professional Installation & Consultation | RAMA G DECOR',
  description: 'Expert installation services for SPC Flooring, uPVC Windows, Fluted Panels, PVC Doors & Modular Kitchens. From consultation to finishing - we handle it all.',
  keywords: ['installation services', 'home decor consultation', 'professional installation', 'flooring installation', 'kitchen installation'],
}

const services = [
  {
    icon: '🏠',
    title: 'Free Home Consultation',
    description: 'Our design experts visit your space to understand your requirements and provide personalized recommendations.',
    features: ['Space Analysis', 'Design Recommendations', 'Material Selection', 'Budget Planning']
  },
  {
    icon: '📐',
    title: 'Custom Design Solutions',
    description: 'Tailored design solutions that perfectly match your style, space constraints, and functional requirements.',
    features: ['3D Visualization', 'Material Samples', 'Color Coordination', 'Space Optimization']
  },
  {
    icon: '🔧',
    title: 'Professional Installation',
    description: 'Expert installation by certified professionals ensuring perfect results and long-lasting performance.',
    features: ['Skilled Technicians', 'Quality Tools', 'Clean Installation', 'Post-Install Cleanup']
  },
  {
    icon: '🛠️',
    title: 'Project Management',
    description: 'Complete project coordination from start to finish, ensuring timely delivery and quality execution.',
    features: ['Timeline Management', 'Quality Control', 'Progress Updates', 'Coordination']
  },
  {
    icon: '🔍',
    title: 'Quality Assurance',
    description: 'Rigorous quality checks at every stage to ensure the highest standards of workmanship.',
    features: ['Pre-Install Inspection', 'Installation Monitoring', 'Final Quality Check', 'Customer Approval']
  },
  {
    icon: '🎯',
    title: 'After-Sales Support',
    description: 'Comprehensive warranty support and maintenance services to keep your investment protected.',
    features: ['Warranty Coverage', 'Maintenance Tips', '24/7 Support', 'Regular Checkups']
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Free consultation to understand your needs, preferences, and budget requirements.',
    details: ['Site Visit', 'Requirement Analysis', 'Design Discussion', 'Initial Quote']
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Detailed design planning with 3D visualization and material selection.',
    details: ['3D Design', 'Material Selection', 'Color Schemes', 'Final Approval']
  },
  {
    step: '03',
    title: 'Professional Installation',
    description: 'Expert installation by certified professionals with quality assurance.',
    details: ['Site Preparation', 'Professional Installation', 'Quality Checks', 'Clean Up']
  },
  {
    step: '04',
    title: 'Final Handover',
    description: 'Complete project handover with warranty documentation and maintenance guidelines.',
    details: ['Final Inspection', 'Documentation', 'Warranty Activation', 'Maintenance Guide']
  }
]

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-navy via-primary-green to-primary-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Our <span className="text-secondary-gold">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            From consultation to installation, we provide end-to-end solutions for all your home decor needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-navy mb-4">
              What We <span className="text-secondary-gold">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to make your home transformation journey smooth and hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-4 group-hover:text-secondary-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-secondary-gold rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-navy mb-4">
              Our <span className="text-secondary-gold">Process</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process that ensures quality results and customer satisfaction at every step
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-gold text-primary-navy font-bold text-xl rounded-full mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-navy mb-2">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-secondary-gold rounded-full mr-2 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connector Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 z-10">
                      <svg className="w-8 h-8 text-secondary-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-navy mb-4">
              Professional <span className="text-secondary-gold">Installation</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified technicians ensure flawless installation with attention to every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'SPC Flooring Installation',
                image: '/services/flooring-install.jpg',
                description: 'Precision installation ensuring perfect alignment and durability'
              },
              {
                title: 'Window Installation',
                image: '/services/window-install.jpg',
                description: 'Weather-sealed installation for optimal performance'
              },
              {
                title: 'Kitchen Installation',
                image: '/services/kitchen-install.jpg',
                description: 'Complete modular kitchen setup with perfect finishing'
              },
              {
                title: 'Wall Panel Installation',
                image: '/services/panel-install.jpg',
                description: 'Precise alignment for stunning wall transformations'
              },
              {
                title: 'Door Installation',
                image: '/services/door-install.jpg',
                description: 'Perfect fit and finish for all door installations'
              },
              {
                title: 'Quality Assurance',
                image: '/services/quality-check.jpg',
                description: 'Rigorous quality checks at every installation stage'
              }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-primary-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-primary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact us today for a free consultation and let our experts help you transform your space with premium quality products and professional installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-secondary-gold text-primary-navy font-semibold rounded-lg hover:bg-secondary-bronze transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-navy transition-colors"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
