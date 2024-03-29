import { Product } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`, {
    headers: {
      key: 'Content-Type',
      value: 'application/json',
    }
  }).then((res) => res.json()).then((data) => {
    return data;
  });

  return res
};

export default getProduct;
