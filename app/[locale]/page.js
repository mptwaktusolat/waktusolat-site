import ScrollUp from '@/components/ScrollUp'
import Hero from '@/components/sections/HeroSection'
import Feature from '@/components/sections/FeatureSection'
import Testimonial from '@/components/sections/TestimonialSection'
import Footer from '@/components/sections/Footer'

export default async function Home() {
  return (
    <>
      <main className="relative isolate overflow-hidden bg-slate-100 dark:bg-zinc-900">
        <ScrollUp />
        <Hero />
        <Feature />
        <Testimonial />
      </main>
      <Footer />
    </>
  )
}
