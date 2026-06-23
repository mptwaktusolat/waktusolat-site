import { Poppins } from 'next/font/google'
import { initServerI18next, getT, getResources } from 'next-i18next/server'
import { I18nProvider } from 'next-i18next/client'
import '@/app/globals.css'
import { ThemeProvider } from "@/context/ThemeProvider";
import i18nConfig from '../../i18n.config'
import Script from 'next/script'

initServerI18next(i18nConfig)

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://waktusolat.app'),
  title: {
    template: '%s | App Waktu Solat Malaysia | Malaysia Prayer Time App',
    default: 'App Waktu Solat Malaysia | Malaysia Prayer Time App',
  },
  description: 'An essential apps for Muslim in Malaysia. Help you determine the latest prayer times, find qibla and more. Download now from Google Play Store',
  alternates: {
    canonical: 'https://waktusolat.app',
    languages: {
      'en-US': 'https://waktusolat.app/en',
    },
  },
}

export async function generateStaticParams() {
  return i18nConfig.supportedLngs.map((locale) => ({ locale }))
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params
  const { i18n } = await getT(undefined, { lng: locale })
  const resources = getResources(i18n)

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <I18nProvider
          language={locale}
          resources={resources}
          supportedLngs={i18nConfig.supportedLngs}
          fallbackLng={i18nConfig.fallbackLng}
          defaultNS={i18nConfig.defaultNS}
        >
          <ThemeProvider attribute="class" enableSystem>
            {children}
            {/* Umami Analytics Script */}
            <Script
              src="https://umami.iqfareez.com/script.js"
              data-website-id="4834a0c6-b55f-4c72-9f5e-68d7b299ceea"
              strategy="afterInteractive"
            />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
