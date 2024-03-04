import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toaster-provider";
import Link from "next/link";
import { redirect } from "next/navigation";




export default async function SetupLayout({
    children
}: {
    children: React.ReactNode
}) {
    const userId  = await auth();

    if(userId?.user.role !== "ADMIN"){
        redirect('/')
    }
    const store = await db.store.findMany({
        where:{
            userId:userId.user.id
        }
    })
    console.log(store)

// if(store){
//     redirect(`/dashboard/${store.id}/categories`) 
// }


    return (
        <> 

        <div>
            {
                store.map((item)=>(
                    <Button key={item.id}>
                    <Link href={`/dashboard/${item.id}`}>    
                    {item.name}
                    </Link>
                    </Button>
                ))



            }
{/* <Button>
    <Link href={store.map((item)=> `/dashboard/${item.id}`)}>
    Create
    </Link>

</Button> */}

        </div>
        {children}
        
         </>


    )
}