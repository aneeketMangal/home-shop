import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Products - Premium Home Decor Solutions | RAMA G DECOR',
  description: 'Explore our comprehensive range of premium products: SPC Flooring, uPVC Windows, Fluted Wall Panels, PVC Doors, and PVC Ceiling. Authorized Polywood distributor.',
  keywords: ['spc flooring', 'upvc windows', 'fluted wall panels', 'pvc doors', 'pvc ceiling', 'polywood products'],
}

const productCategories = [
  {
    id: 'spc-flooring',
    title: 'SPC Flooring',
    subtitle: 'Stone Plastic Composite Flooring',
    description: 'Premium waterproof flooring that combines the natural beauty of wood with the durability of stone. Perfect for any room in your home.',
    image: '/products/spc-flooring.jpg',
    gradient: 'from-apple-blue-500 to-apple-blue-600',
    features: [
      '100% Waterproof & Moisture Resistant',
      'Scratch & Stain Resistant Surface',
      'Easy Click Installation System',
      '25-Year Residential Warranty',
      'Pet & Child Friendly',
      'Superior Sound Absorption',
      'Eco-Friendly Materials',
      'Low Maintenance Requirements'
    ],
    applications: ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Commercial Spaces'],
    specifications: {
      thickness: '4mm - 8mm',
      wearLayer: '0.3mm - 0.7mm',
      dimensions: '1220x180mm, 1220x228mm',
      finish: 'Wood Grain, Stone, Abstract'
    }
  },
  {
    id: 'upvc-windows',
    title: 'uPVC Windows',
    subtitle: 'Energy Efficient Window Solutions',
    description: 'High-performance uPVC windows that provide excellent insulation, security, and aesthetic appeal while reducing energy costs.',
    image: '/products/upvc-windows.jpg',
    gradient: 'from-secondary-gold to-accent-orange',
    features: [
      'Superior Energy Efficiency',
      'Excellent Sound Insulation',
      'Weather Resistant & Durable',
      'Low Maintenance Requirements',
      'Multi-Point Locking System',
      'UV Resistant Materials',
      'Customizable Designs',
      '10-Year Manufacturer Warranty'
    ],
    applications: ['Residential Buildings', 'Commercial Complexes', 'High-Rise Apartments', 'Villas'],
    specifications: {
      profiles: '60mm, 70mm, 80mm',
      glazing: 'Single, Double, Triple',
      hardware: 'European Standard',
      colors: 'White, Wood Finishes, Custom Colors'
    }
  },
  {
    id: 'fluted-panels',
    title: 'Fluted Wall Panels',
    subtitle: 'Modern Textured Wall Solutions',
    description: 'Contemporary fluted panels that add depth, texture, and sophistication to any interior space with easy installation.',
    image: '/products/fluted-panels.jpg',
    gradient: 'from-accent-purple to-accent-purple',
    features: [
      'Modern Architectural Design',
      'Easy Installation System',
      'Variety of Colors & Finishes',
      'Eco-Friendly Materials',
      'Fire Resistant Properties',
      'Acoustic Benefits',
      'Durable & Long Lasting',
      'Low Maintenance Required'
    ],
    applications: ['Feature Walls', 'Reception Areas', 'Bedrooms', 'Living Rooms', 'Commercial Interiors'],
    specifications: {
      dimensions: '2400x300mm, 2400x600mm',
      thickness: '18mm, 25mm',
      finish: 'Laminate, Veneer, Paint',
      mounting: 'Wall Mounted, Ceiling Hung'
    }
  },
  {
    id: 'pvc-doors',
    title: 'PVC Doors',
    subtitle: 'Durable & Stylish Door Solutions',
    description: 'High-quality PVC doors that offer excellent durability, security, and aesthetic appeal for interior and exterior applications.',
    image: '/products/pvc-doors.jpg',
    gradient: 'from-accent-green to-accent-teal',
    features: [
      'Termite & Moisture Proof',
      'Zero Maintenance Required',
      'Variety of Designs Available',
      'Strong & Durable Construction',
      'Easy to Clean Surface',
      'Cost-Effective Solution',
      'Fire Resistant Options',
      'Customizable Dimensions'
    ],
    applications: ['Interior Doors', 'Exterior Doors', 'Bathroom Doors', 'Commercial Entrances'],
    specifications: {
      thickness: '30mm, 35mm, 40mm',
      dimensions: 'Standard & Custom Sizes',
      finish: 'Smooth, Wood Grain, Designer',
      hardware: 'Premium Lock Systems'
    }
  },
  {
    id: 'pvc-ceiling',
    title: 'PVC Ceiling',
    subtitle: 'Elegant Moisture-Resistant Ceiling',
    description: 'Premium PVC ceiling panels that provide elegant finish while being completely moisture-resistant, perfect for bathrooms and kitchens.',
    image: '/products/pvc-ceiling.jpg',
    gradient: 'from-accent-orange to-accent-orange',
    features: [
      'Moisture Resistant Design',
      'Easy Installation Process',
      'Elegant Finish Options',
      'Cost Effective Solution',
      'Zero Maintenance Required',
      'Fire Resistant Properties',
      'Variety of Patterns',
      'Long Lasting Durability'
    ],
    applications: ['Bathrooms', 'Kitchens', 'Living Rooms', 'Commercial Spaces'],
    specifications: {
      thickness: '7mm, 8mm, 10mm',
      dimensions: '300mm x 5950mm',
      finish: 'Matt, Glossy, Textured',
      installation: 'Click & Lock System'
    }
  }
]

