import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import Head from 'next/head'

const font = Poppins({
  weight: ['100', '200', '400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.variable}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Weather App</title>
      </Head>
      <body>
        <div className="font-xl md:font-2xl lg:font-3xl container mx-auto max-w-2xl bg-layout-level0 p-6 text-content-default">
          {children}
        </div>

        <div id="modal" />
      </body>
    </html>
  )
}
