// this is the root layout

import useSWR, { SWRConfig } from 'swr'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import  {SessionProvider} from "next-auth/react"
import {auth} from "@/auth"
import { Toaster } from '@/components/ui/sonner'
import TheMainNavbar from '@/components/categoriesLinks'
import Billboard from '@/components/ui/billboard'
import { ToastProvider } from '@/providers/toaster-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store - Next.js',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 const session  = await auth()
  return (

    <SessionProvider session={session}>

    <html lang="en">
      <body className={inter.className}>

<TheMainNavbar></TheMainNavbar>
     <ToastProvider></ToastProvider>
        {children}
       
        </body>
    </html>

    </SessionProvider>

  )
}
