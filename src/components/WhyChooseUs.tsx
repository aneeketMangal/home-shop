const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Premium Quality',
    description: 'Authorized Polywood distributor ensuring authentic, high-quality products for your home.',
    gradient: 'from-accent-green to-accent-teal'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Professional Installation',
    description: 'Expert installation services by certified professionals for perfect results every time.',
    gradient: 'from-apple-blue-500 to-apple-blue-600'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Competitive Pricing',
    description: 'Best prices in the market without compromising on quality or service standards.',
    gradient: 'from-secondary-gold to-accent-orange'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Warranty Protection',
    description: 'Comprehensive warranty coverage on all products and installation services.',
    gradient: 'from-accent-purple to-accent-purple'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Quick Delivery',
    description: 'Fast and reliable delivery services to get your project started without delays.',
    gradient: 'from-accent-orange to-accent-orange'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z" />
      </svg>
    ),
    title: 'Custom Solutions',
    description: 'Tailored solutions designed to meet your specific requirements and preferences.',
    gradient: 'from-accent-teal to-accent-green'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-apple-blue-100/20 to-apple-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary-gold/10 to-accent-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative content-max-width px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-caption text-apple-blue-600 font-semibold mb-3 tracking-wide uppercase">Why Choose Us</h2>
          <h3 className="text-display-medium text-text-primary mb-6 max-w-4xl mx-auto text-balance">
            Excellence in Every
            <span className="bg-gradient-to-r from-secondary-gold to-accent-orange bg-clip-text text-transparent"> Detail</span>
          </h3>
          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            We combine premium products, expert craftsmanship, and exceptional service 
            to deliver home decor solutions that exceed your expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-hover p-8 text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-apple-lg flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 apple-elevation-2`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h4 className="text-title text-text-primary mb-3 group-hover:text-apple-blue-600 transition-colors duration-200">
                {feature.title}
              </h4>
              <p className="text-body text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '500+', label: 'Happy Customers' },
            { number: '1000+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '100%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-title-large font-semibold bg-gradient-to-r from-apple-blue-600 to-accent-purple bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-caption text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-elevated p-8 bg-gradient-to-br from-apple-blue-50 to-apple-blue-100/50 inline-block">
            <p className="text-body text-apple-blue-700 mb-4">Ready to get started?</p>
            <button className="btn-primary hover-lift">
              Contact Us Today
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
