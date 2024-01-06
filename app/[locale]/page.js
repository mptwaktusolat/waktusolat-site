import Image from 'next/image'
import ScrollUp from '@/components/ScrollUp'
import Hero from '@/components/sections/HeroSection'
import Feature from '@/components/sections/FeatureSection'
import Testimonial from '@/components/sections/TestimonialSection'
import Footer from '@/components/sections/Footer'
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['hero', 'reviews'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className="relative isolate overflow-hidden bg-slate-100 dark:bg-zinc-900">
        <ScrollUp />
        <Hero />
        <Feature />
        <Testimonial />
      </main>
      <Footer />
    </TranslationsProvider>
  )
}
