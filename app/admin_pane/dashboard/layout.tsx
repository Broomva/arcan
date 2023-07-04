export const metadata = {
  title: 'Dashboard | arcan',
  description: 'a multiheaded modern data bridging package based on pipeline manifests to integrate between any modern (and old) data stack tools',
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
