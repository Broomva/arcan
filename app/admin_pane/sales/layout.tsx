export const metadata = {
  title: 'Sales | arcan',
  description: 'arcan sales.',
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
