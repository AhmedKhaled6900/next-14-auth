"use server"
// This is a server action component it should be used in a server action
// this file should lay in the actions folder in the root of app
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFUALT_LOGIN_REDIRECT } from "@/routes";
import { generateVerificationToken,
generateTwoFactorToken
} from "@/lib/tokens";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail ,
    sendTwoFactorTokenEmail

} from "@/lib/mail";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { db } from "@/lib/db";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
export const Login =  async( values: z.infer<typeof LoginSchema>) => {
//validate the values
const validatedFields = LoginSchema.safeParse(values)
if(!validatedFields.success){
     return {error:"Invalid fields"};
}

const { email,password,code} = validatedFields.data
const existingUser = await getUserByEmail(email)

if (!existingUser || !existingUser.password || !existingUser.email) {
    return {error:" Email does not exist"}
}
if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
        existingUser.email);
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,
    )
    return {success:" check your mail for Confirmation"}
}

if(existingUser.isTwoFactorEnabled && existingUser.email)
{ 
    if(code){
        const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email)
if(!twoFactorToken) return {error:"Invalid code"}
if(twoFactorToken.expires < new Date()) return {error:"Code expired"}
if(twoFactorToken.token !== code) return {error:"Invalid code"}

// await db.twoFactorConfirmation.delete({
//     where:{
//         id:twoFactorToken.id
//     }
// })
const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)

if(existingConfirmation) {
    await db.twoFactorConfirmation.delete({
        where:{
            id:existingConfirmation.id
        }
    })
}
await db.twoFactorConfirmation.create({
    data:{
        userId:existingUser.id
    }
})
    } 
    else {
        const twoFactorToken = await generateTwoFactorToken(existingUser.email)

        await sendTwoFactorTokenEmail(
            twoFactorToken.email,
            twoFactorToken.token
        )
return {twoFactor:true}   

    }
    }
try {
    await signIn("credentials",{
        email,
        password,
        redirectTo:DEFUALT_LOGIN_REDIRECT
    })
    return {success:"Form Submitted"}
}
catch (error) {
     if (error instanceof AuthError) {
    switch (error.type)
     {
          case "CredentialsSignin":
               return {error:"Invalid email or password"}
               default:
                     return {error:"somthingwentwrong"}
     }

}
throw error
}}