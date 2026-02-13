import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wise Words by SendOwl',
  description: 'Newsletter preview for Wise Words by SendOwl',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
