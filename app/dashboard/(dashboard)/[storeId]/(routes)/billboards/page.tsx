import { format } from "date-fns";

import {db} from "@/lib/db";

import { BillboardColumn } from "./components/columns"
import { BillboardClient } from "./components/client";
import { Metadata } from "next";


export async function generateMetadata(
  params : {
    storeId: string
   },
): Promise<Metadata> {
  const id = params.storeId
  const store =await db.store.findFirst({
    where:{
      id:params.storeId
    }
  },
 
  
  )
  return {
    title: `${store?.name} - Billboards`
    ,
    openGraph: {
      title: id,
    },
  }
}



const BillboardsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const billboards = await db.billboard.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
