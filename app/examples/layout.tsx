export const metadata = {
    title: 'Examples | arcan',
    description: 'Arcan Data Analytics Examples',
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