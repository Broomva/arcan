export const metadata = {
    title: 'Spells Studio | arcan',
    description: 'Spells Studio',
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
  