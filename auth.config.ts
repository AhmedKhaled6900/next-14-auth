import credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data/user"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials)
        if (validateFields.success) {
   const { email, password } = validateFields.data
   const user = await getUserByEmail(email)
   if(!user || !user.password) return null

   

   const passwordsMatch = await bcrypt.compare(password,user.password)
if(passwordsMatch){
    return user
}
        }
      return null

      }
 })
 
]
} satisfies NextAuthConfig