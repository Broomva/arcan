export const metadata = {
  title: 'Categories | arcan',
  description: 'arcan categories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
            {children}
      </div>  
   
  )
}
