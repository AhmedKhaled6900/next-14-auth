// import { UserRole } from "@prisma/client";
// import { DefaultSession } from "next-auth";

import { UserRole } from "@prisma/client";

// // NOTE: This file should not be edited
// // see https://nextjs.org/docs/basic-features/typescript for more information.
export type ExtendedUser = DefaultSession["user"]&{
    role: UserRole
    isTwofactEnabled:boolean
}
//  declare module "next-auth" {
//     interface Session {
//         user: ExtendedUser
//     }
//  }
 declare module "next-auth" {
    interface Session {
        user: {
            role: UserRole;
            isTwofactEnabled:boolean
        }
        & DefaultSession["user"]
    }
 }
import {JWt} from "@auth-core/jwt"


