import { Billboard } from "@/types";
import axios from "axios";


const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

 const getBillboard = async(id: string): Promise<Billboard>=> {
 
  return await fetch(`${URL}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  )
  .then((res) => res.json())
  .then((data) => {
    return data;
  });
  
};

export default getBillboard;


