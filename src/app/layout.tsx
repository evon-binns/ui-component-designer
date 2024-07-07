import { Inter, Inter_Tight, Noto_Serif } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const inter_tight = Inter_Tight({ subsets: ['latin'], variable: '--font-sans-tight' })
const noto_serif = Noto_Serif({ subsets: ['latin'], variable: '--font-serif' })

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
        <body className="antialiased">{children}</body>
      </html>
    </ClerkProvider>
  )
}
