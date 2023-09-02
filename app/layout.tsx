import { Header } from '@/components/header'
import { Providers } from '@/components/providers'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Arcan AI',
  description:
    'A multiheaded modern data bridging package based on pipeline manifests to integrate between any modern (and old) data stack tools'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <body className={inter.className}>{children}</body>
        </Providers>
      </body>
    </html>
  )
}
