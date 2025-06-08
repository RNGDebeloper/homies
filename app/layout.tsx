import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import { Analytics } from '@vercel/analytics/react';
import Footer from "@/components/Footer";
export const metadata = {
  metadataBase: new URL('https://hanime.vercel.app'),
  title: 'HentaiHomies - Watch Hentai Online',
  description:
    'Heaven for Hentai lovers! Watch hentai online in high quality. Free download HD hentai. Stream hentai videos free.',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
      <Navbar/>
        {children}
      <Footer/>
        <Analytics />

        <script type='text/javascript' src='//pl26870145.profitableratecpm.com/3b/d1/9c/3bd19c12276f462aee0c351f6fdeb3ae.js'></script>
        </body>
    </html>
  )
}
