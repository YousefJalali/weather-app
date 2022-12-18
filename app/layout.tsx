import { Inder } from '@next/font/google'
import '@/styles/globals.css'
import styles from '@/styles/RootLayout.module.css'
import Link from 'next/link'

const font = Inder({ weight: ['400'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={font.className}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Weather App</title>
      </head>
      <body>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  )
}
