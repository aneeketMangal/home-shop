import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  )
}
