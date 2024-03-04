import { Category } from "@/types";
const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;
  
 const getCategories = async (): Promise<Category[]> =>{
  const data = await fetch(URL, {
    cache: "no-cache",
  }).then((res) => res.json());
  return data
// return await fetch(URL, {
//   }).then((res) => res.json()).then( (data) => {
//     return  data;
//   });
  };
export default getCategories;









