import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
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
      <body>
        <div className="font-xl md:font-2xl lg:font-3xl container mx-auto max-w-2xl bg-layout-level0 p-6 text-content-default">
          {children}
        </div>

        <div id="modal" />
      </body>
    </html>
  )
}
