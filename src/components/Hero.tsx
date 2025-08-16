'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  
  const serviceCards = [
    {
      title: 'SPC Flooring',
      subtitle: 'Premium Quality',
      gradient: 'from-secondary-gold to-accent-orange',
      delay: '1s'
    },
    {
      title: 'uPVC Windows',
      subtitle: 'Energy Efficient',
      gradient: 'from-apple-blue-600 to-apple-blue-700',
      delay: '1.2s'
    },
    {
      title: 'Fluted Panels',
      subtitle: 'Modern Design',
      gradient: 'from-accent-purple to-primary-navy',
      delay: '1.4s'
    },
    {
      title: 'PVC Doors',
      subtitle: 'Durable & Stylish',
      gradient: 'from-secondary-bronze to-accent-orange',
      delay: '1.6s'
    },
    {
      title: 'Modular Kitchens',
      subtitle: 'Custom Solutions',
      gradient: 'from-accent-green to-secondary-gold',
      delay: '1.8s'
    },
    {
      title: 'Professional Installation',
      subtitle: 'Expert Service',
      gradient: 'from-apple-blue-600 to-accent-purple',
      delay: '2s'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % serviceCards.length)
    }, 3000) // Change card every 3 seconds

    return () => clearInterval(interval)
  }, [serviceCards.length])
  return (
    <section className="relative min-h-screen bg-surface-primary overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-primary via-surface-secondary/30 to-surface-primary"></div>
      
      {/* Floating elements - Apple style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-secondary-gold/10 to-accent-orange/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-br from-apple-blue-600/8 to-accent-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="content-max-width px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-surface-secondary/80 backdrop-blur-sm rounded-full border border-apple-gray-200/50 animate-fade-in">
              <div className="w-2 h-2 bg-accent-green rounded-full mr-3 animate-pulse"></div>
              <span className="text-footnote text-text-secondary font-medium">Authorized Polywood Distributor</span>
            </div>

            {/* Main headline */}
            <h1 className="mb-6 animate-slide-up">
              <span className="block text-display-large text-text-primary leading-none mb-2">
                RAMA G
              </span>
              <span className="block text-display-large bg-gradient-to-r from-secondary-gold to-accent-orange bg-clip-text text-transparent leading-none">
                DECOR
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-title text-text-secondary mb-12 max-w-2xl text-balance animate-slide-up" style={{ animationDelay: '0.2s' }}>
              One stop shop for all your <br /> home decor needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/contact"
                className="btn-primary text-center min-w-48 hover-lift"
              >
                Get Free Quote
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="btn-outline text-center min-w-48 hover-lift"
              >
                Explore Products
              </Link>
            </div>

            {/* Product categories preview */}
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-caption text-text-tertiary mb-4 font-medium">PREMIUM SOLUTIONS</p>
              <div className="flex flex-wrap gap-3">
                {[
                  'SPC Flooring',
                  'uPVC Windows', 
                  'Fluted Panels',
                  'PVC Doors',
                  'Modular Kitchens',
                  'Window Sections'
                ].map((item, index) => (
                  <span 
                    key={item}
                    className="px-3 py-2 bg-surface-secondary/60 backdrop-blur-sm text-footnote text-text-secondary rounded-apple-sm border border-apple-gray-200/30 hover:bg-surface-secondary/80 transition-all duration-200"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile background image */}
        <div className="lg:hidden absolute inset-0 opacity-20">
          <Image
            src="/hero-showcase.jpg"
            alt="Premium home decor showcase"
            fill
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            priority
          />
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
            {/* Main product showcase */}
            <div className="absolute right-20 top-1/2 -translate-y-1/2 w-80 h-96 card-elevated overflow-hidden animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Image
                src="/hero-showcase.jpg"
                alt="Premium home decor showcase"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>

            {/* Dynamic floating service cards - Desktop only */}
            {serviceCards.map((card, index) => {
              const isVisible = index === currentCardIndex || index === (currentCardIndex + 1) % serviceCards.length
              const position = index === currentCardIndex ? 'top-20 right-12' : 'bottom-32 right-0'
              const size = index === currentCardIndex ? 'w-48 h-32' : 'w-52 h-36'
              
              return (
                <div
                  key={card.title}
                  className={`absolute ${position} ${size} card bg-surface-primary/90 backdrop-blur-sm p-4 transition-all duration-1000 ease-in-out ${
                    isVisible 
                      ? 'opacity-100 scale-100 animate-service-card' 
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  style={{ 
                    animationDelay: card.delay,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: isVisible ? '0ms' : '200ms'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-apple-sm transition-all duration-500`}></div>
                    <div>
                      <h3 className="text-footnote font-semibold text-text-primary transition-all duration-300">{card.title}</h3>
                      <p className="text-footnote text-text-secondary transition-all duration-300">{card.subtitle}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Card indicators - Desktop only */}
            <div className="absolute bottom-16 right-8 flex space-x-2">
              {serviceCards.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentCardIndex 
                      ? 'bg-secondary-gold scale-125 shadow-md' 
                      : 'bg-apple-gray-300 hover:bg-apple-gray-400 hover:scale-110'
                  }`}
                  onClick={() => setCurrentCardIndex(index)}
                  role="button"
                  tabIndex={0}
                />
              ))}
            </div>
          </div>
        </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-apple-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-apple-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
