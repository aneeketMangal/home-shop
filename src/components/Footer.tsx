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
                  123 Main Street, Business District, City - 400001
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-apple-blue-600 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+919876543210" className="text-body text-text-secondary hover:text-apple-blue-600 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-apple-blue-600 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@ramagdecor.com" className="text-body text-text-secondary hover:text-apple-blue-600 transition-colors">
                  info@ramagdecor.com
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
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Services', href: '/services' },
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
            <div>
              <h5 className="text-footnote font-semibold text-text-primary mb-4 uppercase tracking-wide">Follow Us</h5>
              <div className="flex space-x-3">
                {[
                  {
                    name: 'Facebook',
                    href: 'https://facebook.com/ramagdecor',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Instagram',
                    href: 'https://instagram.com/ramagdecor',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.735-3.016-1.804-.567-1.069-.435-2.379.325-3.298l.004-.005c.76-.918 1.901-1.436 3.042-1.378 1.14.058 2.197.674 2.817 1.644.62.97.699 2.178.21 3.219-.49 1.041-1.477 1.825-2.634 2.092-.386.089-.777.134-1.17.134-.29 0-.583-.029-.878-.087-.296-.058-.589-.145-.875-.26-.286-.116-.563-.263-.827-.44-.263-.176-.517-.382-.759-.615-.241-.233-.468-.492-.678-.773-.21-.281-.402-.584-.573-.903-.171-.32-.322-.656-.451-1.006-.129-.35-.236-.714-.32-1.087-.084-.373-.146-.756-.184-1.146-.038-.39-.053-.787-.044-1.186.009-.399.041-.8.096-1.198.055-.398.133-.791.233-1.176.1-.384.222-.76.364-1.124.142-.363.306-.715.491-1.048.185-.333.391-.648.617-.939.226-.291.473-.558.738-.795.265-.237.549-.442.849-.612.3-.17.617-.305.946-.401.329-.096.669-.153 1.015-.168.346-.015.697.003 1.042.054.345.051.683.134 1.008.248.325.114.636.259.927.432.291.173.562.376.807.604.245.228.464.482.653.756.189.274.348.569.476.878.128.309.226.632.293.966.067.334.104.677.109 1.022.005.345-.021.692-.078 1.032-.057.34-.145.672-.263.991-.118.319-.266.625-.442.911-.176.286-.382.552-.616.792-.234.24-.497.453-.785.635-.288.182-.599.333-.928.451-.329.118-.674.205-1.028.258-.354.053-.715.074-1.077.062-.362-.012-.721-.055-1.072-.129-.351-.074-.692-.179-1.016-.314-.324-.135-.631-.301-.914-.496-.283-.195-.542-.42-.772-.672-.23-.252-.431-.533-.599-.839-.168-.306-.305-.635-.408-.981-.103-.346-.173-.706-.209-1.075-.036-.369-.039-.745-.009-1.12.03-.375.089-.746.177-1.107.088-.361.206-.712.354-1.047.148-.335.325-.654.532-.948.207-.294.443-.564.708-.804.265-.24.558-.449.876-.624.318-.175.662-.318 1.024-.427.362-.109.742-.185 1.133-.227.391-.042.79-.051 1.191-.027.401.024.802.077 1.194.159.392.082.773.194 1.136.336.363.142.707.315 1.024.516.317.201.607.432.865.69.258.258.485.544.676.854.191.31.346.642.464.991.118.349.199.714.242 1.087.043.373.049.753.018 1.131-.031.378-.093.75-.186 1.112-.093.362-.217.714-.372 1.05-.155.336-.34.656-.556.953-.216.297-.462.571-.738.816-.276.245-.581.459-.911.64-.33.181-.686.329-1.06.441-.374.112-.765.188-1.163.227-.398.039-.803.041-1.207.007-.404-.034-.802-.098-1.188-.192-.386-.094-.756-.218-1.102-.371-.346-.153-.669-.335-.961-.546-.292-.211-.554-.452-.781-.721-.227-.269-.419-.566-.573-.887-.154-.321-.269-.665-.343-1.026-.074-.361-.107-.738-.098-1.115.009-.377.049-.751.12-1.116.071-.365.173-.721.306-1.061.133-.34.296-.666.49-.971.194-.305.418-.588.672-.845.254-.257.537-.487.846-.687.309-.2.642-.369.994-.504.352-.135.721-.238 1.101-.307.38-.069.772-.105 1.166-.107.394-.002.79.027 1.18.087.39.06.771.151 1.135.272.364.121.71.272 1.03.452.32.18.613.389.871.625.258.236.481.501.666.791.185.29.332.605.439.939.107.334.175.683.203 1.038.028.355.016.716-.036 1.072-.052.356-.135.705-.249 1.041-.114.336-.258.658-.432.961z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'WhatsApp',
                    href: 'https://wa.me/919876543210',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                      </svg>
                    )
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-apple-gray-100 rounded-apple-sm flex items-center justify-center text-apple-gray-600 hover:bg-apple-blue-600 hover:text-white transition-all duration-200 hover-lift"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
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
