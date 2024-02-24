import { Category } from "@/types";
import axios from "axios";




const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;
  
 const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, {
    headers: {
      key: 'Content-Type',
      value: 'application/json',
    }
  })
     .then((res) => res.json())
     .then((data) => {
       return data;
     });
     return res
  };
export default getCategories;






