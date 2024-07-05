import { Inter, Inter_Tight, Noto_Serif, JetBrains_Mono } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const inter_tight = Inter_Tight({ subsets: ['latin'], variable: '--font-sans-tight' })
const noto_serif = Noto_Serif({ subsets: ['latin'], variable: '--font-serif' })
// const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${inter_tight.variable} ${noto_serif.variable}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
