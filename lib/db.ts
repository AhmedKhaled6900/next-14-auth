import {PrismaClient} from "@prisma/client"

// the upcoming code is just in dev mode because of next hot reload 

declare global{
    var prisma: PrismaClient | undefined
}
export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production"){
    globalThis.prisma = db
}

// the upcoming code will use in production mode
// export const db = new PrismaClient()
//
