import { Metadata } from 'next'
import Image from 'next/image'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us - RAMA G DECOR',
  description: 'Learn about RAMA G DECOR, your trusted authorized Polywood distributor offering premium home decor solutions with professional installation services.',
  keywords: ['about rama g decor', 'polywood distributor', 'home decor company', 'interior design'],
}

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-navy via-primary-green to-primary-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            About <span className="text-secondary-gold">RAMA G DECOR</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Your trusted partner in creating beautiful, functional, and lasting home environments
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-primary-navy mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded with a vision to transform homes across India, RAMA G DECOR has established 
                itself as a leading name in the home improvement industry. Our journey began with 
                a simple belief: every home deserves the finest quality products and expert craftsmanship.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As an authorized distributor of Polywood, we've built our reputation on delivering 
                exceptional products that combine innovation, durability, and aesthetic appeal. 
                Our commitment to excellence has earned us the trust of over 500 satisfied customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we continue to expand our reach while maintaining the personal touch and 
                attention to detail that sets us apart in the industry.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about/our-story.jpg"
                alt="RAMA G DECOR team and journey"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Polywood Partnership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-navy mb-4">
              Our Partnership with <span className="text-secondary-gold">Polywood</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-gold mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about/polywood-partnership.jpg"
                alt="Polywood partnership and quality products"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary-navy">
                Authorized Excellence
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                As an authorized distributor of Polywood, we bring you products that represent 
                the pinnacle of innovation in home improvement materials. Polywood's commitment 
                to quality, sustainability, and performance aligns perfectly with our values.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-navy">Genuine Products</h4>
                    <p className="text-gray-600">100% authentic Polywood products with official warranty</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-navy">Latest Technology</h4>
                    <p className="text-gray-600">Access to newest product innovations and improvements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-navy">Expert Support</h4>
                    <p className="text-gray-600">Certified training and ongoing technical support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-navy mb-4">
              Our <span className="text-secondary-gold">Values</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Quality First',
                description: 'We never compromise on quality, ensuring every product meets the highest standards.'
              },
              {
                icon: '🤝',
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.'
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We continuously seek new and better ways to enhance your home environment.'
              },
              {
                icon: '🌱',
                title: 'Sustainability',
                description: 'Committed to eco-friendly practices and sustainable home improvement solutions.'
              },
              {
                icon: '🏆',
                title: 'Excellence',
                description: 'Striving for perfection in every project, no matter how big or small.'
              },
              {
                icon: '🔧',
                title: 'Craftsmanship',
                description: 'Expert installation and attention to detail that ensures lasting results.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Meet Our <span className="text-secondary-gold">Team</span>
          </h2>
          <div className="w-20 h-1 bg-secondary-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/team/founder.jpg"
                  alt="Founder - RAMA G DECOR"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rama Gupta</h3>
              <p className="text-secondary-gold mb-2">Founder & CEO</p>
              <p className="text-gray-300 text-sm">15+ years in home improvement industry</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/team/operations.jpg"
                  alt="Operations Head - RAMA G DECOR"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suresh Kumar</h3>
              <p className="text-secondary-gold mb-2">Operations Head</p>
              <p className="text-gray-300 text-sm">Expert in project management & logistics</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/team/design.jpg"
                  alt="Design Head - RAMA G DECOR"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Priya Sharma</h3>
              <p className="text-secondary-gold mb-2">Design Consultant</p>
              <p className="text-gray-300 text-sm">Creative solutions & interior design expertise</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
