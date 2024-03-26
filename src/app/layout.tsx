import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Saira, Saira_Stencil_One } from 'next/font/google'
import './globals.css'

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
      <body className={`${titleFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  )
}
