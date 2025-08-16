'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 'spc-flooring',
    title: 'SPC Flooring',
    description: 'Durable, waterproof, and stylish stone plastic composite flooring perfect for any room.',
    image: '/products/spc-flooring.jpg',
    features: ['100% Waterproof', 'Scratch Resistant', 'Easy Installation', '25-Year Warranty'],
    gradient: 'from-apple-blue-500 to-apple-blue-600'
  },
  {
    id: 'upvc-windows',
    title: 'uPVC Windows',
    description: 'Energy-efficient, low-maintenance windows that enhance your home\'s comfort and security.',
    image: '/products/upvc-windows.jpg',
    features: ['Energy Efficient', 'Sound Proof', 'Weather Resistant', 'Low Maintenance'],
    gradient: 'from-secondary-gold to-accent-orange'
  },
  {
    id: 'fluted-panels',
    title: 'Fluted Wall Panels',
    description: 'Modern textured wall panels that add depth and sophistication to any interior.',
    image: '/products/fluted-panels.jpg',
    features: ['Modern Design', 'Easy Installation', 'Variety of Colors', 'Eco-Friendly'],
    gradient: 'from-accent-purple to-accent-purple'
  },
  {
    id: 'pvc-doors',
    title: 'PVC Doors',
    description: 'Strong, beautiful, and maintenance-free doors for interior and exterior applications.',
    image: '/products/pvc-doors.jpg',
    features: ['Termite Proof', 'Water Resistant', 'Variety of Designs', 'Long Lasting'],
    gradient: 'from-accent-green to-accent-teal'
  },
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    description: 'Custom-designed modular kitchen solutions that maximize space and functionality.',
    image: '/products/modular-kitchens.jpg',
    features: ['Custom Design', 'Space Optimization', 'Premium Hardware', 'Easy Maintenance'],
    gradient: 'from-accent-orange to-accent-orange'
  },
  {
    id: 'window-sections',
    title: 'Window Sections',
    description: 'High-quality window profiles and accessories for perfect window installations.',
    image: '/products/window-sections.jpg',
    features: ['Premium Quality', 'Perfect Fit', 'Weather Sealed', 'Professional Grade'],
    gradient: 'from-apple-blue-600 to-accent-purple'
  }
]

export default function Products() {
  return (
    <section className="py-24 bg-surface-secondary/30">
      <div className="content-max-width px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-caption text-apple-blue-600 font-semibold mb-3 tracking-wide uppercase">Our Products</h2>
          <h3 className="text-display-medium text-text-primary mb-6 max-w-4xl mx-auto text-balance">
            Premium Solutions for
            <span className="bg-gradient-to-r from-secondary-gold to-accent-orange bg-clip-text text-transparent"> Every Space</span>
          </h3>
          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            Discover our comprehensive range of premium home decor solutions, all backed by Polywood's 
            quality guarantee and our expert installation services.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="card-hover group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-apple-lg bg-surface-secondary">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>

              {/* Product Content */}
              <div className="p-6 bg-surface-primary">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-title text-text-primary group-hover:text-apple-blue-600 transition-colors duration-200">
                    {product.title}
                  </h4>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.gradient} flex-shrink-0 mt-1`}></div>
                </div>
                
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-footnote text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/products#${product.id}`}
                  className="btn-outline w-full text-center group/btn hover-lift"
                >
                  <span>Learn More</span>
                  <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="card-elevated p-12 bg-gradient-to-br from-surface-primary via-surface-secondary/50 to-surface-primary">
            <h4 className="text-title-large text-text-primary mb-4">Ready to Transform Your Space?</h4>
            <p className="text-body text-text-secondary mb-8 max-w-2xl mx-auto">
              Get expert consultation and professional installation for all our premium products. 
              Let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary hover-lift"
              >
                Get Free Quote
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-outline hover-lift"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
