import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'],
display: 'swap', })

export const metadata = {
  title: 'Ghibli API',
  description: 'Unofficial Ghibli Studio API',
  favicon: "/favicon.ico"
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
