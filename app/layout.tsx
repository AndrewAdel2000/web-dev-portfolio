import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Background from './components/Background'
import CursorFollower from './components/CursorFollower'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrew - Web Developer Portfolio',
  description: 'WordPress and Vue.js developer with 4 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Background />
        <Header />
        <CursorFollower />
        {children}
      </body>
    </html>
  )
}

