import { Raleway } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.css'
const inter = Raleway({ subsets: ["latin"]})

export const metadata = {
  title: 'arcan user authentification',
  description: 'this is the authentification page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
            <ToastContainer />
      </body>
    </html>
  )
}
