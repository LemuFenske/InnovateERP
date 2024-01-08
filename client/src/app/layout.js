import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavFolder/NavBar/NavBar'
import Providers from '@/redux/provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Innovate',
  description: 'Created by Lemuel Fenske',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>{
        <div>
            <header>
              <NavBar />
            </header>
            {children}
          </div>
      }</body>
      </Providers>
    </html>
  )
}
