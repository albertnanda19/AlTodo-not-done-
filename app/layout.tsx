import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import GlobalStyleProvider from '@/providers/GlobalStyleProvider'
import ContextProvider from '@/providers/ContextProvider'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
        <body>
          <ContextProvider>
            <GlobalStyleProvider>
              <Sidebar />
              <div className='w-full'>
                {children}
              </div>
            </GlobalStyleProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
