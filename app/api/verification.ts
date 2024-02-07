"use server"
import { newVerification } from "@/actions/new-verification";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { db } from "@/lib/db";

export default async function handler(req: { query: { token: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; Error?: undefined; success?: undefined; } | { Error: string; error?: undefined; success?: undefined; } | { success: string; error?: undefined; Error?: undefined; }): void; new(): any; }; }; }) {
  try {
    // const token = req.query.token;
    // const token= await newVerification(req.query.token);
    // const response = data
    // console.log(token)

    // console.log(data)
    const existingToken = await getVerificationTokenByToken(req.query.token)
    console.log(existingToken)
    if (!existingToken) return { error:" Token does not exist"}
            
          const hasExpired = new Date(existingToken.expires) < new Date()
    if(hasExpired){
       return {Error:"Token has expired"}
    }
    const existingUser = await getUserByEmail(existingToken.email)
    if(!existingUser){
        return{  Error:" Email not found"}
    }

    await db.user.update({

      where:{
          id:existingUser.id
      },
      data:{
          emailVerified:new Date(),
          email: existingToken.email
      }
  })


    // const data = await newVerification(token);
    res.status(200).json(req.query.token);
    return req.query.token
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }

}
