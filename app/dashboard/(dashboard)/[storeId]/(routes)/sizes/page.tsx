import { format } from "date-fns";

import {db} from "@/lib/db";

import { SizeColumn } from "./components/columns"
import { SizesClient } from "./components/client";
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
    title: `${store?.name} - Sizes`
    ,
    openGraph: {
      title: id,
    },
  }
}
const SizesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const sizes = await db.size.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
