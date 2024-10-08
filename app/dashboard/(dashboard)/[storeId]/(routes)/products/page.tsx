import { format } from "date-fns";

import {db} from "@/lib/db";
import { formatter } from "@/lib/utils";

import { ProductsClient } from "./components/client";
import { ProductColumn } from "./components/columns";
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
    title: `${store?.name} - Products`
    ,
    openGraph: {
      title: id,
    },
  }
}
const ProductsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const products = await db.product.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      category: true,
      size: true,
      color: true,
      reviews:true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    size: item.size.name,
    reviews: item.reviews.length,
    color: item.color.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
