// "use client"

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { cn } from "@/lib/utils"
// import { Category } from "@/types";
// import { usePathname } from "next/navigation";
// import NavbarActions from "./ui/navbar-actions";
// import { UserButton } from "./auth/user-button";
// import { useCurrentRole } from "@/hooks/use-current-role";
// import { Button } from "./ui/button";
// import { ThemeToggle } from "@/app/dashboard/(dashboard)/_dashboard-components/theme-toggle";
// import { Plus, X } from "lucide-react";
// import { Dialog } from "@headlessui/react";
// import { Menu } from 'lucide-react';
// import IconButton  from "@/components/ui/icon-button";
// import { Color, Size } from "@/types";

// // import Filter from "./filter";
// interface MainNavProps {
//   data: Category[];
// }
// const Navbar:React.FC<MainNavProps>  = ({data}) => {
// const role = useCurrentRole();

// const [open, setOpen] = useState(false);

// const onOpen = () => setOpen(true);
// const onClose = () => setOpen(false);

// const pathname = usePathname();
//   const routes = data.map((route) => ({
//     href: `/categories/${route.id}`,
//     label: route.name,
//     active: pathname === `/categories/${route.id}`,
//   }));
 
//   return (
//     <div className=" z-50 flex justify-end items-center w-full h-20 px-0  ">
//       {
//         !open && <Button
//         onClick={onOpen}
//         className="flex items-center gap-x-2 "
//       >
//         <Menu size={20} />
//       </Button>
//       }
     
//     <Dialog open={open} as="div" className="relative z-40 " onClose={onClose}>   
//     {/* Background color and opacity */}
//     <div
//           className={cn(
//             "fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300",
//             open ? "opacity-100" : "opacity-0"
//           )}
//         />
//     {/* Dialog position */}
//     <div className="fixed inset-0 z-40 flex">
//       <Dialog.Panel
//        onClick={onClose} 
//        className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition-transform duration-1000">
//         {/* Close button */}
//         <div className="flex items-center justify-end px-4">
//           <Button>
//         <X size={20}  onClick={onClose} />
//           </Button>
//         </div>

//         <div className="flex items-center justify-center gap-4 my-5">
//       <NavbarActions /> 
//       <UserButton></UserButton>
//       {
//   role==="ADMIN"? (
//     <Button className="">
//     <Link href={"/dashboard"}>
//       Dashboard
//     </Link>
//     </Button>

//   ):null
// }
//       </div>
    
//         <h3 className="font-bold text-lg p-3">
//           Categories
//         </h3>
//         <div className=" flex flex-wrap ">

//         {routes.map((route) => (

//         <Link onClick={onClose}
//           key={route.href}
//           href={route.href}
//           className={cn(
//             'text-sm font-medium transition-colors p-3 z-50 hover:font-bold whitespace-nowrap',
//             route.active ? 'font-bold '  : ''
//           )}
//         >
//           {route.label}
//       </Link>
//       ))} 
//         </div>
//       </Dialog.Panel>
//     </div>
//   </Dialog>
//   </div>
//   );
// };

// export default Navbar;

// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { Dialog } from "@headlessui/react";

// import { Category } from "@/types";
// import { cn } from "@/lib/utils";
// import NavbarActions from "./ui/navbar-actions";
// import { UserButton } from "./auth/user-button";
// import { useCurrentRole } from "@/hooks/use-current-role";
// import { Button } from "./ui/button";

// interface MainNavProps {
//   data: Category[];
// }

// const Navbar: React.FC<MainNavProps> = ({ data }) => {
//   const role = useCurrentRole();
//   const [open, setOpen] = useState(false);

//   const onOpen = () => setOpen(true);
//   const onClose = () => setOpen(false);

//   const pathname = usePathname();
//   const routes = data.map((route) => ({
//     href: `/categories/${route.id}`,
//     label: route.name,
//     active: pathname === `/categories/${route.id}`,
//   }));

