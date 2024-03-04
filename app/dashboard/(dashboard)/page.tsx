"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/dashboard/hooks/use-store-modal";
import { title } from "process";
import { Children, useEffect } from "react";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpend = useStoreModal((state) => state.isOpen);
useEffect(() => {
    if (!isOpend) {
        onOpen();
    }
},[]);
return (
 <div>
    {/* <Modal isOpen onClose={() => {}} title="Setup" description="Setup your store"  >
children

    </Modal> */}
 </div>
)

}
export default SetupPage




























// import { CreditCard, DollarSign, Package } from "lucide-react";

// import { Separator } from "@/components/ui/separator";
// import { Overview } from "@/components/overview";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Heading } from "@/components/ui/heading";
// import { getTotalRevenue } from "@/actions/get-total-revenue";
// import { getSalesCount } from "@/actions/get-sales-count";
// import { getGraphRevenue } from "@/actions/get-graph-revenue";
// import { getStockCount } from "@/actions/get-stock-count";
// import { formatter } from "@/lib/utils";
// import { db } from "@/lib/db";
// import { redirect } from "next/navigation";

// interface DashboardPageProps {
//   params: {
//     storeId: string;
//   };
// };

// const DashboardPage: React.FC<DashboardPageProps> = async ({ 
//   params
// }) => {
//   const totalRevenue = await getTotalRevenue(params.storeId);
//   const graphRevenue = await getGraphRevenue(params.storeId);
//   const salesCount = await getSalesCount(params.storeId);
//   const stockCount = await getStockCount(params.storeId);
//   // "use client";

//   // import { useEffect } from "react";
//   // import { useParams } from "next/navigation";
  
//   // import { useStoreModal } from "@/hooks/use-store-modal";
  
//   // const Page = () => {
//   //   const onOpen = useStoreModal((state) => state.onOpen);
//   //   const isOpen = useStoreModal((state) => state.isOpen);
  
//   //   useEffect(() => {
//   //     if (!isOpen) {
//   //       onOpen();
//   //     }
//   //   }, [isOpen, onOpen]);
  
//   //   return null;
//   // };
   
//   // export default Page;
  
// const isStore = await db.store.findFirst({
//   where:{
//     id:params.storeId
//   }
// })
 

//   return (


// <div className="flex-col">
//       <div className="flex-1 space-y-4 p-8 pt-6">
//         <Heading title="Dashboard" description="Overview of your store" />
//         <Separator />
//         <div className="grid gap-4 grid-cols-3">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Total Revenue
//               </CardTitle>
//               <DollarSign className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{formatter.format(totalRevenue)}</div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Sales</CardTitle>
//               <CreditCard className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">+{salesCount}</div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Products In Stock</CardTitle>
//               <Package className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stockCount}</div>
//             </CardContent>
//           </Card>
//         </div>
//         <Card className="col-span-4">
//           <CardHeader>
//             <CardTitle>Overview</CardTitle>
//           </CardHeader>
//           <CardContent className="pl-2">
//             <Overview data={graphRevenue} />
//           </CardContent>
//         </Card>
//       </div>
//     </div>
    


//   );
// };

// export default DashboardPage;
