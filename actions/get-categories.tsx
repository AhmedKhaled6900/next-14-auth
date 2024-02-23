import { Category } from "@/types";
import axios from "axios";




const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;
  
 const getCategories = async (): Promise<Category[]> => {
  return await fetch(URL)
     .then((res) => res.json())
     .then((data) => {
       return data;
     });
  };
export default getCategories;






