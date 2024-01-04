import { Poppins } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from "@/context/ThemeProvider";
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';

const poppins = Poppins({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata = {
  title: 'Malaysia Prayer Time Site',
  description: 'Download the app from Google Play Store',
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
        </ThemeProvider>
      </body>
    </html>
  )
}
