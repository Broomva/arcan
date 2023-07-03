export const metadata = {
  title: 'Products | arcan',
  description: 'arcan products',
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
