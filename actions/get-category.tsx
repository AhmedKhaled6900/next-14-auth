// import { Category } from "@/types";

// const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategory = async (id: string): Promise<Category> => {
//   const res = await fetch(`${URL}/${id}`
  
//   , {
//     headers: {
//       key: 'Content-Type',
//       value: 'application/json',
//     }
//   }
//   ).then((res) => res.json()).then((data) => {
//     return data;
//   });
//   return res

// };

// export default getCategory;

import { Category } from "@/types"

const url =`${process.env.Next_PUBLIC_API_URL}/categories`

const getCategories = async():Promise<Category[]>=>{
    const res = await fetch (url)
    return res.json()

}
export default getCategories