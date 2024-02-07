import * as z from "zod"
export const  SettingsSchema = z.object({
   name:z.optional(z.string()),
   
})
export const LoginSchema =
 z.object({ email: z.string().email({
    message: "invalid email"
}),
 password: z.string().min(8 ,{message:"password is required"}),

code: z.optional(z.string())
});
 
export const ResetSchema =
 z.object({ email: z.string().email({
    message: "invalid email"
})
 });

export const NewpasswordSchema = 
z.object({ password: z.string().min(8 ,{message:"8 character  required"}),
 });
export const RegisterSchema = 
z.object({ email: z.string().email({
    message: "invalid email"
}), password: z.string().min(8 ,{message:"8 character  required"}),
name: z.string().min(1 ,{message:"Name is required"} )
})