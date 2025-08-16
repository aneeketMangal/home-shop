import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'RAMA G DECOR - Premium Home Decor Solutions',
    template: '%s | RAMA G DECOR'
  },
  description: 'Your one stop shop for all your home decor needs. Authorized Polywood distributor offering SPC Flooring, uPVC Windows, Fluted Wall Panels, PVC Doors, Modular Kitchens & professional installation services.',
  keywords: ['home decor', 'polywood', 'SPC flooring', 'uPVC windows', 'fluted wall panels', 'PVC doors', 'modular kitchens', 'home improvement'],
  authors: [{ name: 'RAMA G DECOR' }],
  creator: 'RAMA G DECOR',
  publisher: 'RAMA G DECOR',
  metadataBase: new URL('https://ramagdecor.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ramagdecor.com',
    siteName: 'RAMA G DECOR',
    title: 'RAMA G DECOR - Premium Home Decor Solutions',
    description: 'Your one stop shop for all your home decor needs. Authorized Polywood distributor.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RAMA G DECOR - Premium Home Decor Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ramagdecor',
    creator: '@ramagdecor',
    title: 'RAMA G DECOR - Premium Home Decor Solutions',
    description: 'Your one stop shop for all your home decor needs.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
