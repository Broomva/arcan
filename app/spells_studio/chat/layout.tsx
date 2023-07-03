export const metadata = {
  title: 'Chat | arcan',
  description: 'Arcan Chat Session',
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
