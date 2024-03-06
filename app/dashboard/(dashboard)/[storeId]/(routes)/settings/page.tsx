import { redirect } from "next/navigation";

import {db} from "@/lib/db";

import { SettingsForm } from "./components/settings-form";
import { auth } from "@/auth";
import { Metadata } from "next";
export async function generateMetadata(
  {  params
  }: {
    params: { storeId: string } }
): Promise<Metadata> {
  const id = params.storeId
  const store =await db.store.findFirst({
    where:{
      id:params.storeId
    }
  },
 
  
  )
  return {
    title: `${store?.name} - Settings`
    ,
    openGraph: {
      title: id,
    },
  }
}
const SettingsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const  userId  = await auth();

  if (userId?.user.role!=="ADMIN") {
    redirect('/');
  }

  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
      userId:userId.user.id
    }
  });
  if(!store){
    redirect("/dashboard")
  }


  return ( 

    <>
  
    {
   <div className="flex-col">
   <div className="flex-1 space-y-4 p-8 pt-6">
     <SettingsForm initialData={store} />
   </div>
 </div>
    }
 
    </>

  );
}

export default SettingsPage;
