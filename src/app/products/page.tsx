import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Products - Premium Home Decor Solutions | RAMA G DECOR',
  description: 'Explore our comprehensive range of premium products: SPC Flooring, uPVC Windows, Fluted Wall Panels, PVC Doors, Modular Kitchens & Window Sections. Authorized Polywood distributor.',
  keywords: ['spc flooring', 'upvc windows', 'fluted wall panels', 'pvc doors', 'modular kitchens', 'window sections', 'polywood products'],
}

const productCategories = [
  {
    id: 'spc-flooring',
    title: 'SPC Flooring',
    subtitle: 'Stone Plastic Composite Flooring',
    description: 'Premium waterproof flooring that combines the natural beauty of wood with the durability of stone. Perfect for any room in your home.',
    image: '/products/spc-flooring-hero.jpg',
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
    image: '/products/upvc-windows-hero.jpg',
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
    image: '/products/fluted-panels-hero.jpg',
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
    image: '/products/pvc-doors-hero.jpg',
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
    applications: ['Main Entrance', 'Interior Rooms', 'Bathrooms', 'Balconies', 'Commercial Spaces'],
    specifications: {
      thickness: '32mm, 35mm, 40mm',
      sizes: 'Standard & Custom Sizes',
      finish: 'Smooth, Wood Grain, Textured',
      hardware: 'SS 304 Hinges & Locks'
    }
  },
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    subtitle: 'Custom Kitchen Solutions',
    description: 'Beautifully designed modular kitchens that maximize space efficiency while providing premium functionality and style.',
    image: '/products/modular-kitchens-hero.jpg',
    features: [
      'Custom Design Solutions',
      'Space Optimization Techniques',
      'Premium Hardware & Fittings',
      'Easy Maintenance Surfaces',
      'Modular Flexibility',
      'Professional Installation',
      'Warranty on All Components',
      'After-Sales Service Support'
    ],
    applications: ['Apartments', 'Villas', 'Studio Apartments', 'Commercial Kitchens'],
    specifications: {
      materials: 'Marine Plywood, MDF, Particle Board',
      finish: 'Laminate, Acrylic, Membrane',
      hardware: 'Blum, Hettich, Hafele',
      warranty: '5-10 Years on Components'
    }
  },
  {
    id: 'window-sections',
    title: 'Window Sections',
    subtitle: 'Professional Window Profiles',
    description: 'High-quality window profiles and accessories designed for perfect window installations with superior performance.',
    image: '/products/window-sections-hero.jpg',
    features: [
      'Premium Quality Profiles',
      'Perfect Fit Guarantee',
      'Weather Sealed Design',
      'Professional Grade Materials',
      'Multiple Profile Options',
      'Corrosion Resistant',
      'Easy Installation Process',
      'Industry Standard Compliance'
    ],
    applications: ['New Construction', 'Renovation Projects', 'Commercial Buildings', 'Residential Complexes'],
    specifications: {
      profiles: '50mm, 60mm, 70mm Series',
      materials: 'uPVC, Aluminum, Composite',
      thickness: '2.5mm - 3.0mm',
      certification: 'ISI, BIS Approved'
    }
  }
]

export default function Products() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-navy via-primary-green to-primary-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Our <span className="text-secondary-gold">Products</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Discover our comprehensive range of premium home decor solutions, all backed by Polywood's quality guarantee
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productCategories.map((product, index) => (
            <div key={product.id} id={product.id} className={`mb-32 ${index === productCategories.length - 1 ? 'mb-0' : ''}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Product Image */}
                <div className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>

                {/* Product Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="text-4xl font-serif font-bold text-primary-navy mb-2">
                      {product.title}
                    </h2>
                    <p className="text-xl text-secondary-gold font-medium mb-4">
                      {product.subtitle}
                    </p>
                    <div className="w-20 h-1 bg-secondary-gold mb-6"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-secondary-gold rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-4">Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-navy/10 text-primary-navy text-sm rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-secondary-gold text-primary-navy font-semibold rounded-lg hover:bg-secondary-bronze transition-colors text-center"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-3 border-2 border-primary-navy text-primary-navy font-semibold rounded-lg hover:bg-primary-navy hover:text-white transition-colors text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-primary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get expert consultation and professional installation for all our premium products. 
            Contact us today for a free quote and personalized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-secondary-gold text-primary-navy font-semibold rounded-lg hover:bg-secondary-bronze transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
