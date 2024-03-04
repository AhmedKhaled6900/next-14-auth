import getCategories from "@/data/get-categories"
import { UserInfo } from "@/components/userInfo"
import { currentUser } from "@/lib/auth"

 const ServerPage =async () => {
const user =await currentUser()
// const categories =await getCategories()
// console.log(categories)
    return (
<UserInfo
user={user}
label="Server page"
>

</UserInfo>
    )
 }
 export default ServerPage