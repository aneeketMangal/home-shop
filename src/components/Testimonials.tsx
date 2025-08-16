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
    image: '/testimonials/customer1.jpg',
    project: 'Complete Home Renovation'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    text: 'Outstanding service from start to finish! Their uPVC windows have made our home more energy-efficient and the fluted wall panels look absolutely stunning.',
    image: '/testimonials/customer2.jpg',
    project: 'Windows & Wall Panels'
  },
  {
    id: 3,
    name: 'Anita Patel',
    location: 'Pune',
    rating: 5,
    text: 'Professional team, quality products, and excellent after-sales service. Our new PVC doors are beautiful and require zero maintenance. Worth every penny!',
    image: '/testimonials/customer3.jpg',
    project: 'Door Installation'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Bangalore',
    rating: 5,
    text: 'The team at RAMA G DECOR exceeded our expectations. Their attention to detail and commitment to quality is remarkable. Our modular kitchen is a dream come true!',
    image: '/testimonials/customer4.jpg',
    project: 'Modular Kitchen'
  }
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-navy mb-4">
            What Our <span className="text-secondary-gold">Customers Say</span>
          </h2>
          <div className="w-20 h-1 bg-secondary-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with RAMA G DECOR.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-navy/10 rounded-full translate-y-12 -translate-x-12"></div>

            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-4xl text-secondary-gold/30">
              "
            </div>

            <div className="relative z-10">
              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-light">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary-navy text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentSlide].location}
                  </div>
                  <div className="text-sm text-secondary-gold font-medium">
                    {testimonials[currentSlide].project}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary-navy text-white hover:bg-primary-green transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary-navy text-white hover:bg-primary-green transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-secondary-gold' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary-navy rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the RAMA G DECOR difference for yourself. Get your free consultation today!
            </p>
            <button className="px-8 py-3 bg-secondary-gold text-primary-navy font-semibold rounded-lg hover:bg-secondary-bronze transition-colors">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
