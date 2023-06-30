export const metadata = {
    title: 'About | arcan',
    description: 'Arcan is a multiheaded modern data bridging package based on pipeline manifests to integrate between any modern (and old) data stack tools',
  }

export default function DashboardLayout({
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