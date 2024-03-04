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

// import useSWR from 'swr';
// const fetcher = async (url: string | URL | Request) => {
//   const response = await fetch(url);
  // if (!response.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // return await response.json();
// };
// export  const useMyData = () => {
//   const { data, error,isLoading } = useSWR(URL, fetcher);

//   return {
//     data,
//     isLoading: !error && !data,
//     error,
//   };
// };

// Define the fetcher function







