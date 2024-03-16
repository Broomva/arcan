import { Header } from '@/components/header'
import { Providers } from '@/components/providers'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Arcan AI',
  description: 'AI web3 tooling platform for the decentralized customization and enhancement of AI agents'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        
        
        <Providers attribute="class" defaultTheme="system" enableSystem>

        <Header />
        
            <body className={inter.className}>{children}</body>
        </Providers>
        
      </body>
    </html>
  )
}

