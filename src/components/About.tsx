import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 bg-surface-primary">
      <div className="content-max-width px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-caption text-apple-blue-600 font-semibold mb-3 tracking-wide uppercase">About Rama G Decor</h2>
          <h3 className="text-display-medium text-text-primary mb-6 max-w-4xl mx-auto text-balance">
            Creating Beautiful Spaces with 
            <span className="bg-gradient-to-r from-secondary-gold to-accent-orange bg-clip-text text-transparent"> Premium Quality</span>
          </h3>
          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            For over a decade, we've been transforming homes across India with our premium home decor solutions. 
            As an authorized Polywood distributor, we bring you the finest quality products with expert installation.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-title-large text-text-primary">Our Story</h4>
              <p className="text-body text-text-secondary">
                Founded with a vision to make premium home decor accessible to everyone, Rama G Decor has grown 
                from a small local business to a trusted name in the industry. Our journey began with a simple 
                belief: every home deserves to be beautiful.
              </p>
              <p className="text-body text-text-secondary">
                Today, we're proud to be an authorized distributor of Polywood products, offering everything from 
                SPC flooring to modular kitchens, all backed by our commitment to quality and service excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '500+', label: 'Happy Customers' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-title-large font-semibold text-apple-blue-600 mb-1">{stat.number}</div>
                  <div className="text-caption text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="card-elevated overflow-hidden aspect-[4/3]">
              <Image
                src="/about-showcase.jpg"
                alt="Rama G Decor showroom"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 card bg-apple-blue-600 text-white p-6 max-w-48">
              <div className="text-footnote font-semibold mb-1">Authorized Distributor</div>
              <div className="text-caption opacity-90">Polywood Products</div>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Quality Guaranteed',
              description: 'Only premium materials and products that meet our strict quality standards.'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: 'Expert Installation',
              description: 'Professional installation team with years of experience in home decor.'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Timely Delivery',
              description: 'On-time project completion with transparent timelines and progress updates.'
            }
          ].map((value, index) => (
            <div key={value.title} className="card-hover p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-apple-blue-50 to-apple-blue-100 rounded-apple-lg flex items-center justify-center text-apple-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-title text-text-primary mb-3">{value.title}</h4>
              <p className="text-body text-text-secondary">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-20 text-center">
          <div className="card-elevated p-12 bg-gradient-to-br from-surface-primary to-surface-secondary">
            <h4 className="text-title-large text-text-primary mb-4">Ready to Transform Your Space?</h4>
            <p className="text-body text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a customized solution that fits your style and budget.
            </p>
            <button className="btn-primary hover-lift">
              Schedule Consultation
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
