"use client"
import  {Billboard}  from "@/types";
import { useEffect, useState } from "react";

interface BillboardProps {

  data: Billboard;
}

// const Billboards: React.FC<BillboardProps> = ({
//   data
// }) => {
const Billboards : React.FC<BillboardProps> = ({data}) => {
const [textColor, setTextColor] = useState('initialColor'); // Initial color

useEffect(() => {
  const intervalId = setInterval(() => {
    const colors = ['#ffff', '#000']; // Color array
    setTextColor(colors[Math.floor(Math.random() * colors.length)]);
  }, 200); // Change color every 2 seconds

  return () => clearInterval(intervalId); // Cleanup function for cleanup on unmount
}, []);

  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: ` url(${data?.imageUrl})` }} className="  rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div  className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
   );
}



export default Billboards;
