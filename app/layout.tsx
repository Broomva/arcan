import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arcan AI',
  description: "A multiheaded modern data bridging package based on pipeline manifests to integrate between any modern (and old) data stack tools",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       {/*
//         <head /> will contain the components returned by the nearest parent
//         head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//       */}
//       <head />
//       <body className={inter.className}>{children}
//         {/* <AuthContextProvider> */}
//           {children}
//         {/* </AuthContextProvider> */}
//       </body>
//     </html>
//   )
// }