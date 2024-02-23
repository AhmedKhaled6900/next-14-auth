// "use server"

import { Product } from "@/types";
import qs from "query-string";

const URL=`http://localhost:3000/api/3ee29f52-68dc-4a46-b9c0-506e06d465eb/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
 
 return await  fetch(url, {
   headers: {
     'Content-Type': 'application/json',
   }
 })
  .then((res) => res.json()).then((data) => { 
    console.log(data)
    return data
  })


};

export default getProducts;
