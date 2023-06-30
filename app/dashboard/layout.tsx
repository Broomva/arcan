export const metadata = {
  title: 'Dashboard | arcan',
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
