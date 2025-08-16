import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <Testimonials />
      <Footer />
    </main>
  )
}
