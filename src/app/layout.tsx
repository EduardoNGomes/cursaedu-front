import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Saira, Saira_Stencil_One } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const displayFont = Saira({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-saira',
})

const titleFont = Saira_Stencil_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-saira-title',
})

export const metadata: Metadata = {
  title: 'capputeeno',
  description: 'Catálogo da loja',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${titleFont.variable} ${displayFont.variable} min-h-screen flex flex-col`}
      >
        <Header />
        <main className="px-40 bg-background flex-1">{children}</main>
      </body>
    </html>
  )
}
