import { format } from "date-fns";

import {db} from "@/lib/db";

import { ColorColumn } from "./components/columns"
import { ColorClient } from "./components/client";
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
    title: `${store?.name} - Colors`
    ,
    openGraph: {
      title: id,
    },
  }
}
const ColorsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const colors = await db.color.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
