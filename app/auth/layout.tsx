import React from 'react'

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