import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learning NEXT JS',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{display: "flex", width: "100%", justifyContent: "space-around", padding: "1rem"}}>
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/products">Porducts</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
