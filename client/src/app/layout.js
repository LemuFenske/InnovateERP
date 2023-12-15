import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Innovate',
  description: 'Created by Lemuel Fenske',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{
        <div>
        <header>
          <NavBar />
        </header>
        {children}
      </div>
      }</body>
    </html>
  )
}
