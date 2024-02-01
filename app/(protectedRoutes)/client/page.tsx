"use client"

import { UserInfo } from "@/components/userInfo"
import { useCurrentUser } from "@/hooks/use-current-user"
import { currentUser } from "@/lib/auth"

 const ClientPage = () => {
const user =useCurrentUser()
    return (
<UserInfo
user={user}
label="Server page"
>

</UserInfo>
    )
 }
 export default ClientPage