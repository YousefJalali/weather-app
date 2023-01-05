import '@/styles/globals.css'
// import 'tw-elements'
import { Poppins } from '@next/font/google'
import Script from 'next/script'

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Weather App</title>
      </head>
      <body>
        <div className="font-xl md:font-2xl lg:font-3xl container mx-auto max-w-2xl bg-layout-level0 p-6 text-content-default">
          {children}
        </div>

        <Script src="./node_modules/tw-elements/dist/js/index.min.js" />
      </body>
    </html>
  )
}
