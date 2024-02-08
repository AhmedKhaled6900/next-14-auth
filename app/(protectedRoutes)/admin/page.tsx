
"use client"
import { admin } from "@/actions/admin"
import { auth } from "@/auth"
import {RoleGate} from "@/components/auth/role.gate"
import { FormSuccess } from "@/components/form-success"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { UserRole } from "@prisma/client"
import { toast } from "sonner"

const AdminPage = () => {

//   const currentRole = async()=> {
//     const session =await auth()
//     return session?.user.role 
// }
  const onserverActionClick =()=>{
    admin()
    .then((data)=>{
      if(data.success){
        return(
      console.log(data.success)
        )
      }
      if(data.error){
   
console.error(data.error)
        
      }
    })
      
    
  }
const onApiRouteClick =()=>{
  fetch('/api/admin')
  .then((response)=>{

    if(response.ok){
   
      toast.success("Alowed API Route")

      
    }else{
      return (
        toast.error("Forbidden API Route")

      )
    }

  }

  
  )
}
    return (
      <Card className="w-full ">
<CardHeader>
  <p className="text-2xl font-semibold text-center">
   AdminPage
  </p>
</CardHeader>
<CardContent className="space-y-4">
<RoleGate allowedRole={UserRole.ADMIN}>
  <FormSuccess message="You are admin"/>
</RoleGate>
<div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md" >
<p className="text-sm font-medium">

  Only Admin API Route

</p>
<Button onClick={onApiRouteClick}>
  click
</Button>
</div>
<div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md" >
<p className="text-sm font-medium">

  Only Admin Server Action

</p>
<Button onClick={onserverActionClick}>
  click
</Button>
</div>
</CardContent>
      </Card>
    )
}
export default AdminPage