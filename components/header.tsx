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

interface MainNavProps {
  data: Category[];
}
const Navbar:React.FC<MainNavProps>  = ({data}) => {
  // const role = useCurrentRole();
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
// console.log(data)
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
 
  return (

    


    <div className="flex justify-between items-center w-full h-20 px-4 text-black  nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        {/* <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1> */}
      </div>

      <ul className="hidden md:flex ">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black p-3',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
      </Link>


      ))}

<NavbarActions /> 
<UserButton></UserButton>


      </ul>
      {/* {
  role==="ADMIN"? (
    <Link href={"/dashboard"}>
      Dashboard
    </Link>
  ):null
} */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
      </Link>
      ))}
                <NavbarActions /> 
                <UserButton></UserButton>

        </ul>
      )}


    </div>
  );
};

export default Navbar;