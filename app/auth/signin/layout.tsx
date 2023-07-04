export const metadata = {
    title: 'Signin | arcan',
    description: 'a multiheaded modern data bridging package based on pipeline manifests to integrate between any modern (and old) data stack tools',
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
  