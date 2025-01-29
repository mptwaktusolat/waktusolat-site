import { Poppins } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from "@/context/ThemeProvider";
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import Script from 'next/script'

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

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" enableSystem>
          {children}
          {/* Umami Analytics Script */}
          <Script
            src="https://umami.iqfareez.com/script.js"
            data-website-id="4834a0c6-b55f-4c72-9f5e-68d7b299ceea"
            strategy="afterInteractive"
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
