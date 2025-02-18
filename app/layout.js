import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@component/pages/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sabine Hamdoun',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
