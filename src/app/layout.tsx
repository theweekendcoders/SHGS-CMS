import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({
  subsets: ['latin'], 
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: 'Byte Forge CMS',
  description: 'Powered by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-white mx-auto h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-full`}>{children}</body>
    </html>
  )
}
