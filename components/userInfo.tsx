import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Header } from "./auth/header";

interface UserInfoProps {
    user?:ExtendedUser;
    label:string
}

export const UserInfo=({user , label}:UserInfoProps)=>{

  
        return (
            <Card className=" border-b border-green-800  text-white w-[400px] shadow-md bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-800 to-black">
                <CardHeader>
                    <p className="text-lg font-semibold text-center"
                    >{label}</p>
                </CardHeader>
                <CardContent className="space-y-4">

<div className="flex flex-row space-y-4 p-3 items-center border-b border-green-800 justify-between ">
<p className="text-sm font-medium" > 
    Name
</p>
<p className="truncate text-sm maw-w-[180px] rounded-md" >
    {user?.name} 
</p>
</div>
<div className="flex flex-row space-y-4 p-3 items-center border-b border-green-800  justify-between ">
<p className="text-sm font-medium" > 
    Email
</p>
<p className="truncate text-sm maw-w-[180px] rounded-md" >
    {user?.email}
</p>
</div>
<div className="flex flex-row space-y-4 p-3 items-center border-b border-green-800  justify-between ">
<p className="text-sm font-medium" > 
  Role
</p>
<p className="truncate text-sm maw-w-[180px] rounded-md" >
    {user?.role}
</p>
</div>
<div className="flex flex-row space-y-4 p-3 items-center border-b border-green-800  justify-between ">
<p className="text-sm font-medium" > 
  Two Factor Authentication 
</p>
<p className="truncate text-sm maw-w-[180px] rounded-md" >
    {user?.isTwofactEnabled ? "On " : "Off"}
</p>
</div>
                </CardContent>
            </Card>
        )
    
}