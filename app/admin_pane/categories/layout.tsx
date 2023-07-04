export const metadata = {
  title: 'Categories | arcan',
  description: 'arcan categories',
}

import { AuthContextProvider } from '@/app/context/auth'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </div>  
  )
}
