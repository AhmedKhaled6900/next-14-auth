
import NextAuth,{DefaultSession} from "next-auth"
import authConfig from "@/auth.config"
import { db } from "./lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { getUserById } from "./data/user"
import { UserRole } from "@prisma/client"
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation"
declare module "@auth/core" {
  interface session{
    user:{
      role: any
    } & DefaultSession["user"]
  }
}
export const {
 

  handlers: { GET, POST },

  auth,
  signIn,
  signOut
} = NextAuth({
  pages:{
   signIn:"/auth/login", 
   error:"/auth/error"
  },
  events:{
    async linkAccount({ user}){
      await db.user.update({
        where:{
          id: user.id
        },
        data:{
          emailVerified:new Date()
        }
      })
    }
  },
  callbacks:{
    async signIn({ user, account }) {
      console.log({user, account})
      // Allow Outh sign in with out email verification
      if (account?.provider !=="credentials") {
        return true
      }
      //prevent sign in with unverified email
      const existingUser =await getUserById(user.id);
      if(!existingUser?.emailVerified) return false;

      if(existingUser.isTwoFactorEnabled) {
      const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)

      if(!twoFactorConfirmation)  return false
      await db.twoFactorConfirmation.delete({
        where:{
          id: twoFactorConfirmation.id
        }
      })
      }
      return true
    },
    async session({ token,session}) {
if (token.sub && session.user){
  session.user.id = token.sub
}
if(token.role && session.user){
  session.user.role = token.role as UserRole
}
if( session.user){
  session.user.isTwofactEnabled = token.isTwofactEnabled as boolean
}
if(session.user){
session.user.name = token.name as string
session.user.email = token.email as string
session.user.image = token.image as string
}
      return session
    },

 async jwt({ token }) {
 if (!token.sub) return token
const existingUser =await getUserById(token.sub)
if (!existingUser){

  return token
}

token.name = existingUser.name
token.email = existingUser.email
token.image = existingUser.image
token.emailVerified = existingUser.emailVerified
token.role = existingUser.role
token.TwoFactorEnabled = existingUser.isTwoFactorEnabled
   return token
 

 }
  },
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    ...authConfig,
})