//   return (
//     <div className="z-50 flex justify-end items-center w-full h-20 px-0">
//       {/* Open Button */}
//       {!open && (
//         <Button onClick={onOpen} className="flex items-center gap-x-2">
//           <Menu size={20} />
//         </Button>
//       )}

//       {/* Dialog with Smooth Animation */}
//       <Dialog open={open} as="div" className="relative z-40" onClose={onClose}>
//         {/* Background Overlay */}
//         <div
//           className={cn(
//             "fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-3000",
//             open ? "opacity-100" : "opacity-0"
//           )}
//         />
//         {/* Sidebar Animation */}
//         <div className="fixed inset-0 z-40 flex">
//           <Dialog.Panel
//             onClick={onClose}
//             className={cn(
//               "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition-transform duration-3000",
//               open ? "translate-x-0" : "translate-x-full"
//             )}
//           >
//             {/* Close Button */}
//             <div className="flex items-center justify-end px-4">
//               <Button onClick={onClose}>
//                 <X size={20} />
//               </Button>
//             </div>

//             {/* User Actions */}
//             <div className="flex items-center justify-center gap-4 my-5">
//               <NavbarActions />
//               <UserButton />
//               {role === "ADMIN" ? (
//                 <Button>
//                   <Link href={"/dashboard"}>Dashboard</Link>
//                 </Button>
//               ) : null}
//             </div>

//             {/* Categories */}
//             <h3 className="font-bold text-lg p-3">Categories</h3>
//             <div className="flex flex-wrap">
//               {routes.map((route) => (
//                 <Link
//                   onClick={onClose}
//                   key={route.href}
//                   href={route.href}
//                   className={cn(
//                     "text-sm font-medium transition-colors p-3 hover:font-bold whitespace-nowrap",
//                     route.active ? "font-bold" : ""
//                   )}
//                 >
//                   {route.label}
//                 </Link>
//               ))}
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import { Category } from "@/types";
import { cn } from "@/lib/utils";
import NavbarActions from "./ui/navbar-actions";
import { UserButton } from "./auth/user-button";
import { useCurrentRole } from "@/hooks/use-current-role";
import { Button } from "./ui/button";

interface MainNavProps {
  data: Category[];
}

const Navbar: React.FC<MainNavProps> = ({ data }) => {
  const role = useCurrentRole();
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/categories/${route.id}`,
    label: route.name,
    active: pathname === `/categories/${route.id}`,
  }));

  return (
    <div className="z-50 flex justify-end items-center w-full h-20 px-0">
      {/* Open Button */}
      {!open && (
        <Button onClick={onOpen} className="flex items-center gap-x-2">
          <Menu size={20} />
        </Button>
      )}

      {/* Dialog with Smooth Animation */}
      <Dialog open={open} as="div" className="relative z-40 transition duration-1000 " onClose={onClose}>
        {/* Background Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-1000",
            open ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Sidebar Animation */}
        <div className="fixed inset-0 z-50 flex justify-end">
          <Dialog.Panel
            className={cn(
              "relative h-full w-full max-w-xs bg-white shadow-xl flex flex-col overflow-y-auto transition-all duration-1000",
              open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            )}
          >
            {/* Close Button */}
            <div className="flex items-center justify-end px-4 py-2 border-b">
              <Button onClick={onClose}>
                <X size={20} />
              </Button>
            </div>

            {/* User Actions */}
            <div className="flex items-center justify-center gap-4 my-5">
              <NavbarActions />
              <UserButton />
              {role === "ADMIN" && (
                <Button>
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
              )}
            </div>

            {/* Categories */}
            <h3 className="font-bold text-lg p-3">Categories</h3>
            <div className="flex flex-wrap">
              {routes.map((route) => (
                <Link
                  onClick={onClose}
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors p-3 hover:font-bold whitespace-nowrap",
                    route.active ? "font-bold" : ""
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Navbar;
