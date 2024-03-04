import NextAuth from "next-auth"
import authConfig from "./auth.config"
import {DEFUALT_LOGIN_REDIRECT,
apiAuthPrefix,
autheRoutes,
publicRoutes,
// clientRoutes,
// productRoute
} from "@/routes"
const {auth} =NextAuth(authConfig)
export default auth( 
   async (req) => {
const {nextUrl} = req
const isLoggedin =!!req.auth
const isApiAuthRoute =nextUrl.pathname.startsWith(apiAuthPrefix)
const isPublicRoute =publicRoutes.includes(nextUrl.pathname)
const isAuthRoute =autheRoutes.includes(nextUrl.pathname)
// const isclientRoute = nextUrl.pathname.includes(clientRoutes)
// const isproductRoute  =nextUrl.pathname.includes(productRoute)
// if(isApiAuthRoute){
//   return null
// }
// if(isAdminRoute){
//   if(!isLoggedin){
//     return Response.redirect(new URL('/auth/login', nextUrl))
//   }
// return null
// }

// if(isclientRoute){
//   return nully

// }
// if(isproductRoute){
//   return null
// }
// if (isAuthRoute){
//   if (isLoggedin) {
//     return Response.redirect(new URL(DEFUALT_LOGIN_REDIRECT , nextUrl))

//   } 
//   return null
// }
// if(!isPublicRoute && !isLoggedin){
//   return Response.redirect(new URL('/auth/login', nextUrl))
// }
return null
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: [ "/" ]
}


