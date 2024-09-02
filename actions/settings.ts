"use server"

import { db } from "@/lib/db"
import { currentUser} from "@/lib/auth"
import * as z from "zod"
import { SettingsSchema } from "@/schemas"
import { getUserById } from "@/data/user"

export const settings =async (
    values: z.infer<typeof SettingsSchema>
) => 

{      
 const user =await currentUser();
 if(!user ){
    return {error:"unauthorized"}
 }
 const dbUser = await getUserById(user.id)
 if(!dbUser ){
    return {error:"unauthorized"}
 }
 await db.user.update({
    where:{
        id:dbUser.id
    },
    data:{
        ...values
    }
 })
 return {success:"Settings updated"}
}

