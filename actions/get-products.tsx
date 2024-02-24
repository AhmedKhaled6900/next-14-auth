// "use server"

import { Product } from "@/types";
import qs from "query-string";
import { resolve } from "styled-jsx/macro";

const URL= (`${process.env.NEXT_PUBLIC_API_URL}/products`);

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
 
 const res =  await fetch(url, {
  headers: {
    key: 'Content-Type',
    value: 'application/json',
  }
 })
  .then((res) => res.json())
  .then((data) => { 

return data
 
  })

  return res
};

export default getProducts;
