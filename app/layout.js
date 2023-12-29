import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/context/ThemeProvider";

const poppins = Poppins({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata = {
  title: 'Malaysia Prayer Time Site',
  description: 'Download the app from Google Play Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
