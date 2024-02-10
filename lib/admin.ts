import { useCurrentRole } from "@/hooks/use-current-role"
import { getSession } from "next-auth/react"
import { NextURL } from "next/dist/server/web/next-url"

export async function serverAction() {
    const session = await useCurrentRole()
    const userRole = session?.user?.role
   
    // Check if user is authorized to perform the action
    if (userRole !== 'ADMIN') {
    return Response.redirect(new URL('/auth/login'))

    //   throw new Error('Unauthorized access: User does not have admin privileges.')
    }
   
    // Proceed with the action for authorized users
    // ... implementation of the action
  }