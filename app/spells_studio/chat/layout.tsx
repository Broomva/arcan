export const metadata = {
  title: 'Chat | arcan',
  description: 'Arcan Chat Session',
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