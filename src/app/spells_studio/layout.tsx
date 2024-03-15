import { auth } from '@/app/auth/auth'
import '@/app/globals.css'
import { Providers } from '@/components/providers'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
// import { TailwindIndicator } from '@/components/tailwind-indicator'

export const metadata: Metadata = {
  title: {
    default: 'Arcan Spells Studio',
    template: `%s - Arcan Spells Studio`
  },
  description: 'An AI-powered chatbot studio for creating and customizing AI agents',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/arcan_logo.png',
    apple: '/arcan_logo.png'
  }
}

interface RootLayoutProps {
  children: React.ReactNode,
}

export default async function ChatLayout({ children }: RootLayoutProps) {
  const session = await auth()
  // redirect to home if user is already logged in
  if (!session?.user) {
    redirect('/auth/sign-in')
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Toaster />
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            {/* @ts-ignore */}
            {/* <Header /> */}
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
          {/* <TailwindIndicator /> */}
        </Providers>
      </body>
    </html>
  )
}
