"use server"
import bcrypt from "bcrypt"

import { getPasswordResetTokenByToken } from "@/data/passwordResetToken"
import { getUserByEmail } from "@/data/user"
import { db } from "@/lib/db"
import { NewpasswordSchema } from "@/schemas"
import * as z from "zod"
 export const NewPassword = async (
    values: z.infer<typeof NewpasswordSchema>,
    token?: string|null
 ) => {
    // console.log(token)
     if (!token) {
         return { error: "no token" }
     }
     const validatedFields = NewpasswordSchema.safeParse(values)
     if (!validatedFields.success) {
         return { error: "Invalid fields" }
     }
     const { password } = validatedFields.data
     const existingToken = await getPasswordResetTokenByToken(token)
     if (!existingToken) {
         return { error: "Invalid token" }
     }
     const hasExpired = new Date(existingToken.expires) < new Date()
     if (hasExpired) {
         return { error: "Token has expired" }
     }
         const existingUser = await getUserByEmail(existingToken.email)
     if (!existingUser) {
         return { error: "Email does not exist" }
     }
     const hashedPassword = await bcrypt.hash(password, 10)

     await db.user.update({
         where: {
             id: existingUser.id
         },
         data: {
             password: hashedPassword
         }
     })
     await db.passwordResetToken.delete({
         where: {
             id: existingToken.id
         }
     })
     return { success: "Password reset successful" }
     }

 