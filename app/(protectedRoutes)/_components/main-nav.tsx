"use client"

import { auth } from "@/auth"
import { UserButton } from "@/components/auth/user-button"
import { Button } from "@/components/ui/button"
import { useCurrentRole } from "@/hooks/use-current-role"
import { useCurrentUser } from "@/hooks/use-current-user"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const MainNavbar = () => {
    const pathname = usePathname()
const user =useCurrentUser()
const role =useCurrentRole()
console.log(role)

    // const session= auth()
    // console.log(session)
    return (
        <nav className=" w-full bg-secondary flex justify-between items-center p-4  shadow-sm" >

            {role ==="ADMIN" && (
                <div className="flex gap-x-2">

<Button asChild 
variant={pathname === '/dashboard' ? 'default' : 'outline'}
>
<Link href={'/dashboard'}>
Dashboard
</Link>
</Button>
                </div>
            )}
{/* 
   {
       user&&(
           user.name
       )
   } */}
   {
     
       <div className="flex gap-x-2">
       <Button asChild  className="p-2"
   
   variant={pathname === '/server' ? 'default' : 'outline'}
   >
   <Link href={'/server'}>
   Server
   </Link>
   </Button>
   
   <Button asChild 
   variant={pathname === '/client' ? 'default' : 'outline'}
   >
   <Link href={'/client'}>
   client
   </Link>
   </Button>
   <Button asChild 
   variant={pathname === '/admin' ? 'default' : 'outline'}
   >
   <Link href={'/admin'}>
   Admin
   </Link>
   </Button>
   <Button asChild 
   variant={pathname === '/settings' ? 'default' : 'outline'}
   >
   <Link href={'/settings'}>
   Settings
   </Link>
   </Button>
       </div>
   }
           {/* <div className="flex gap-x-2">
           <Button asChild  className="p-2"
   
   variant={pathname === '/server' ? 'default' : 'outline'}
   >
       <Link href={'/server'}>
       Server
       </Link>
   </Button>
   
   <Button asChild 
   variant={pathname === '/client' ? 'default' : 'outline'}
   >
       <Link href={'/client'}>
       client
       </Link>
   </Button>
   <Button asChild 
   variant={pathname === '/admin' ? 'default' : 'outline'}
   >
       <Link href={'/admin'}>
   Admin
       </Link>
   </Button>
   <Button asChild 
   variant={pathname === '/settings' ? 'default' : 'outline'}
   >
       <Link href={'/settings'}>
   Settings
       </Link>
   </Button>
           </div> */}
   <UserButton />
   
        </nav>
           )
}