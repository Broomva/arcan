export const metadata = {
  title: 'Sales | arcan',
  description: 'A stock taking application for shopping malls and stores.',
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
