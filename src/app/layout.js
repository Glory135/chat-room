import { Inter } from 'next/font/google'
import '../styles/global.css'
import TanstackProvider from '@/components/TanstackProviders'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chat Room',
  description: 'General chat room, accessible by anyone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <main>
            <Header />
            {children}
          </main>
        </TanstackProvider>
      </body>
    </html >
  )
}
