"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { cn } from "@/lib/utils"
import { Category } from "@/types";
import { usePathname } from "next/navigation";
import NavbarActions from "./ui/navbar-actions";
import { UserButton } from "./auth/user-button";
import { useCurrentRole } from "@/hooks/use-current-role";
import { Button } from "./ui/button";

interface MainNavProps {
  data: Category[];
}
const Navbar:React.FC<MainNavProps>  = ({data}) => {

  const handleNavLinkClick =()=>{

setNav(false)  }
  const role = useCurrentRole();
    const [nav, setNav] = useState(false);

    // Function to hide nav on resize
const handleResize = () => {
    if (window.innerWidth >= 768) { // Assuming 768px is your md breakpoint
        setNav(false);
    }
};
// Set up event listener for window resize
useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
 
  return (
    <div className=" z-50 flex justify-end items-center w-full h-20 px-0 text-white nav">
      <ul className="hidden md:flex z-50  ">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black p-3 z-50',
            route.active ? 'text-black border-b-2 border-black '  : 'text-neutral-500'
          )}
        >
          {route.label}
      </Link>
      ))}
      <div className="flex items-center gap-y-4 m-2">
      <NavbarActions /> 
      </div>
<UserButton></UserButton>
      </ul>



      {
  role==="ADMIN"? (
    <Button className="m-5">
    <Link href={"/dashboard"}>
      Dashboard
    </Link>
    </Button>

  ):null
}

{/* <NavbarActions />  */}

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden text-black"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <>

        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-400 text-gray-500">
          {routes.map((route) => (
        <Link
        onClick={handleNavLinkClick}
          key={route.href}
          href={route.href}
          className={cn(
            'text-lg font-bold transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-white'
          )}
        >
          {route.label}
      </Link>
      ))}
      <div onClick={handleNavLinkClick} className="flex items-center gap-y-4 m-2">

      <NavbarActions  /> 

      </div>

                <UserButton></UserButton>

        </ul>
        </>
      )}


    </div>
  );
};

export default Navbar;