import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-primary border-t border-apple-gray-200">
      {/* Main Footer */}
      <div className="content-max-width px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-title-large text-text-primary mb-3">
                RAMA G <span className="bg-gradient-to-r from-secondary-gold to-accent-orange bg-clip-text text-transparent">DECOR</span>
              </h3>
              <p className="text-body text-text-secondary max-w-md">
                Your one stop shop for all your home decor needs. Creating beautiful spaces with premium quality solutions.
              </p>
              <div className="flex items-center space-x-3 mt-4">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                <span className="text-footnote text-apple-blue-600 font-medium">Authorized Polywood Distributor</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-apple-blue-600 mt-0.5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-body text-text-secondary">
                  Shop No. 5, M-10, 6D Engineers Colony, Manyawas, Mohru Nagar, Mansarovar, Jaipur, Rajasthan
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-apple-blue-600 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+919314063923" className="text-body text-text-secondary hover:text-apple-blue-600 transition-colors">
                  +91 93140 63923
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-apple-blue-600 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="https://wa.me/+919314063923" className="text-body text-text-secondary hover:text-apple-blue-600 transition-colors">
                  +91 93140 63923
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-title text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/products' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body text-text-secondary hover:text-apple-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Contact */}
          <div>
            <h4 className="text-title text-text-primary mb-6">Our Products</h4>
            <ul className="space-y-4 mb-8">
              {[
                'SPC Flooring',
                'uPVC Windows',
                'Fluted Wall Panels',
                'PVC Doors',
                'Modular Kitchens',
                'Window Sections'
              ].map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="text-body text-text-secondary hover:text-apple-blue-600 transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Business Hours */}
            <div className="mb-8">
              <h5 className="text-footnote font-semibold text-text-primary mb-3 uppercase tracking-wide">Business Hours</h5>
              <div className="space-y-2">
                <div className="flex justify-between text-footnote text-text-secondary">
                  <span>Mon - Sat</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between text-footnote text-text-secondary">
                  <span>Sunday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-apple-gray-200">
        <div className="content-max-width px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-footnote text-text-tertiary">
              © {currentYear} RAMA G DECOR. All rights reserved.
            </div>
            <div className="flex space-x-8">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' },
                { name: 'Sitemap', href: '/sitemap' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-footnote text-text-tertiary hover:text-apple-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
