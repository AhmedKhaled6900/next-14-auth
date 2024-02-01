import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button"
import { LoginButton } from '@/components/auth/login-button'

const font = Poppins({ subsets: ['latin'], weight: '600' })

export default function Home() {
  return (
<main className='flex h-full flex-cpl items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-700'>
<div className='space-y-6 text-center'>
<h1 className={ cn("text-6xl font-semibold text-white drop-shadow-md",
 font.className)}>
  🔏 Auth
</h1>
<p className='text-2xl text-white'>
  simple authintication with next service
</p>
<div>
  <LoginButton asChild>
  <Button>Signin</Button>

  </LoginButton>
</div>
</div>
</main>
  )
}
