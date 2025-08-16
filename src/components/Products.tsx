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
    id: 'pvc-ceiling',
    title: 'PVC Ceiling',
    description: 'Elegant, moisture-resistant PVC ceiling panels perfect for bathrooms, kitchens, and living spaces.',
    image: '/products/pvc-ceiling.jpg',
    features: ['Moisture Resistant', 'Easy Installation', 'Elegant Finish', 'Cost Effective'],
    gradient: 'from-accent-orange to-accent-orange'
  }
]

export default function Products() {
  return (
    <section className="py-24 bg-gradient-to-b from-surface-secondary/30 to-surface-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-apple-blue-500/5 to-accent-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-secondary-gold/5 to-accent-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="content-max-width px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-caption text-apple-blue-600 font-semibold mb-4 tracking-wide">PREMIUM COLLECTION</p>
          <h2 className="text-display text-text-primary mb-6 max-w-4xl mx-auto">
            Transform Your Space with 
            <span className="bg-gradient-to-r from-secondary-gold to-accent-orange bg-clip-text text-transparent"> Premium Solutions</span>
          </h2>
          <p className="text-body text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium home decor solutions, all backed by Polywood's 
            quality guarantee and expert installation services.
          </p>
        </div>

        {/* Enhanced Products Grid - 3+2 Layout */}
        <div className="mb-20">
          {/* First Row - 3 Products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {products.slice(0, 3).map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-surface-primary rounded-2xl overflow-hidden card-elevated hover-lift transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10`}></div>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-surface-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <svg className="w-5 h-5 text-apple-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-title font-semibold text-text-primary group-hover:text-apple-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-footnote text-text-secondary leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-caption font-semibold text-text-tertiary tracking-wide">FEATURES</span>
                      <div className={`w-8 h-1 bg-gradient-to-r ${product.gradient} rounded-full`}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                          <span className="text-footnote text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <Link
                      href="/products"
                      className="inline-flex items-center text-footnote font-semibold text-apple-blue-600 hover:text-apple-blue-700 transition-colors group/link"
                    >
                      Learn More
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Products Centered */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
              {products.slice(3, 5).map((product, index) => (
                <div
                  key={product.id}
                  className="group relative bg-surface-primary rounded-2xl overflow-hidden card-elevated hover-lift transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 0.15}s` }}
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10`}></div>
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Floating icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-surface-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <svg className="w-5 h-5 text-apple-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6 space-y-4">
                    {/* Title and Description */}
                    <div className="space-y-3">
                      <h3 className="text-title font-semibold text-text-primary group-hover:text-apple-blue-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-footnote text-text-secondary leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-caption font-semibold text-text-tertiary tracking-wide">FEATURES</span>
                        <div className={`w-8 h-1 bg-gradient-to-r ${product.gradient} rounded-full`}></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                            <span className="text-footnote text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link
                        href="/products"
                        className="inline-flex items-center text-footnote font-semibold text-apple-blue-600 hover:text-apple-blue-700 transition-colors group/link"
                      >
                        Learn More
                        <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            {/* Background card */}
            <div className="card-elevated p-12 bg-gradient-to-br from-surface-primary via-surface-secondary/30 to-surface-primary relative overflow-hidden">
              {/* Background patterns */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-gold/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-apple-blue-500/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-title-large text-text-primary">Ready to Transform Your Space?</h4>
                  <p className="text-body text-text-secondary max-w-2xl mx-auto">
                    Get professional installation for all our premium products. 
                    Let's bring your vision to life with expert craftsmanship.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="btn-primary hover-lift group"
                  >
                    Get Free Quote
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <div className="flex items-center space-x-2 text-footnote text-text-secondary">
                    <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                    <span>Free consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
