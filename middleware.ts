import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { NextApiRequest, NextApiResponse } from 'next';

import {DEFUALT_LOGIN_REDIRECT,
  adminRoutes,
apiAuthPrefix,
autheRoutes,
publicRoutes
} from "@/routes"
import { UserRole } from "@prisma/client"
import { useCurrentRole } from "./hooks/use-current-role"
import { admin, isAdmin } from "./actions/admin"
import { currentRole } from "./lib/auth"
import { getSession, useSession } from "next-auth/react"

const {auth} =NextAuth(authConfig)
export default auth( 
   async (req) => {
const {nextUrl} = req
const isLoggedin =!!req.auth
const isApiAuthRoute =nextUrl.pathname.startsWith(apiAuthPrefix)

const isAdminRoute =nextUrl.pathname.startsWith(adminRoutes.toString())



const isAdminRole =  req.auth?.user?.role as UserRole
console.log(` role ${isAdminRole}`)

const isPublicRoute =publicRoutes.includes(nextUrl.pathname)
const isAuthRoute =autheRoutes.includes(nextUrl.pathname)
if(isApiAuthRoute){
  return null
}
if(isAdminRoute){
  if(!isLoggedin){
    return Response.redirect(new URL('/auth/login', nextUrl))
  }
  // if(!isAdminRole){
  //   return Response.redirect(new URL('/settings', nextUrl))

  // }

return null
}

// if(!isAdminRoute ){
//   if(isAdminRole!=="ADMIN")

// {  return Response.redirect(new URL('/settings', nextUrl))}
// }
if (isAuthRoute){
  if (isLoggedin) {
    return Response.redirect(new URL(DEFUALT_LOGIN_REDIRECT , nextUrl))

  } 
  return null
}
if(!isPublicRoute && !isLoggedin){
  return Response.redirect(new URL('/auth/login', nextUrl))
}
return null
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}