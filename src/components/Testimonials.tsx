'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'RAMA G DECOR transformed our entire home with their premium SPC flooring and modular kitchen. The quality is exceptional and the installation was flawless. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format',
    project: 'Complete Home Renovation'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    text: 'Outstanding service from start to finish! Their uPVC windows have made our home more energy-efficient and the fluted wall panels look absolutely stunning.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
    project: 'Windows & Wall Panels'
  },
  {
    id: 3,
    name: 'Anita Patel',
    location: 'Pune',
    rating: 5,
    text: 'Professional team, quality products, and excellent after-sales service. Our new PVC doors are beautiful and require zero maintenance. Worth every penny!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format',
    project: 'Door Installation'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Bangalore',
    rating: 5,
    text: 'The team at RAMA G DECOR exceeded our expectations. Their attention to detail and commitment to quality is remarkable. Our modular kitchen is a dream come true!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
    project: 'PVC Ceiling Installation'
  },
  {
    id: 5,
    name: 'Sneha Gupta',
    location: 'Jaipur',
    rating: 5,
    text: 'Incredible work on our PVC ceiling installation! The finish is perfect and the team was very professional. RAMA G DECOR truly delivers premium quality.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face&auto=format',
    project: 'Ceiling & Flooring'
  },
  {
    id: 6,
    name: 'Amit Joshi',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Best decision we made for our home renovation! The fluted panels and SPC flooring combination looks amazing. Excellent craftsmanship and timely delivery.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format',
    project: 'Wall Panels & Flooring'
  }
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-surface-primary to-surface-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-secondary-gold/10 to-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-apple-blue-500/10 to-accent-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="content-max-width px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-caption text-apple-blue-600 font-semibold mb-4 tracking-wide">CUSTOMER STORIES</p>
          <h2 className="text-display text-text-primary mb-6 max-w-4xl mx-auto">
            Trusted by <span className="bg-gradient-to-r from-secondary-gold to-accent-orange bg-clip-text text-transparent">500+</span> Happy Families
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Discover why homeowners across India choose RAMA G DECOR for their premium home transformation needs.
          </p>
        </div>

        {/* Enhanced Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                {/* Quote and Rating */}
                <div className="space-y-6">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-gradient-to-r from-secondary-gold to-accent-orange rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-title-large text-text-primary leading-relaxed">
                    "{testimonials[currentSlide].text}"
                  </blockquote>
                </div>

                {/* Customer Info */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-title font-semibold text-text-primary">{testimonials[currentSlide].name}</h4>
                    <p className="text-footnote text-text-secondary">{testimonials[currentSlide].location}</p>
                  </div>
                  
                  {/* Project Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-surface-secondary rounded-full">
                    <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                    <span className="text-footnote font-medium text-text-secondary">{testimonials[currentSlide].project}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main image container */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-gold to-accent-orange rounded-2xl rotate-3"></div>
                  <div className="relative w-full h-full bg-surface-primary rounded-2xl overflow-hidden card-elevated -rotate-3 transition-transform duration-700 hover:rotate-0">
                    <Image
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-apple-blue-500 to-accent-purple rounded-full flex items-center justify-center animate-float">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-8 mt-16">
            {/* Previous button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-full bg-surface-secondary hover:bg-apple-gray-100 transition-colors flex items-center justify-center group"
            >
              <svg className="w-5 h-5 text-text-secondary group-hover:text-apple-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-secondary-gold scale-125 shadow-md' 
                      : 'bg-apple-gray-300 hover:bg-apple-gray-400 hover:scale-110'
                  }`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full bg-surface-secondary hover:bg-apple-gray-100 transition-colors flex items-center justify-center group"
            >
              <svg className="w-5 h-5 text-text-secondary group-hover:text-apple-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