export default function Products() {
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
            <p className="text-caption text-apple-blue-600 font-semibold mb-4 tracking-wide">PREMIUM COLLECTION</p>
            <h1 className="text-display-large text-text-primary mb-6 max-w-4xl mx-auto">
              Our <span className="bg-gradient-to-r from-secondary-gold to-accent-orange bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-body text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium home decor solutions, all backed by Polywood's quality guarantee and expert installation services.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-surface-primary">
        <div className="content-max-width px-6 sm:px-8 lg:px-12">
          {productCategories.map((product, index) => (
            <div key={product.id} id={product.id} className={`mb-32 ${index === productCategories.length - 1 ? 'mb-0' : ''}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Product Image */}
                <div className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden card-elevated group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10`}></div>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>

                {/* Product Content */}
                <div className={`space-y-8 animate-fade-in ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`} style={{ animationDelay: '0.2s' }}>
                  {/* Header */}
                  <div className="space-y-4">
                    <div className={`w-12 h-1 bg-gradient-to-r ${product.gradient} rounded-full`}></div>
                    <h2 className="text-display text-text-primary">
                      {product.title}
                    </h2>
                    <p className="text-title text-apple-blue-600 font-medium">
                      {product.subtitle}
                    </p>
                    <p className="text-body text-text-secondary leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    <h3 className="text-title-large text-text-primary">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent-green rounded-full flex-shrink-0"></div>
                          <span className="text-footnote text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="space-y-4">
                    <h3 className="text-title-large text-text-primary">Applications</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-surface-secondary/50 text-text-secondary text-footnote rounded-full border border-apple-gray-200"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-4">
                    <h3 className="text-title-large text-text-primary">Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="space-y-2">
                          <span className="text-caption font-semibold text-text-tertiary uppercase tracking-wide">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <p className="text-footnote text-text-secondary">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href="/contact"
                      className="btn-primary hover-lift group"
                    >
                      Get Free Quote
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-outline hover-lift group"
                    >
                      Learn More
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-b from-surface-primary to-surface-secondary/30 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-apple-blue-500/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-secondary-gold/5 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="content-max-width px-6 sm:px-8 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-12 bg-gradient-to-br from-surface-primary via-surface-secondary/30 to-surface-primary relative overflow-hidden">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-display text-text-primary">Ready to Transform Your Space?</h2>
                  <p className="text-body text-text-secondary max-w-2xl mx-auto leading-relaxed">
                    Get expert consultation and professional installation for all our premium products. 
                    Contact us today for a free quote and personalized solution.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="btn-primary hover-lift group"
                  >
                    Get Free Consultation
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <div className="flex items-center space-x-2 text-footnote text-text-secondary">
                    <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                    <span>Free installation & 25-year warranty</span>
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
