// import  {usePathname}  from 'next/app'
import React from 'react'
import { Metadata } from 'next'
import { NextRequest } from 'next/server'
import { usePathname } from 'next/navigation'
function AuthLayout(
    {children}: {
        children: React.ReactNode
    }
) {

  return (
    <div className='h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-700 ' >
        {children}
    </div>
  )
}

export default AuthLayout