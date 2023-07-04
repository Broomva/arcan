export const metadata = {
  title: 'Products | arcan',
  description: 'arcan products',
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
