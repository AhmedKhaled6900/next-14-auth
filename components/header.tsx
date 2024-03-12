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
import { ThemeToggle } from "@/app/dashboard/(dashboard)/_dashboard-components/theme-toggle";

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
    <div className=" z-50 flex justify-end items-center w-full h-20 px-0  nav">
      <ul className="hidden md:flex z-50  ">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors p-3 z-50',
            route.active ? 'border-b-2 '  : ''
          )}
        >
          {route.label}
      </Link>
      ))}
     
      
      <div className="flex items-center gap-y-4 m-2">
      <ThemeToggle />
      </div>
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
        className="cursor-pointer pr-4 z-10 md:hidden "
      >
        {nav ?  
        <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
          </path>
        </svg>
        :
        <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">

        </path>
    </svg> 
        
        }
      </div>

      {nav && (
        <>

        <ul  className="flex flex-col bg-navigation items-center absolute top-16 py-10  right-0 w-64  h-screen">
          {routes.map((route) => (
        <Link
        onClick={handleNavLinkClick}
          key={route.href}
          href={route.href}
          className={cn(
            'text-lg font-bold transition-colors hover:text-black  ',
            // route.active ? 'text-black' : 'text-white'
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