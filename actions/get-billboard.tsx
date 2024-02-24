import { Billboard } from "@/types";


const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

 const getBillboard = async(id: string): Promise<Billboard>=> {
 
   const res=  await fetch(`${URL}/${id}`, {
    headers: {
      key: 'Content-Type',
      value: 'application/json',
    }
   }
   )
     .then((res) => res.json())
     .then((data) => {
       return data;
     });
  return res
};

export default getBillboard;


